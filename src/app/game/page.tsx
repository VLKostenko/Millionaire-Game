'use client'

import styles from './game.module.css';

// Components
import ScoreList from '@/app/components/score-list/score-list';
import MobileMenu from '@/app/components/mobile-menu/mobile-menu';

// Hooks
import useMediaQuery from '@/app/hooks/useMediaQuery';

import GameQuestions from "@/app/components/game-questions/game-questions";

export default function Game() {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const isCorrect = true;

  return (
    <main className={styles.game}>
      {isMobile && <MobileMenu isCorrect={isCorrect} />}

      <GameQuestions  />

      {!isMobile && <ScoreList isCorrect={isCorrect} />}
    </main>
  );
}
