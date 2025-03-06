// import {quizData} from "@/app/components/game-questions/game-questions";
//
// // Определяем структуру состояния
// export interface QuizState {
//   currentQuestionIndex: number;
//   selectedAnswers: string[];
//   isAnswered: boolean;
//   isCorrect: boolean;
//   isQuizCompleted: boolean;
// }
//
// // Начальное состояние квиза
// export const initialState: QuizState = {
//   currentQuestionIndex: 0,
//   selectedAnswers: [],
//   isAnswered: false,
//   isCorrect: false,
//   isQuizCompleted: false,
// };
//
// // Определяем типы экшенов
// type QuizAction =
//   | { type: 'SELECT_ANSWER'; payload: string }
//   | { type: 'CHECK_ANSWER' }
//   | { type: 'NEXT_QUESTION' }
//   | { type: 'RESET_QUIZ' };
//
// // Редюсер
// export const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
//   switch (action.type) {
//     case 'SELECT_ANSWER':
//       return {
//         ...state,
//         selectedAnswers: [...state.selectedAnswers, action.payload],
//         isAnswered: true,
//       };
//
//     case 'CHECK_ANSWER': {
//       const question = quizData.questions[state.currentQuestionIndex];
//       const correctAnswers = Array.isArray(question.correct)
//         ? question.correct
//         : [question.correct];
//
//       const isCorrect =
//         state.selectedAnswers.length > 0 &&
//         state.selectedAnswers.every((ans) => correctAnswers.includes(ans)) &&
//         correctAnswers.length === state.selectedAnswers.length;
//
//       return { ...state, isCorrect };
//     }
//
//     case 'NEXT_QUESTION': {
//       const nextIndex = state.currentQuestionIndex + 1;
//       const isQuizCompleted = nextIndex >= quizData.questions.length;
//
//       return {
//         ...state,
//         currentQuestionIndex: isQuizCompleted ? state.currentQuestionIndex : nextIndex,
//         selectedAnswers: [],
//         isAnswered: false,
//         isCorrect: false,
//         isQuizCompleted,
//       };
//     }
//
//     case 'RESET_QUIZ':
//       return initialState;
//
//     default:
//       return state;
//   }
// };
