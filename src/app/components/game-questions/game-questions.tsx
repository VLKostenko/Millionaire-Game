'use client'

import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect, useReducer } from 'react'
import styles from '@/app/game/game.module.css'

// Data
import questions from '@/app/questions.json'
import score from '@/app/score.json'

// Components
import GameCtaButton from '@/app/components/game-cta-button/game-cta-button'
import MobileMenu from '@/app/components/mobile-menu/mobile-menu'
import ScoreList from '@/app/components/score-list/score-list'

// Hooks
import useMediaQuery from '@/app/hooks/ui/useMediaQuery'
import { useFinalScore } from '@/app/context/FinalScoreContext'
import { quizReducer, initialState } from '@/app/modules/questions-reducer'

// Interfaces
import { QuizData, QuizQuestion, ScoreInterface } from '@/app/game/interfaces'

export const quizData: QuizData = questions
const scoreData: ScoreInterface[] = score

const GameQuestions: React.FC = () => {
  const { setNewAmount } = useFinalScore()
  const router = useRouter()
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
  useEffect(() => {
    if (state.selectedAnswers.length === 0) return

    const checkAnswerTimer = setTimeout(() => {
      dispatch({ type: 'CHECK_ANSWER' })

      const nextStepTimer = setTimeout(() => {
        if (isCorrect) {
          dispatch({ type: 'NEXT_QUESTION' })
        } else {
          router.push('/game-over')
        }
      }, 2000)

      // Clean up the second timeout
      return () => clearTimeout(nextStepTimer)
    }, 2000)

    // Clean up the first timeout
    return () => clearTimeout(checkAnswerTimer)
  }, [state.selectedAnswers, isCorrect, router])

  // After quiz completed redirect to Game Over page
  useEffect(() => {
    const lastScore = scoreData[0]

    if (state.isQuizCompleted) {
      const timeoutId = setTimeout(() => {
        // we protect ourselves in case of winning
        setNewAmount(lastScore.amount)
        router.push('/game-over')
      }, 2000)

      // Cleanup timeout on component unmount or before rerunning effect
      return () => clearTimeout(timeoutId)
    }
  }, [state.isQuizCompleted, router])

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
