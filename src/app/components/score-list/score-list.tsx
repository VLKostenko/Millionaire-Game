'use client';

import React from 'react';
import styles from './score-list.module.css';
import score from '../../score.json';

// Components
import ScoreItem from '@/app/components/score-item/score-item';

interface CorrectAnswer {
  isCorrect: boolean | null;
}
// interface ScoreItem {
//   id: string;
//   amount: string;
// }

// interface CorrectAnswer extends ScoreItem {
//   isCorrect: boolean | null;
// }

// interface ScoreListProps {
//   scores: (ScoreItem | CorrectAnswer)[];
// }

export default function ScoreList({ isCorrect }: CorrectAnswer) {
  return (
    <section className={styles.score_section}>
      {score.map(({ id, amount }) => {
        return <ScoreItem key={id} title={amount} isCorrect={isCorrect} />;
      })}
    </section>
  );
}
