import styles from './page.module.css';

// Components
import CtaButtonPrimary from '@/app/components/cta-button-primary/cta-button-primary';
import WrappedImage from '@/app/components/wrapped-image/wrapped-image';
import ParagraphPrimary from '@/app/components/paragraph-primary/paragraph-primary';

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

          <ParagraphPrimary
            style={styles.extend_mobile}
            title={'Who wants to be a millionaire?'}
          />
        </div>

        <div className={'content_container'}>
          <ParagraphPrimary
            style={styles.extend_desktop}
            title={'Who wants to be a millionaire?'}
          />
          <CtaButtonPrimary url={'/game'}>Start</CtaButtonPrimary>
        </div>
      </div>
    </main>
  );
}
