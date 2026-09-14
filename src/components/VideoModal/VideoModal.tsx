import { useEffect } from 'react';
import styles from './VideoModal.module.css';

interface Props {
  videoUrl: string;
  title: string;
  onClose: () => void;
  aspectRatio?: string;
}

export function VideoModal({ videoUrl, title, onClose, aspectRatio = '16/9' }: Props) {
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
  const isShort = aspectRatio === '9/16';

  const playerStyle = isShort
    ? { height: 'min(82vh, 640px)', aspectRatio: '9/16' }
    : { width: 'min(960px, 92vw)', aspectRatio: '16/9' };

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
      <div className={styles.player} style={playerStyle} onClick={e => e.stopPropagation()}>
        {isEmbed ? (
          <iframe
            src={videoUrl}
            title={title}
            className={styles.embed}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
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
