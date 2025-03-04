'use client';

import React from 'react';
import styles from './score-list.module.css';
import CtaButtonSecondary from '@/app/components/cta-button-secondary/cta-button-secondary';

interface ScoreItem {
  id: string;
  amount: string;
}

interface CorrectAnswer extends ScoreItem {
  isCorrect: boolean | null;
}

interface ScoreListProps {
  scores: (ScoreItem | CorrectAnswer)[];
}

const ScoreList: React.FC<ScoreListProps> = ({ isCorrect, scores }) => {
  return (
    <section className={styles.score_section}>
      {scores.map(({ id, amount }) => {
        return (
          <CtaButtonSecondary
            symbol={'$'}
            title={amount}
            key={id}
            isCorrect={isCorrect}
          />
        );
      })}
    </section>
  );
};

export default ScoreList;
