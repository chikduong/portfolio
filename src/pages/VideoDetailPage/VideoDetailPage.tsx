import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Header } from '../../components/Header/Header';
import { VideoModal } from '../../components/VideoModal/VideoModal';
import styles from './VideoDetailPage.module.css';

export function VideoDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const project = projects.find(p => p.id === id && p.category === 'video');

  if (!project) {
    return (
      <>
        <Header />
        <div className={styles.notFound}>
          <p>Project not found.</p>
          <Link to="/" className={styles.back}>← Back to Video Work</Link>
        </div>
      </>
    );
  }

  const hasVideo = Boolean(project.videoUrl);

  return (
    <>
      <Header />
      <div className={styles.page}>
        <Link to="/" className={styles.back}>← Video Work</Link>

        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.meta}>
          {project.year > 0 && <span>{project.year}</span>}
          {project.role && <><span className={styles.sep}>·</span><span>{project.role}</span></>}
          {project.client && <><span className={styles.sep}>·</span><span>{project.client}</span></>}
        </div>

        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}

        <button
          className={styles.poster}
          onClick={() => hasVideo && setModalOpen(true)}
          aria-label={hasVideo ? `Play ${project.title}` : project.title}
          style={{ cursor: hasVideo ? 'pointer' : 'default' }}
        >
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className={styles.posterImage}
          />
          {hasVideo && (
            <div className={styles.playButton} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </button>

        {project.credits && (
          <p className={styles.credits}>
            <strong>Credits:</strong> {project.credits}
          </p>
        )}
      </div>

      {modalOpen && project.videoUrl && (
        <VideoModal
          videoUrl={project.videoUrl}
          title={project.title}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
