'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './game-over.module.css';

// Components
import WrappedImage from '@/app/components/wrapped-image/wrapped-image';
import BaseParagraph from '@/app/components/base-paragraph/base-paragraph';
import CtaButton from '@/app/components/cta-button/cta-button';

// Context
import { useFinalScore } from '@/app/context/FinalScoreContext';

const GameOver: React.FC = () => {
  const router = useRouter();
  const { amount, setNewAmount } = useFinalScore();

  const handleRedirect = () => {
    router.push('/');

    const timerId = setTimeout(() => {
      // Set score to 0 for new game
      setNewAmount('0');
    }, 500);

    return () => clearTimeout(timerId);
  };

  return (
    <main className={styles.game_over}>
      <div className={styles.game_over__content}>
        <div className={styles.game_over__image_container}>
          <WrappedImage
            src={'/hand.svg'}
            alt={'Hand Image'}
            height={367}
            width={624}
            layout={'intrinsic'}
          />

          <BaseParagraph
            spanStyle={styles.extend_mobile__span}
            spanTitle={'Total score:'}
            style={styles.extend_mobile}
            title={`$ ${amount ? amount : '0'} earned`}
          />
        </div>

        <div className={'content_container'}>
          <BaseParagraph
            spanStyle={styles.extend_desktop__span}
            spanTitle={'Total score:'}
            style={styles.extend_desktop}
            title={`$ ${amount ? amount : '0'} earned`}
          />
          <CtaButton handleClick={handleRedirect}>Try again</CtaButton>
        </div>
      </div>
    </main>
  );
};

export default GameOver;
