import { quizData } from '@/app/components/game-questions/game-questions'
import { QuizAction, QuizState } from '@/app/game/interfaces'

export const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswers: [],
  isAnswered: false,
  isQuizCompleted: false,
}

export const quizReducer = (
  state: QuizState,
  action: QuizAction
): QuizState => {
  switch (action.type) {
    case 'SELECT_ANSWER':
      if (state.isAnswered) return state
      return {
        ...state,
        selectedAnswers: state.selectedAnswers.includes(action.payload)
          ? state.selectedAnswers.filter((ans) => ans !== action.payload)
          : [...state.selectedAnswers, action.payload],
      }
    case 'CHECK_ANSWER':
      return { ...state, isAnswered: true }
    case 'NEXT_QUESTION':
      if (state.currentQuestionIndex < quizData.questions.length - 1) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          selectedAnswers: [],
          isAnswered: false,
        }
      } else {
        return { ...state, isQuizCompleted: true }
      }
    default:
      return state
  }
}
