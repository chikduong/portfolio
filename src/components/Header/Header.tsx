import { useState } from 'react';
import { NavDrawer } from '../NavDrawer/NavDrawer';
import styles from './Header.module.css';

export function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>Chi Kim Duong</span>
          <a href="mailto:duongckwork@gmail.com" className={styles.email}>
            duongckwork@gmail.com
          </a>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setNavOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={navOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <NavDrawer open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
