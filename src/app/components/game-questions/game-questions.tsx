'use client'

import React, { useMemo } from 'react'
import { useReducer } from 'react'
import styles from '@/app/game/game.module.css'

// Data
import questions from '@/app/data/questions.json'
import score from '@/app/data/score.json'

// Components
import GameCtaButton from '@/app/components/game-cta-button/game-cta-button'
import MobileMenu from '@/app/components/mobile-menu/mobile-menu'
import ScoreList from '@/app/components/score-list/score-list'

// Hooks
import useMediaQuery from '@/app/hooks/ui/useMediaQuery'
import { useHandleAnswer } from '@/app/hooks/ui/useHandleAnswer'
import { useHandleQuizCompleted } from '@/app/hooks/ui/useHandleQuizCompleted'

// Modules
import { quizReducer, initialState } from '@/app/modules/questions-reducer'

// Interfaces
import { QuizData, QuizQuestion, ScoreInterface } from '@/app/game/interfaces'

export const quizData: QuizData = questions
export const scoreData: ScoreInterface[] = score

const GameQuestions: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)')
  const [state, dispatch] = useReducer(quizReducer, initialState)

  const question: QuizQuestion = useMemo(
    () => quizData.questions[state.currentQuestionIndex],
    [state.currentQuestionIndex]
  )

  const correctAnswers: string[] = useMemo(
    () =>
      Array.isArray(question.correct) ? question.correct : [question.correct],
    [question]
  )

  const requiredCorrectAnswers = correctAnswers.length

  const isCorrect: boolean =
    state.selectedAnswers.length > 0 &&
    state.selectedAnswers.every((ans) => correctAnswers.includes(ans)) &&
    correctAnswers.length === state.selectedAnswers.length

  // Check for another steps
  useHandleAnswer({ state, dispatch, isCorrect })

  // After quiz completed redirect to Game Over page
  useHandleQuizCompleted({ state })

  return (
    <>
      {isMobile && <MobileMenu currentIndex={state.currentQuestionIndex} />}

      <div className={styles.game__content}>
        <h1 className={styles.game__h1}>{question.question}</h1>

        {state.isQuizCompleted ? (
          <h2 className={styles.game__h2}>Quiz Completed! 🎉</h2>
        ) : (
          <div className={styles.game__answers_container}>
            <h3
              className={styles.game__h3}
            >{`Select ${requiredCorrectAnswers} correct answer(s)`}</h3>

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
          </div>
        )}
      </div>

      {!isMobile && <ScoreList currentIndex={state.currentQuestionIndex} />}
    </>
  )
}

export default GameQuestions
