"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useExamStore } from "@/stores/examStore";
import { examSets } from "@/data/exam-sets";
import MathRenderer from "@/components/ui/MathRenderer";
import type { OptionLetter, Question } from "@/types/exam";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export default function ExamPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>}>
      <ExamContent />
    </Suspense>
  );
}

function ExamContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    examSetId,
    examStatus,
    timeRemaining,
    currentQuestionIndex,
    answers,
    flaggedQuestions,
    startExam,
    setAnswer,
    toggleFlag,
    setCurrentQuestion,
    nextQuestion,
    prevQuestion,
    submitExam,
    tick,
  } = useExamStore();

  const [showNav, setShowNav] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const activeSet = examSets.find((s) => s.id === (examSetId ?? searchParams.get("set")));
  const questions = activeSet?.questions ?? [];
  const TOTAL_QUESTIONS = questions.length;
  const currentQuestion: Question | undefined = questions[currentQuestionIndex];

  const answeredCount = Object.keys(answers).length;
  const flaggedCount = flaggedQuestions.length;
  const unanswered = TOTAL_QUESTIONS - answeredCount;
  const isLowTime = timeRemaining <= 300;
  const selectedAnswer = currentQuestion ? (answers[currentQuestion.id] ?? null) : null;
  const isFlagged = currentQuestion ? flaggedQuestions.includes(currentQuestion.id) : false;

  useEffect(() => {
    if (examStatus === "submitted") {
      router.push("/results");
      return;
    }
    if (examStatus === "not-started") {
      const setId = searchParams.get("set");
      if (!setId || !examSets.find((s) => s.id === setId)) {
        router.push("/");
        return;
      }
      startExam(setId);
    }
  }, [examStatus, searchParams, startExam, router]);

  useEffect(() => {
    if (examStatus !== "in-progress") return;
    const interval = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [examStatus, tick]);

  useEffect(() => {
    if (timeRemaining <= 0 && examStatus === "in-progress") {
      submitExam();
      router.push("/results");
    }
  }, [timeRemaining, examStatus, submitExam, router]);

  const handleSelect = useCallback(
    (letter: OptionLetter) => {
      if (examStatus !== "in-progress" || !currentQuestion) return;
      if (answers[currentQuestion.id] === letter) return;
      setAnswer(currentQuestion.id, letter);
    },
    [examStatus, answers, currentQuestion, setAnswer]
  );

  const handleSubmit = useCallback(() => {
    submitExam();
    setShowSubmitDialog(false);
    router.push("/results");
  }, [submitExam, router]);

  useEffect(() => {
    if (examStatus !== "in-progress") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "n") {
        nextQuestion(TOTAL_QUESTIONS);
      } else if (e.key === "ArrowLeft" || e.key === "p") {
        prevQuestion();
      } else if (e.key === "f" && currentQuestion) {
        toggleFlag(currentQuestion.id);
      } else if (["a", "b", "c", "d", "e"].includes(e.key.toLowerCase()) && currentQuestion) {
        handleSelect(e.key.toUpperCase() as OptionLetter);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [examStatus, nextQuestion, prevQuestion, toggleFlag, currentQuestion, handleSelect, TOTAL_QUESTIONS]);

  if (!activeSet || !currentQuestion) {
    return null;
  }

  if (examStatus === "submitted") return null;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className={`font-mono text-lg font-bold ${
              isLowTime ? "text-exam-incorrect animate-pulse" : "text-exam-dark"
            }`}
          >
            {formatTime(timeRemaining)}
          </span>
          <span className="text-sm text-gray-500">
            {answeredCount}/{TOTAL_QUESTIONS} answered
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowNav(!showNav)}
            className="md:hidden px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            {showNav ? "Hide" : "Grid"}
          </button>
          <button
            onClick={() => setShowSubmitDialog(true)}
            className="px-4 py-1.5 bg-exam-dark text-white text-sm font-medium rounded-lg hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Navigation sidebar */}
        <aside
          className={`${
            showNav ? "block" : "hidden"
          } md:block w-full md:w-56 lg:w-64 border-r border-gray-200 bg-exam-surface p-4 overflow-y-auto`}
        >
          <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-6 gap-1.5">
            {questions.map((q, idx) => {
              const isAnswered = answers[q.id] !== undefined;
              const isFlaggedQ = flaggedQuestions.includes(q.id);
              const isCurrent = idx === currentQuestionIndex;
              let className = "w-8 h-8 text-xs font-medium rounded border ";
              if (isCurrent) {
                className += "bg-exam-blue text-white border-exam-blue ";
              } else if (isFlaggedQ) {
                className += "bg-amber-50 text-amber-700 border-amber-400 ";
              } else if (isAnswered) {
                className += "bg-blue-50 text-blue-700 border-blue-300 ";
              } else {
                className += "bg-white text-gray-500 border-gray-300 ";
              }
              return (
                <button
                  key={q.id}
                  className={className}
                  onClick={() => setCurrentQuestion(idx)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-white border border-gray-300" />
              Unanswered
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-blue-50 border border-blue-300" />
              Answered
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-amber-50 border border-amber-400" />
              Flagged
            </div>
          </div>
        </aside>

        {/* Main question area */}
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 md:px-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-exam-dark">
                Problem {currentQuestionIndex + 1}
                <span className="ml-2 text-sm font-normal text-gray-400">
                  (Week {Array.isArray(currentQuestion.week) ? currentQuestion.week.join(", ") : currentQuestion.week})
                </span>
              </h2>
              <button
                onClick={() => toggleFlag(currentQuestion.id)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  isFlagged
                    ? "bg-amber-50 text-amber-700 border-amber-400"
                    : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {isFlagged ? "Flagged" : "Flag"}
              </button>
            </div>

            <div className="text-base leading-relaxed">
              <MathRenderer content={currentQuestion.stem} />
            </div>

            <div className="space-y-2">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedAnswer === opt.letter;
                return (
                  <button
                    key={opt.letter}
                    onClick={() => handleSelect(opt.letter)}
                    className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors flex items-start gap-3 ${
                      isSelected
                        ? "border-exam-blue bg-blue-50"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                        isSelected
                          ? "border-exam-blue bg-exam-blue text-white"
                          : "border-gray-300 text-gray-500"
                      }`}
                    >
                      {opt.letter}
                    </span>
                    <span className="flex-1 pt-0.5">
                      <MathRenderer content={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={() => prevQuestion()}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-sm text-gray-400">
              {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}
            </span>
            <button
              onClick={() => nextQuestion(TOTAL_QUESTIONS)}
              disabled={currentQuestionIndex === TOTAL_QUESTIONS - 1}
              className="px-4 py-2 text-sm font-medium text-white bg-exam-blue rounded-lg hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </main>
      </div>

      {/* Submit dialog */}
      {showSubmitDialog && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full space-y-4">
            <h3 className="text-lg font-semibold text-exam-dark">Submit Exam?</h3>
            <div className="text-sm text-gray-600 space-y-1">
              {unanswered > 0 && (
                <p className="text-exam-flagged font-medium">
                  You have {unanswered} unanswered question{unanswered !== 1 ? "s" : ""}.
                </p>
              )}
              {flaggedCount > 0 && (
                <p className="text-exam-flagged font-medium">
                  You have {flaggedCount} question{flaggedCount !== 1 ? "s" : ""} flagged for review.
                </p>
              )}
              <p>This action cannot be undone.</p>
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowSubmitDialog(false)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-sm bg-exam-dark text-white rounded-lg hover:bg-gray-800"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
