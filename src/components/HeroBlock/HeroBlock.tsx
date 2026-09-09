import styles from './HeroBlock.module.css';

interface Props {
  title: string;
  subtitle: string;
  onScrollDown: () => void;
}

export function HeroBlock({ title, subtitle, onScrollDown }: Props) {
  return (
    <div className={styles.hero}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
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
