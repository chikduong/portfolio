import { useEffect } from 'react';
import { Header } from '../components/Header/Header';
import styles from './AboutPage.module.css';

export function AboutPage() {
  useEffect(() => {
    document.title = 'About Me — Chi Kim Duong';
    return () => { document.title = 'Chi Kim Duong'; };
  }, []);

  return (
    <>
      {/* Grainy vignette section — Header and heading inherit white token override */}
      <div className={styles.darkSection}>
        <div className={styles.headerWrapper}>
          <Header />
        </div>
        <h1 className={styles.heading}>About Me</h1>
      </div>

      {/* Body — same left padding as darkSection so text aligns with heading */}
      <div className={styles.lightSection}>
        <div className={styles.body}>
          <p className={styles.leadSentence}>
            In every project, I bring intention, a strong eye for detail, and a story to stick with you.
          </p>

          <p className={styles.bodyText}>
            I am a multidisciplinary storytelling content specialist with two years of professional
            production experience alongside four years of personal practice.
            My work spans visual design, videos, social media, user experiences, writing, and strategy.
          </p>

          <p className={styles.bodyTextSpaced}>
            <span className={styles.bodyItalicLead}>
              I'm driven by the power of engaging stories to connect people with missions that matter.
            </span>{' '}
            You may find me documenting profound community experiences, communicating an
            organization's impact, or engaging closely with consumers.
            My professional work distributes across social media, ad campaigns, television specials,
            and magazine publications.
          </p>
        </div>
      </div>
    </>
  );
}
