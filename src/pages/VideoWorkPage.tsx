import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Header } from '../components/Header/Header';
import { HeroBlock } from '../components/HeroBlock/HeroBlock';
import { WorkGrid } from '../components/WorkGrid/WorkGrid';
import { WorkCard } from '../components/WorkCard/WorkCard';
import styles from './VideoWorkPage.module.css';

const videoProjects = projects.filter(p => p.category === 'video');
const [reelProject, ...otherProjects] = videoProjects;

export function VideoWorkPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <HeroBlock
        title="Video Editor"
        subtitle="Social media + broadcasting"
        onScrollDown={() => gridRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <div ref={gridRef}>
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
      </div>
    </>
  );
}
