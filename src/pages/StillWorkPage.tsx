import { useState } from 'react';
import { Project, projects } from '../data/projects';
import { Header } from '../components/Header/Header';
import { HeroBlock } from '../components/HeroBlock/HeroBlock';
import { WorkGrid } from '../components/WorkGrid/WorkGrid';
import { WorkCard } from '../components/WorkCard/WorkCard';
import { ImageLightbox, LightboxImage } from '../components/ImageLightbox/ImageLightbox';

const stillProjects = projects.filter(p => p.category === 'still');

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

      {lightboxImages && (
        <ImageLightbox
          images={lightboxImages}
          onClose={() => setLightboxImages(null)}
        />
      )}
    </>
  );
}
