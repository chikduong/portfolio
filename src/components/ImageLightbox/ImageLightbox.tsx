import { useEffect } from 'react';
import styles from './ImageLightbox.module.css';

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button className={styles.close} onClick={onClose} aria-label="Close">
        &#x2715;
      </button>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}
