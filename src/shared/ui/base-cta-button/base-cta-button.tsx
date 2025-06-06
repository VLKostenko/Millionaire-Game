import React from 'react';
import styles from './base-cta-button.module.css';
import Link from 'next/link';

interface CtaButtonPrimaryProps {
  children: React.ReactNode;
  url: string;
}

export default function BaseCtaButton({
  children,
  url,
}: CtaButtonPrimaryProps) {
  return (
    <Link href={url} className={styles.base_cta_button}>
      {children}
    </Link>
  );
}
