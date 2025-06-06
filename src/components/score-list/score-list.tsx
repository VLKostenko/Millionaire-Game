'use client';

import React, { useEffect } from 'react';
import styles from './score-list.module.css';
import scoreData from '@/data/score.json';

// Components
import ScoreItem from '@/components/score-item/score-item';

// Context
import { useFinalScore } from '@/context/FinalScoreContext';

// Hooks
import { updateAmountBasedOnIndex } from '@/hooks/utils/updateAmoutBasedOnIndex';

// Interfaces
import {
  ScoreListProps,
  ScoreItemProps,
} from '@/components/score-list/interfaces';

const score: ScoreItemProps[] = scoreData;

const ScoreList: React.FC<ScoreListProps> = React.memo(({ currentIndex }) => {
  const { setNewAmount } = useFinalScore();

  useEffect(() => {
    // set actual score to context
    updateAmountBasedOnIndex(score, currentIndex, setNewAmount);
  }, [score, currentIndex]);

  return (
    <section className={styles.score_section}>
      {score.map((scoreItem, index) => {
        return (
          <ScoreItem
            key={index}
            id={scoreItem.id}
            title={scoreItem.amount}
            currentIndex={currentIndex}
          />
        );
      })}
    </section>
  );
})

export default ScoreList;
