export type OptionLetter = "A" | "B" | "C" | "D" | "E";

export type Difficulty = "core" | "deeper" | "recall" | "synthesis";

export interface Option {
  letter: OptionLetter;
  text: string;
  isCorrect: boolean;
}

export interface DistractorAnnotation {
  option: OptionLetter;
  type: "partial-credit" | "trick-answer";
  reason: string;
}

export interface Question {
  id: number;
  week: number | [number, number];
  topics: string[];
  difficulty: Difficulty;
  stem: string;
  options: Option[];
  correctAnswer: OptionLetter;
  explanation: string;
  distractorAnalysis: DistractorAnnotation[];
  hasPartialCredit: boolean;
  partialCreditOptions?: OptionLetter[];
}

export interface TopicScore {
  weekRange: string;
  label: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface QuestionResult {
  questionId: number;
  yourAnswer: OptionLetter | null;
  correctAnswer: OptionLetter;
  isCorrect: boolean;
  isPartialCredit: boolean;
}

export interface ExamResults {
  totalCorrect: number;
  totalPartialCredit: number;
  totalQuestions: number;
  rawScore: number;
  adjustedScore: number;
  percentage: number;
  adjustedPercentage: number;
  timeElapsed: number;
  topicScores: TopicScore[];
  questionResults: QuestionResult[];
}
