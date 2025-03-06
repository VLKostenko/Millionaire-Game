'use client'

// context/ThemeContext.ts
import { createContext, useState, ReactNode, useContext } from 'react'

interface FinalScoreContextType {
  amount: string
  setNewAmount: (value: string) => void
}

const FinalScoreContext = createContext<FinalScoreContextType | undefined>(
  undefined
)

interface FinalProviderProps {
  children: ReactNode
}

export const FinalScoreProvider = ({ children }: FinalProviderProps) => {
  const [amount, setAmount] = useState<string>('0')

  const setNewAmount = (value: string) => {
    setAmount(value)
  }

  return (
    <FinalScoreContext.Provider value={{ amount, setNewAmount }}>
      {children}
    </FinalScoreContext.Provider>
  )
}

// Hook for using context with safe check
export const useFinalScore = () => {
  const context = useContext(FinalScoreContext)
  if (!context) {
    throw new Error('useFinalScore must be used within a FinalScoreProvider')
  }
  return context
}

export default FinalScoreContext
