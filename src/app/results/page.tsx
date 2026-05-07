"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useExamStore } from "@/stores/examStore";
import { questions } from "@/data/questions";
import type { ExamResults, TopicScore, QuestionResult } from "@/types/exam";
import MathRenderer from "@/components/ui/MathRenderer";

const TOPIC_GROUPS: { weekRange: string; label: string; weeks: (number | string)[] }[] = [
  { weekRange: "Weeks 1–3", label: "Systems, Vector Spaces, Linear Maps", weeks: [1, 2, 3] },
  { weekRange: "Weeks 4–6", label: "Bases, Inner Products, Orthogonal Decomp", weeks: [4, 5, 6] },
  { weekRange: "Weeks 7–9", label: "Eigenvalues, Diagonalization, Dynamics", weeks: [7, 8, 9] },
  { weekRange: "Weeks 10–11", label: "SVD, PCA", weeks: [10, 11] },
  { weekRange: "Week 12", label: "Neural Networks", weeks: [12] },
  { weekRange: "Synthesis", label: "Cross-Week Problems", weeks: ["synthesis"] },
];

function computeResults(answers: Record<number, string>, startTime: number | null, endTime: number | null): ExamResults {
  const questionResults: QuestionResult[] = questions.map((q) => {
    const yourAnswer = (answers[q.id] ?? null) as string | null;
    const isCorrect = yourAnswer === q.correctAnswer;
    const isPartialCredit = !!(yourAnswer !== null && !isCorrect && q.hasPartialCredit && q.partialCreditOptions?.includes(yourAnswer as any));
    return {
      questionId: q.id,
      yourAnswer: yourAnswer as any,
      correctAnswer: q.correctAnswer,
      isCorrect,
      isPartialCredit,
    };
  });

  const totalCorrect = questionResults.filter((r) => r.isCorrect).length;
  const totalPartialCredit = questionResults.filter((r) => r.isPartialCredit).length;
  const rawScore = totalCorrect;
  const adjustedScore = totalCorrect + totalPartialCredit * 0.5;
  const totalQuestions = questions.length;
  const timeElapsed = startTime && endTime ? Math.round((endTime - startTime) / 1000) : 0;

  const topicScores: TopicScore[] = TOPIC_GROUPS.map((group) => {
    const groupQuestions = questions.filter((q) => {
      const w = Array.isArray(q.week) ? q.week : [q.week];
      if (group.weeks.includes("synthesis") && q.difficulty === "synthesis") return true;
      return w.some((wk) => group.weeks.includes(wk as number));
    });
    const groupResults = questionResults.filter((r) =>
      groupQuestions.some((q) => q.id === r.questionId)
    );
    const correct = groupResults.filter((r) => r.isCorrect).length;
    const total = groupResults.length;
    return {
      weekRange: group.weekRange,
      label: group.label,
      correct,
      total,
      percentage: total > 0 ? Math.round((correct / total) * 100) : 0,
    };
  });

  return {
    totalCorrect,
    totalPartialCredit,
    totalQuestions,
    rawScore,
    adjustedScore,
    percentage: Math.round((totalCorrect / totalQuestions) * 100),
    adjustedPercentage: Math.round((adjustedScore / totalQuestions) * 100),
    timeElapsed,
    topicScores,
    questionResults,
  };
}

export default function ResultsPage() {
  const router = useRouter();
  const { examStatus, answers, startTime, endTime, resetExam } = useExamStore();
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  useEffect(() => {
    if (examStatus !== "submitted") {
      router.push("/");
    }
  }, [examStatus, router]);

  const results = useMemo(
    () => (examStatus === "submitted" ? computeResults(answers, startTime, endTime) : null),
    [answers, startTime, endTime, examStatus]
  );

  if (!results) return null;

  const formatElapsed = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec}s`;
  };

  return (
    <div className="min-h-screen bg-exam-surface">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Score summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-exam-dark mb-4">Exam Results</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-exam-blue">{results.rawScore}/{results.totalQuestions}</p>
              <p className="text-xs text-gray-500 mt-1">Raw Score</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-exam-correct">{results.adjustedScore.toFixed(1)}</p>
              <p className="text-xs text-gray-500 mt-1">With Partial Credit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-exam-dark">{results.percentage}%</p>
              <p className="text-xs text-gray-500 mt-1">Percentage</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-exam-dark">{formatElapsed(results.timeElapsed)}</p>
              <p className="text-xs text-gray-500 mt-1">Time Elapsed</p>
            </div>
          </div>
        </div>

        {/* Topic breakdown */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-exam-dark mb-4">Performance by Topic</h2>
          <div className="space-y-3">
            {results.topicScores.map((topic) => (
              <div key={topic.weekRange} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">{topic.weekRange}</span>
                  <span className="text-gray-500">
                    {topic.correct}/{topic.total} ({topic.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className="bg-exam-blue rounded-full h-2.5 transition-all"
                    style={{ width: `${topic.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Answer review */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-exam-dark mb-4">Answer Review</h2>
          <div className="space-y-3">
            {questions.map((q) => {
              const result = results.questionResults.find((r) => r.questionId === q.id);
              if (!result) return null;
              const isExpanded = expandedQuestion === q.id;
              return (
                <div key={q.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedQuestion(isExpanded ? null : q.id)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-500">Problem {q.id}</span>
                      {result.isCorrect ? (
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded">Correct</span>
                      ) : result.isPartialCredit ? (
                        <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 rounded">Partial Credit</span>
                      ) : (
                        <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded">Incorrect</span>
                      )}
                    </div>
                    <span className="text-gray-400 text-sm">{isExpanded ? "▲" : "▼"}</span>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-gray-200 px-4 py-4 space-y-4 bg-gray-50">
                      {/* Stem */}
                      <div className="text-sm">
                        <MathRenderer content={q.stem} />
                      </div>

                      {/* Options */}
                      <div className="space-y-1.5">
                        {q.options.map((opt) => {
                          const isYourAnswer = result.yourAnswer === opt.letter;
                          const isCorrectOption = opt.letter === q.correctAnswer;
                          let bgClass = "bg-white border-gray-200";
                          if (isCorrectOption) bgClass = "bg-green-50 border-green-400";
                          else if (isYourAnswer && result.isPartialCredit) bgClass = "bg-amber-50 border-amber-400";
                          else if (isYourAnswer && !result.isCorrect) bgClass = "bg-red-50 border-red-300";
                          return (
                            <div
                              key={opt.letter}
                              className={`px-3 py-2 rounded border text-sm flex items-start gap-2 ${bgClass}`}
                            >
                              <span className="font-semibold flex-shrink-0">{opt.letter}.</span>
                              <span className="flex-1">
                                <MathRenderer content={opt.text} />
                              </span>
                              {isCorrectOption && <span className="text-green-600 text-xs font-medium flex-shrink-0">Correct</span>}
                              {isYourAnswer && !isCorrectOption && !result.isPartialCredit && (
                                <span className="text-red-600 text-xs font-medium flex-shrink-0">Your answer</span>
                              )}
                              {isYourAnswer && !isCorrectOption && result.isPartialCredit && (
                                <span className="text-amber-600 text-xs font-medium flex-shrink-0">Partial</span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div className="text-sm text-gray-700 border-t border-gray-200 pt-3 space-y-2">
                        <p className="font-semibold text-exam-dark">Explanation</p>
                        <MathRenderer content={q.explanation} />
                      </div>

                      {/* Distractor analysis */}
                      {q.distractorAnalysis.length > 0 && (
                        <div className="text-xs text-gray-500 border-t border-gray-200 pt-3 space-y-1">
                          <p className="font-semibold">Distractor Analysis</p>
                          {q.distractorAnalysis.map((d) => (
                            <p key={d.option}>
                              <span className={`font-medium ${d.type === "partial-credit" ? "text-amber-600" : "text-gray-600"}`}>
                                ({d.option}) [{d.type}]:
                              </span>{" "}
                              {d.reason}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Retake button */}
        <div className="text-center pb-8">
          <button
            onClick={() => {
              resetExam();
              router.push("/");
            }}
            className="px-6 py-3 bg-exam-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retake Exam
          </button>
        </div>
      </div>
    </div>
  );
}
