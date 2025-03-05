import styles from './game-cta-button.module.css';

interface GameCtaButtonProps {
  title: string | number;
  style?: string;
  isCorrect?: boolean;
  onClick: (key: string) => void;
  symbol: string;
}

export default function GameCtaButton({
  title,
  symbol,
  onClick,
  isCorrect,
}: GameCtaButtonProps) {
  return (
    <div
      className={`${styles.game_cta_button}`}
      onClick={() => onClick(symbol)}
    >
      {symbol && <span className={styles.game_cta_span}>{symbol}</span>}
      <p
        className={`${styles.game_cta_button__text} ${isCorrect ? styles.inactive : ''}`}
      >
        {title}
      </p>
    </div>
  );
}
