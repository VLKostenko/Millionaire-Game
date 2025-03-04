import React from 'react';
import styles from './cta-button-primary.module.css';
import Link from 'next/link';

interface CtaButtonPrimaryProps {
  children: React.ReactNode;
  url: string;
}

export default function CtaButtonPrimary({
  children,
  url,
}: CtaButtonPrimaryProps) {
  return (
    <Link href={url} className={styles.cta}>
      {children}
    </Link>
  );
}
