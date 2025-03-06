import styles from './game-cta-button.module.css';

// Interfaces
import { QuizState } from '@/app/game/interfaces';

interface GameCtaButtonProps {
  title: string | number;
  style?: string;
  onClick: (key: string) => void;
  symbol: string;
  id: string;
  state: QuizState;
  correctAnswers: string[];
}

export default function GameCtaButton({
  title,
  symbol,
  onClick,
  state,
  id,
  correctAnswers,
}: GameCtaButtonProps) {
  return (
    <div
      className={`
      ${styles.game_cta_button}
      ${
        state.isAnswered && state.selectedAnswers.includes(id)
          ? correctAnswers.includes(id)
            ? styles.correct
            : styles.wrong
          : state.selectedAnswers.includes(id)
            ? styles.selected
            : ''
      }`}
      onClick={() => onClick(symbol)}
    >
      {symbol && <span className={styles.game_cta_span}>{symbol}</span>}
      <p
        className={`
        ${styles.game_cta_button__text}
        ${
          state.isAnswered && state.selectedAnswers.includes(id)
            ? correctAnswers.includes(id)
              ? styles.text_correct
              : styles.text_wrong
            : state.selectedAnswers.includes(id)
              ? styles.text_selected
              : ''
        }`}
      >
        {title}
      </p>
    </div>
  );
}
