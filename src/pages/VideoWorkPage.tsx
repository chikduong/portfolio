import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Header } from '../components/Header/Header';
import { HeroBlock } from '../components/HeroBlock/HeroBlock';
import { WorkGrid } from '../components/WorkGrid/WorkGrid';
import { WorkCard } from '../components/WorkCard/WorkCard';

const videoProjects = projects.filter(p => p.category === 'video');

export function VideoWorkPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <HeroBlock
        title="Video Editor"
        subtitle="For social media + broadcasting"
        onScrollDown={() => gridRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <div ref={gridRef}>
        <WorkGrid>
          {videoProjects.map(project => (
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
