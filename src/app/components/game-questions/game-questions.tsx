'use client';

import React from "react";
import {useRouter} from "next/navigation";
import {useEffect, useReducer} from "react";
import styles from "@/app/game/game.module.css";
import questions from "@/app/questions.json";

// Components
import GameCtaButton from "@/app/components/game-cta-button/game-cta-button";

// Interfaces
import {QuizAction, QuizData, QuizQuestion, QuizState} from "@/app/game/interfaces";

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

export default function GameQuestions() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const router = useRouter();

    const question: QuizQuestion = quizData.questions[state.currentQuestionIndex];

    const correctAnswers: string[] = Array.isArray(question.correct)
        ? question.correct
        : [question.correct];
    const requiredCorrectAnswers = correctAnswers.length;

    const isCorrect: boolean =
          state.selectedAnswers.length > 0 &&
          state.selectedAnswers.every((ans) => correctAnswers.includes(ans)) &&
          correctAnswers.length === state.selectedAnswers.length;


    // Check for another steps
    useEffect(() => {
        if (state.selectedAnswers.length === 0) return;

        const checkAnswerTimer = setTimeout(() => {
            dispatch({ type: "CHECK_ANSWER" });

            const nextStepTimer = setTimeout(() => {
                if (isCorrect) {
                    dispatch({ type: "NEXT_QUESTION" });
                } else {
                    router.push("/game-over");
                }
            }, 2000);

            // Clean up the second timeout
            return () => clearTimeout(nextStepTimer);
        }, 2000);

        // Clean up the first timeout
        return () => clearTimeout(checkAnswerTimer);
    }, [state.selectedAnswers, isCorrect, router]);


    // After quiz completed redirect to Game Over page
    useEffect(() => {
        if (state.isQuizCompleted) {
            const timeoutId = setTimeout(() => {
                router.push("/game-over");
            }, 2000);

            // Cleanup timeout on component unmount or before rerunning effect
            return () => clearTimeout(timeoutId);
        }
    }, [state.isQuizCompleted, router]);


    return (
        <>
            <div className={styles.game__content}>
                <h1 className={styles.game__h1}>{question.question}</h1>

                {state.isQuizCompleted ? <h2 className={styles.game__h2}>Quiz Completed! 🎉</h2>

                :
                <div className={styles.game__answers_container}>
                    <h3 className={styles.game__h3}>{`Select ${requiredCorrectAnswers} correct answer(s)`}</h3>

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

                }
            </div>
        </>
    )
}
