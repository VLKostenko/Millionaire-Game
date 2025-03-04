import styles from './page.module.css';

// Components
import WrappedImage from '@/app/components/wrapped-image/wrapped-image';
import CtaButtonPrimary from '@/app/components/cta-button-primary/cta-button-primary';
import ParagraphPrimary from '@/app/components/paragraph-primary/paragraph-primary';

export default function GameOver() {
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

          <ParagraphPrimary
            spanStyle={styles.extend_mobile__span}
            spanTitle={'Total score:'}
            style={styles.extend_mobile}
            title={'$8,000 earned'}
          />
        </div>

        <div className={'content_container'}>
          <ParagraphPrimary
            spanStyle={styles.extend_desktop__span}
            spanTitle={'Total score:'}
            style={styles.extend_desktop}
            title={'$8,000 earned'}
          />
          <CtaButtonPrimary url={'/'}>Try again</CtaButtonPrimary>
        </div>
      </div>
    </main>
  );
}
