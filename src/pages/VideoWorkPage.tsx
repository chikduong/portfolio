import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Header } from '../components/Header/Header';
import { HeroBlock } from '../components/HeroBlock/HeroBlock';
import { WorkGrid } from '../components/WorkGrid/WorkGrid';
import { WorkCard } from '../components/WorkCard/WorkCard';
import styles from './VideoWorkPage.module.css';

const videoProjects = projects.filter(p => p.category === 'video');
const [reelProject, ...otherProjects] = videoProjects;

const skills = [
  {
    heading: 'Tools',
    items: ['Adobe Premiere Pro', 'Adobe After Effects', 'CapCut', 'InDesign', 'Canva'],
  },
  {
    heading: 'Video-Editing Skills',
    items: ['Multi-camera video editing', 'Sound editing', 'Motion graphics', 'Animation', 'Color correction', 'Captioning'],
  },
  {
    heading: 'Videographer Skills',
    items: ['Location filming', 'Event filming', 'Interviewing', 'Camera tools', 'Sound recording'],
  },
];

export function VideoWorkPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <HeroBlock title="Video Editor" subtitle="Social media + broadcasting" />

      {/* Featured reel — full width */}
      <div className={styles.showreelSection}>
        <div className={styles.showreelRow}>
          <div className={styles.showreelLine} />
          <span className={styles.showreelLabel}>Showreel</span>
        </div>
        <WorkCard
          title={reelProject.title}
          thumbnailUrl={reelProject.thumbnailUrl}
          onClick={() => navigate(`/video/${reelProject.id}`)}
        />
      </div>

      {/* Full Cases — 2-column grid */}
      <div className={styles.showreelSection}>
        <div className={styles.showreelRow}>
          <div className={styles.showreelLine} />
          <span className={styles.showreelLabel}>Full Cases</span>
        </div>
      </div>
      <WorkGrid>
        {otherProjects.map(project => (
          <WorkCard
            key={project.id}
            title={project.title}
            thumbnailUrl={project.thumbnailUrl}
            onClick={() => navigate(`/video/${project.id}`)}
          />
        ))}
      </WorkGrid>

      {/* Skills */}
      <div className={`${styles.showreelSection} ${styles.skillsDivider}`}>
        <div className={styles.showreelRow}>
          <div className={styles.showreelLine} />
          <span className={styles.showreelLabel}>Skills</span>
        </div>
      </div>
      <div className={styles.skillsGrid}>
        {skills.map(({ heading, items }) => (
          <div key={heading}>
            <p className={styles.skillsSubheading}>{heading}</p>
            <div className={styles.bubbles}>
              {items.map(item => (
                <span key={item} className={styles.bubble}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sign-off */}
      <div className={styles.signOff}>
        <p className={styles.signOffText}>Thank you for watching.</p>
      </div>
    </>
  );
}
