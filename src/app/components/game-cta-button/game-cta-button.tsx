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
  const shouldShowCorrect = isAnswered && !isCorrect && isSelected; // If you chose the wrong option

  const buttonClass = `${styles.game_cta_button} ${
    isAnswered
      ? isCorrect
        ? styles.correct
        : shouldShowCorrect
          ? styles.wrong
          : correctAnswers.includes(id)
            ? styles.show_correct // Highlight the correct answer if the wrong one was chosen
            : ''
      : isSelected
        ? styles.selected
        : ''
  }`;

  const textClass = `${styles.game_cta_button__text} ${
    isAnswered
      ? isCorrect
        ? styles.text_correct
        : shouldShowCorrect
          ? styles.text_wrong
          : correctAnswers.includes(id)
            ? styles.text_show_correct
            : ''
      : isSelected
        ? styles.text_selected
        : ''
  }`;

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={() => onClick(symbol)}
      disabled={isAnswered} // Block the button after response
    >
      {symbol && <span className={styles.game_cta_span}>{symbol}</span>}
      <p className={textClass}>{title}</p>
    </button>
  );
}
