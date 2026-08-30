import { useEffect } from 'react';
import styles from './VideoModal.module.css';

interface Props {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

export function VideoModal({ videoUrl, title, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const isEmbed = videoUrl.startsWith('http');

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Playing: ${title}`}
    >
      <button className={styles.close} onClick={onClose} aria-label="Close video">
        &#x2715;
      </button>
      <div className={styles.player} onClick={e => e.stopPropagation()}>
        {isEmbed ? (
          <iframe
            src={videoUrl}
            title={title}
            className={styles.embed}
            allowFullScreen
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className={styles.embed}
            aria-label={title}
          />
        )}
      </div>
    </div>
  );
}
