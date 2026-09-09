import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import styles from './NavDrawer.module.css';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function NavDrawer({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Navigation">
      <nav className={styles.drawer} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close navigation">
          &#x2715;
        </button>
        <ul className={styles.links}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={onClose}
            >
              Video Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/still"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={onClose}
            >
              Still Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={onClose}
            >
              About Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>,
    document.body
  );
}
