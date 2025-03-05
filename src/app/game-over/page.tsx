import styles from './game-over.module.css';

// Components
import WrappedImage from '@/app/components/wrapped-image/wrapped-image';
import BaseCtaButton from '@/app/components/base-cta-button/base-cta-button';
import BaseParagraph from '@/app/components/base-paragraph/base-paragraph';

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

          <BaseParagraph
            spanStyle={styles.extend_mobile__span}
            spanTitle={'Total score:'}
            style={styles.extend_mobile}
            title={'$8,000 earned'}
          />
        </div>

        <div className={'content_container'}>
          <BaseParagraph
            spanStyle={styles.extend_desktop__span}
            spanTitle={'Total score:'}
            style={styles.extend_desktop}
            title={'$8,000 earned'}
          />
          <BaseCtaButton url={'/'}>Try again</BaseCtaButton>
        </div>
      </div>
    </main>
  );
}
