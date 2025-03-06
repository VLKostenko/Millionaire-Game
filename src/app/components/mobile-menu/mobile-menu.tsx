'use client'

import React from 'react'
import { useState } from 'react'
import styles from './mobile-menu.module.css'

// Components
import ScoreList from '@/app/components/score-list/score-list'

interface MobileMenuProps {
  currentIndex: number
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentIndex }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5"
              y1="5"
              x2="19"
              y2="19"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="19"
              y1="5"
              x2="5"
              y2="19"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" y1="6" x2="20" y2="6" stroke="black" strokeWidth="2" />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ScoreList currentIndex={currentIndex} />
      </nav>
    </>
  )
}
export default MobileMenu
