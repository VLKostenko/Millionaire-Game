'use client';

import { useCallback, useState } from 'react';

import styles from './game.module.css';
import questions from '../questions.json';

// Components
import ScoreList from '@/app/components/score-list/score-list';
import BaseParagraph from '@/app/components/base-paragraph/base-paragraph';
import GameCtaButton from '@/app/components/game-cta-button/game-cta-button';

interface QuizQuestion {
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

interface QuizData {
  questions: QuizQuestion[];
}

const quizData: QuizData = questions;

export default function Game() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question: QuizQuestion = quizData.questions[currentQuestionIndex];

  const handleAnswerClick = useCallback((answerKey: string) => {
    const correctAnswers = Array.isArray(question.correct)
      ? question.correct
      : [question.correct];

    const isAnswerCorrect = correctAnswers.includes(answerKey);
    setSelectedAnswer(answerKey);
    setIsCorrect(isAnswerCorrect);
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setIsCorrect(null);
    }
  };

  return (
    <main className={styles.game}>
      <div className={styles.game__content}>
        <BaseParagraph style={styles.game__h1} title={question.question} />

        <div className={styles.game__answers_container}>
          <div className={styles.game__answers}>
            {Object.entries(question.answers).map(([key, value]) => (
              <GameCtaButton
                symbol={key}
                title={value}
                key={key}
                onClick={() => handleAnswerClick(key)}
              />
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Next Question
          </button>

          {selectedAnswer && <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>}
        </div>
      </div>

      <ScoreList isCorrect={isCorrect} />
    </main>
  );
}
