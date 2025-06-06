import { Metadata } from 'next';


// Components
import BaseCtaButton from '@/components/base-cta-button/base-cta-button';
import WrappedImage from '@/components/wrapped-image/wrapped-image';
import BaseParagraph from '@/components/base-paragraph/base-paragraph';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Millionaire Game - Home Page',
  description: 'Game who wants to be a millionaire',
};

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.home__bg}></div>

      <div className={styles.home__content}>
        <div className={styles.home__image_container}>
          <WrappedImage
            src={'/hand.svg'}
            alt={'Hand Image'}
            height={367}
            width={624}
            layout={'intrinsic'}
          />

          <BaseParagraph
            style={styles.extend_mobile}
            title={'Who wants to be a millionaire?'}
          />
        </div>

        <div className={'content_container'}>
          <BaseParagraph
            style={styles.extend_desktop}
            title={'Who wants to be a millionaire?'}
          />
          <BaseCtaButton url={'/game'}>Start</BaseCtaButton>
        </div>
      </div>
    </main>
  );
}
