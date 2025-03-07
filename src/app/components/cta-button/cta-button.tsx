import React from 'react';
import styles from './cta-button.module.css';

interface CtaButtonPrimaryProps {
  children: React.ReactNode;
  handleClick: () => void;
}

export default function CtaButton({
  children,
  handleClick,
}: CtaButtonPrimaryProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.base_cta_button}
    >
      {children}
    </button>
  );
}
