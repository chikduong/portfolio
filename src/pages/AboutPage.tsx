import { useEffect } from 'react';
import { Header } from '../components/Header/Header';
import styles from './AboutPage.module.css';

export function AboutPage() {
  useEffect(() => {
    document.title = 'About Me — Chi Kim Duong';
    return () => { document.title = 'Chi Kim Duong'; };
  }, []);

  return (
    <div className={styles.page}>
      <Header />

      <h1 className={styles.heading}>About Me</h1>

      <div className={styles.body}>
        {/* ── Paragraph 1 ── */}
        <p className={styles.bodyText}>
          I am a multidisciplinary storytelling content specialist with two years of professional
          production experience alongside four years of personal practice.
          Whether video, social media, writing, or design — I love the impact of it all! I'm
          well-rounded in start-to-finish creative processes, from ideating innovative user
          experiences, to producing a wide range of strong digital content.
        </p>

        {/* ── Paragraph 2 (only break) ── */}
        <p className={styles.bodyParaSection}>
          I'm driven in crafting engaging stories to connect people with missions that matter.
          You may find me documenting profound community experiences, communicating an
          organization's impact, or engaging closely with consumers. My work distributes across
          social media, ad campaigns, television specials, and magazine publications.
        </p>
        <p className={styles.bodyParaClosing}>
          In every project I bring intention, a strong eye for detail, and a story to stick with you.
        </p>

        <span className={styles.signature}>-K.C.</span>
      </div>
    </div>
  );
}
