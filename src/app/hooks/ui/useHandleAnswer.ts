'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { QuizAction, QuizState } from '@/app/game/interfaces'

interface UseHandleAnswerProps {
  state: QuizState
  isCorrect: boolean
  dispatch: (action: QuizAction) => void
}

export const useHandleAnswer = ({
  state,
  dispatch,
  isCorrect,
}: UseHandleAnswerProps) => {
  const router = useRouter()

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
}
