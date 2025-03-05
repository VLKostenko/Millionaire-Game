import React from 'react';
import styles from './score-list.module.css';
import scoreData from '../../score.json';

// Components
import ScoreItem from '@/app/components/score-item/score-item';

interface ScoreItem {
  id: string;
  amount: string;
}

interface ScoreListProps {
  isCorrect: boolean | null;
}

const score: ScoreItem[] = scoreData;

export default function ScoreList({ isCorrect }: ScoreListProps) {
  return (
    <section className={styles.score_section}>
      {score.map(({ id, amount }) => {
        return <ScoreItem key={id} title={amount} isCorrect={isCorrect} />;
      })}
    </section>
  );
}
