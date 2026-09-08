import { useState, useEffect, useCallback } from 'react';
import styles from './ImageLightbox.module.css';

export interface LightboxImage {
  src: string;
  alt: string;
}

interface Props {
  images: LightboxImage[];
  initialIndex?: number;
  onClose: () => void;
}

export function ImageLightbox({ images, initialIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);
  const multiple = images.length > 1;

  const prev = useCallback(
    () => setIndex(i => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex(i => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && multiple) prev();
      if (e.key === 'ArrowRight' && multiple) next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next, multiple]);

  const current = images[index];

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      <button className={styles.close} onClick={onClose} aria-label="Close">
        &#x2715;
      </button>

      {multiple && (
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={e => { e.stopPropagation(); prev(); }}
          aria-label="Previous image"
        >
          &#8249;
        </button>
      )}

      <img
        src={current.src}
        alt={current.alt}
        className={styles.image}
        onClick={e => e.stopPropagation()}
      />

      {multiple && (
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={e => { e.stopPropagation(); next(); }}
          aria-label="Next image"
        >
          &#8250;
        </button>
      )}

      {multiple && (
        <div className={styles.counter} aria-live="polite">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
