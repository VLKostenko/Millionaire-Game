import styles from './score-item.module.css';

interface ScoreItemProps {
  title: string | number;
  isCorrect: boolean | null;
}

export default function ScoreItem({ title, isCorrect }: ScoreItemProps) {
  return (
    <div className={`${styles.score_button}`}>
      <span>$</span>
      <p
        className={`${styles.score_button__text} ${isCorrect ? styles.inactive : ''}`}
      >
        {title}
      </p>
    </div>
  );
}
