"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { OptionLetter } from "@/types/exam";

const EXAM_DURATION = 120 * 60; // 120 minutes in seconds

interface ExamState {
  examStatus: "not-started" | "in-progress" | "submitted";
  startTime: number | null;
  endTime: number | null;
  timeRemaining: number;
  currentQuestionIndex: number;
  answers: Record<number, OptionLetter>;
  flaggedQuestions: number[];

  startExam: () => void;
  setAnswer: (questionId: number, option: OptionLetter) => void;
  clearAnswer: (questionId: number) => void;
  toggleFlag: (questionId: number) => void;
  setCurrentQuestion: (index: number) => void;
  nextQuestion: (total: number) => void;
  prevQuestion: () => void;
  submitExam: () => void;
  tick: () => void;
  resetExam: () => void;
  getAnsweredCount: () => number;
  getFlaggedCount: () => number;
}

export const useExamStore = create<ExamState>()(
  persist(
    (set, get) => ({
      examStatus: "not-started",
      startTime: null,
      endTime: null,
      timeRemaining: EXAM_DURATION,
      currentQuestionIndex: 0,
      answers: {},
      flaggedQuestions: [],

      startExam: () => {
        set({
          examStatus: "in-progress",
          startTime: Date.now(),
          endTime: null,
          timeRemaining: EXAM_DURATION,
          currentQuestionIndex: 0,
          answers: {},
          flaggedQuestions: [],
        });
      },

      setAnswer: (questionId, option) => {
        const answers = { ...get().answers, [questionId]: option };
        set({ answers });
      },

      clearAnswer: (questionId) => {
        const { [questionId]: _, ...rest } = get().answers;
        set({ answers: rest });
      },

      toggleFlag: (questionId) => {
        const flagged = [...get().flaggedQuestions];
        const idx = flagged.indexOf(questionId);
        if (idx >= 0) {
          flagged.splice(idx, 1);
        } else {
          flagged.push(questionId);
        }
        set({ flaggedQuestions: flagged });
      },

      setCurrentQuestion: (index) => {
        set({ currentQuestionIndex: index });
      },

      nextQuestion: (total) => {
        const next = Math.min(get().currentQuestionIndex + 1, total - 1);
        set({ currentQuestionIndex: next });
      },

      prevQuestion: () => {
        const prev = Math.max(get().currentQuestionIndex - 1, 0);
        set({ currentQuestionIndex: prev });
      },

      submitExam: () => {
        set({
          examStatus: "submitted",
          endTime: Date.now(),
        });
      },

      tick: () => {
        const remaining = get().timeRemaining;
        if (remaining <= 0) return;
        set({ timeRemaining: remaining - 1 });
      },

      resetExam: () => {
        set({
          examStatus: "not-started",
          startTime: null,
          endTime: null,
          timeRemaining: EXAM_DURATION,
          currentQuestionIndex: 0,
          answers: {},
          flaggedQuestions: [],
        });
      },

      getAnsweredCount: () => Object.keys(get().answers).length,

      getFlaggedCount: () => get().flaggedQuestions.length,
    }),
    {
      name: "ese2030-exam",
      partialize: (state) => ({
        examStatus: state.examStatus,
        startTime: state.startTime,
        endTime: state.endTime,
        timeRemaining: state.timeRemaining,
        currentQuestionIndex: state.currentQuestionIndex,
        answers: state.answers,
        flaggedQuestions: state.flaggedQuestions,
      }),
    }
  )
);
