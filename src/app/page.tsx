import styles from './page.module.css';

// Components
import BaseCtaButton from '@/app/components/base-cta-button/base-cta-button';
import WrappedImage from '@/app/components/wrapped-image/wrapped-image';
import BaseParagraph from '@/app/components/base-paragraph/base-paragraph';

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
