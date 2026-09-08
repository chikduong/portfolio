import { useRef, useState } from 'react';
import { Project, projects } from '../data/projects';
import { Header } from '../components/Header/Header';
import { HeroBlock } from '../components/HeroBlock/HeroBlock';
import { WorkGrid } from '../components/WorkGrid/WorkGrid';
import { WorkCard } from '../components/WorkCard/WorkCard';
import { ImageLightbox, LightboxImage } from '../components/ImageLightbox/ImageLightbox';

const stillProjects = projects.filter(p => p.category === 'still');

export function StillWorkPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[] | null>(null);

  const handleCardClick = (project: Project) => {
    // PDF: open in new browser tab (renders inline in all modern browsers)
    if (project.pdfUrl) {
      window.open(project.pdfUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // Multi-page carousel
    if (project.images && project.images.length > 0) {
      setLightboxImages(project.images.map(src => ({ src, alt: project.title })));
      return;
    }

    // Single image
    const src = project.imageUrl ?? project.thumbnailUrl;
    setLightboxImages([{ src, alt: project.title }]);
  };

  return (
    <>
      <Header />
      <HeroBlock onScrollDown={() => gridRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <div ref={gridRef}>
        <WorkGrid>
          {stillProjects.map(project => (
            <WorkCard
              key={project.id}
              title={project.title}
              thumbnailUrl={project.thumbnailUrl}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </WorkGrid>
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
