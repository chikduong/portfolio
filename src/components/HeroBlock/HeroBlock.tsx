import styles from './HeroBlock.module.css';

interface Props {
  title: string;
  subtitle: string;
}

export function HeroBlock({ title, subtitle }: Props) {
  return (
    <div className={styles.hero}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
