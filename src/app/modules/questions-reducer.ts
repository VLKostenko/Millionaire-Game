import { quizData } from '@/app/components/game-questions/game-questions';
import { QuizAction, QuizState } from '@/app/game/interfaces';

export const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswers: [],
  isAnswered: false,
  isQuizCompleted: false,
  correctAnswer: null,
};

export const quizReducer = (
  state: QuizState,
  action: QuizAction,
): QuizState => {
  switch (action.type) {
    case 'SELECT_ANSWER':
      if (state.isAnswered) return state;
      return {
        ...state,
        selectedAnswers: state.selectedAnswers.includes(action.payload)
          ? state.selectedAnswers.filter(ans => ans !== action.payload)
          : [...state.selectedAnswers, action.payload],
      };

    case 'CHECK_ANSWER': {
      const currentQuestion = quizData.questions[state.currentQuestionIndex];

      const correctAnswers = Array.isArray(currentQuestion.correct)
        ? currentQuestion.correct
        : [currentQuestion.correct];

      const isCorrect =
        state.selectedAnswers.every(answer =>
          correctAnswers.includes(answer),
        ) && state.selectedAnswers.length === correctAnswers.length;

      return {
        ...state,
        isAnswered: true,
        correctAnswer: isCorrect ? null : correctAnswers,
      };
    }

    case 'NEXT_QUESTION':
      if (state.currentQuestionIndex < quizData.questions.length - 1) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          selectedAnswers: [],
          isAnswered: false,
          correctAnswer: null, // Clear when moving to the next question
        };
      } else {
        return { ...state, isQuizCompleted: true };
      }

    default:
      return state;
  }
};
