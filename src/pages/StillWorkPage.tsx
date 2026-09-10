import { useState } from 'react';
import { Project, projects } from '../data/projects';
import { Header } from '../components/Header/Header';
import { HeroBlock } from '../components/HeroBlock/HeroBlock';
import { WorkGrid } from '../components/WorkGrid/WorkGrid';
import { WorkCard } from '../components/WorkCard/WorkCard';
import { ImageLightbox, LightboxImage } from '../components/ImageLightbox/ImageLightbox';
import styles from './StillWorkPage.module.css';

const stillProjects = projects.filter(p => p.category === 'still');

const toolsSkills = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Canva',
  'Hootsuite',
];

const contentSkills = [
  'Graphic Design',
  'Multi-platform sharing',
  'Narrative and brand strategy',
  'Copywriting',
  'Feature writing',
  'Web Design',
  'Outreach coordination',
  'Project management',
  'Asset library management',
  'Market research',
];

export function StillWorkPage() {
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[] | null>(null);

  const handleCardClick = (project: Project) => {
    if (project.pdfUrl) {
      window.open(project.pdfUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (project.images && project.images.length > 0) {
      setLightboxImages(project.images.map(src => ({ src, alt: project.title })));
      return;
    }
    const src = project.imageUrl ?? project.thumbnailUrl;
    setLightboxImages([{ src, alt: project.title }]);
  };

  return (
    <>
      <Header />
      <HeroBlock title="Content Creator" subtitle="Social media + publication" />
      <WorkGrid>
        {stillProjects.map(project => (
          <WorkCard
            key={project.id}
            title={project.title}
            thumbnailUrl={project.thumbnailUrl}
            onClick={() => handleCardClick(project)}
            aspectRatio="1 / 1"
          />
        ))}
      </WorkGrid>

      {/* Skills */}
      <div className={styles.sectionDivider}>
        <div className={styles.sectionRow}>
          <div className={styles.sectionLine} />
          <span className={styles.sectionLabel}>Skills</span>
        </div>
      </div>
      <div className={styles.skillsGrid}>
        <div>
          <p className={styles.skillsSubheading}>Tools</p>
          <div className={styles.bubbles}>
            {toolsSkills.map(item => (
              <span key={item} className={styles.bubble}>{item}</span>
            ))}
          </div>
        </div>
        <div>
          <p className={styles.skillsSubheading}>Content</p>
          <div className={styles.bubbles}>
            {contentSkills.map(item => (
              <span key={item} className={styles.bubble}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {lightboxImages && (
        <ImageLightbox
          images={lightboxImages}
          onClose={() => setLightboxImages(null)}
        />
      )}
    </>
  );
}
