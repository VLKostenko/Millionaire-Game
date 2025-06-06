import create from 'zustand';
import { QuizState, QuizAction } from './types';
import { quizReducer, initialState } from './reducer';

export const useGameStore = create((set) => ({
  ...initialState,
  dispatch: (action: QuizAction) => 
    set((state) => quizReducer(state as QuizState, action)),
}));