import styles from './game-cta-button.module.css';

// Interfaces
import { QuizState } from '@/app/game/interfaces';

interface GameCtaButtonProps {
  title: string | number;
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
  const isSelected = state.selectedAnswers.includes(id);
  const isAnswered = state.isAnswered;
  const isCorrect = correctAnswers.includes(id);

  const buttonClass = `${styles.game_cta_button} ${
    isAnswered && isSelected
      ? isCorrect
        ? styles.correct
        : styles.wrong
      : isSelected
        ? styles.selected
        : ''
  }`;

  const textClass = `${styles.game_cta_button__text} ${
    isAnswered && isSelected
      ? isCorrect
        ? styles.text_correct
        : styles.text_wrong
      : isSelected
        ? styles.text_selected
        : ''
  }`;

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={() => onClick(symbol)}
    >
      {symbol && <span className={styles.game_cta_span}>{symbol}</span>}
      <p className={textClass}>{title}</p>
    </button>
  );
}
