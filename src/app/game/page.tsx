import styles from './game.module.css';

import GameQuestions from '@/app/components/game-questions/game-questions';

export default function Game() {
  return (
    <main className={styles.game}>
      <GameQuestions />
    </main>
  );
}
