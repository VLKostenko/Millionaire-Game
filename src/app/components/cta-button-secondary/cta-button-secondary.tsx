import styles from './cta-button-secondary.module.css';

interface BaseButtonProps {
  title: string | number;
  style?: string;
  isCorrect?: boolean;
}

interface ClickableButtonProps extends BaseButtonProps {
  onClick: (key: string) => void;
  symbol?: string;
}

type CtaButtonSecondaryProps = BaseButtonProps | ClickableButtonProps;

export default function CtaButtonSecondary({
  title,
  symbol,
  onClick,
  isCorrect,
}: CtaButtonSecondaryProps) {
  return (
    <div
      className={`${styles.cta_secondary} ${styles.cta_secondary.focused}`}
      onClick={() => onClick(symbol)}
    >
      {symbol && <span>{symbol}</span>}
      <p
        className={`${styles.cta_secondary__text} ${isCorrect ? styles.inactive : ''}`}
      >
        {title}
      </p>
    </div>
  );
}
