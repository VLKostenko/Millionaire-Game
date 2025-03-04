export interface QuizQuestion {
  id: number;
  question: string;
  answers: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: string | string[];
}

export interface QuizData {
  questions: QuizQuestion[];
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: string[];
  isAnswered: boolean;
  isQuizCompleted: boolean;
}

export type QuizAction =
  | { type: 'SELECT_ANSWER'; payload: string }
  | { type: 'CHECK_ANSWER' }
  | { type: 'NEXT_QUESTION' };
