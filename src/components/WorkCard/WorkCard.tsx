import styles from './WorkCard.module.css';

interface Props {
  title: string;
  thumbnailUrl: string;
  onClick: () => void;
}

export function WorkCard({ title, thumbnailUrl, onClick }: Props) {
  return (
    <button className={styles.card} onClick={onClick} aria-label={`Open: ${title}`}>
      <div className={styles.imageWrapper}>
        <img
          src={thumbnailUrl}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.hoverOverlay} aria-hidden="true" />
      </div>
      <p className={styles.caption}>{title}</p>
    </button>
  );
}
