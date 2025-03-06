import React from 'react'
import styles from '../cta-button.tsx/cta.button.module.css'

interface CtaButtonPrimaryProps {
  children: React.ReactNode
  url?: string
  handleClick: () => void
}

export default function CtaButton({
  children,
  handleClick,
}: CtaButtonPrimaryProps) {
  return (
    <div onClick={handleClick} className={styles.base_cta_button}>
      {children}
    </div>
  )
}
