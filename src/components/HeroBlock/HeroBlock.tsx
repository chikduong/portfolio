import styles from './HeroBlock.module.css';

interface Props {
  onScrollDown: () => void;
}

export function HeroBlock({ onScrollDown }: Props) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.name}>CHI KIM DUONG</h1>
      <p className={styles.tagline}>
        Crafting engaging stories for social media, broadcasting,
        <br />
        publications, and communications.
      </p>
      <button
        className={styles.chevron}
        onClick={onScrollDown}
        aria-label="Scroll to work"
      >
        &#8964;
      </button>
    </div>
  );
}
