'use client';

import { useReducer } from 'react';
import styles from './game.module.css';
import questions from '../questions.json';

// Components
import ScoreList from '@/app/components/score-list/score-list';
import BaseParagraph from '@/app/components/base-paragraph/base-paragraph';
import GameCtaButton from '@/app/components/game-cta-button/game-cta-button';
import MobileMenu from '@/app/components/mobile-menu/mobile-menu';

// Hooks
import useMediaQuery from '@/app/hooks/useMediaQuery';

// Interfaces
import {
  QuizAction,
  QuizData,
  QuizQuestion,
  QuizState,
} from '@/app/game/interfaces';

const quizData: QuizData = questions;

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswers: [],
  isAnswered: false,
  isQuizCompleted: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SELECT_ANSWER':
      if (state.isAnswered) return state;
      return {
        ...state,
        selectedAnswers: state.selectedAnswers.includes(action.payload)
          ? state.selectedAnswers.filter((ans) => ans !== action.payload)
          : [...state.selectedAnswers, action.payload],
      };
    case 'CHECK_ANSWER':
      return { ...state, isAnswered: true };
    case 'NEXT_QUESTION':
      if (state.currentQuestionIndex < quizData.questions.length - 1) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          selectedAnswers: [],
          isAnswered: false,
        };
      } else {
        return { ...state, isQuizCompleted: true };
      }
    default:
      return state;
  }
}

export default function Game() {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const question: QuizQuestion = quizData.questions[state.currentQuestionIndex];
  const correctAnswers: string[] = Array.isArray(question.correct)
    ? question.correct
    : [question.correct];
  const requiredCorrectAnswers = correctAnswers.length;

  const isCorrect: boolean =
    state.selectedAnswers.length > 0 &&
    state.selectedAnswers.every((ans) => correctAnswers.includes(ans)) &&
    correctAnswers.length === state.selectedAnswers.length;

  return (
    <main className={styles.game}>
      {isMobile && <MobileMenu isCorrect={isCorrect} />}

      <div className={styles.game__content}>
        <BaseParagraph style={styles.game__h1} title={question.question} />

        {state.isQuizCompleted && <h2>Quiz Completed! 🎉</h2>}

        <div className={styles.game__answers_container}>
          <BaseParagraph
            style={styles.game__h3}
            title={`Select ${requiredCorrectAnswers} correct answer(s)`}
          />

          <div className={styles.game__answers}>
            {Object.entries(question.answers).map(([key, value]) => (
              <GameCtaButton
                state={state}
                id={key}
                correctAnswers={correctAnswers}
                symbol={key}
                title={value}
                key={key}
                onClick={() =>
                  dispatch({ type: 'SELECT_ANSWER', payload: key })
                }
              />
            ))}
          </div>

          {!state.isAnswered ? (
            <button
              onClick={() => dispatch({ type: 'CHECK_ANSWER' })}
              disabled={state.selectedAnswers.length === 0}
            >
              Submit Answer
            </button>
          ) : (
            <>
              <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
              <button onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>
                Next Question
              </button>
            </>
          )}
        </div>
      </div>

      {!isMobile && <ScoreList isCorrect={isCorrect} />}
    </main>
  );
}
