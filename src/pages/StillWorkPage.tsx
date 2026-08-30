import { useRef, useState } from 'react';
import { projects } from '../data/projects';
import { Header } from '../components/Header/Header';
import { HeroBlock } from '../components/HeroBlock/HeroBlock';
import { WorkGrid } from '../components/WorkGrid/WorkGrid';
import { WorkCard } from '../components/WorkCard/WorkCard';
import { ImageLightbox } from '../components/ImageLightbox/ImageLightbox';

const stillProjects = projects.filter(p => p.category === 'still');

interface LightboxState {
  src: string;
  alt: string;
}

export function StillWorkPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

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
              onClick={() =>
                setLightbox({
                  src: project.imageUrl ?? project.thumbnailUrl,
                  alt: project.title,
                })
              }
            />
          ))}
        </WorkGrid>
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
