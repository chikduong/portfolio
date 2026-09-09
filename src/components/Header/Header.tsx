import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navActive : ''}`}
        >
          Video Work
        </NavLink>
        <NavLink
          to="/still"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navActive : ''}`}
        >
          Still Work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navActive : ''}`}
        >
          About Me
        </NavLink>
        <a
          href="mailto:duongckwork@gmail.com"
          className={styles.navLink}
        >
          Email
        </a>
      </nav>

      <div className={styles.titleGroup}>
        <span className={styles.title}>Chi Kim Duong</span>
      </div>
    </header>
  );
}
