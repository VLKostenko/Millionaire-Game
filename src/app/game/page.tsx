import { Metadata } from 'next';
import styles from './game.module.css';

// Components
import GameQuestions from '@/components/game-questions/game-questions';

export const metadata: Metadata = {
  title: 'Millionaire Game - Game Page',
  description: 'Game who wants to be a millionaire',
};


export default function Game() {
  return (
    <main className={styles.game}>
      <GameQuestions />
    </main>
  );
}
