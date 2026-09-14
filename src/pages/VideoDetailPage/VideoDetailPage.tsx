import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Header } from '../../components/Header/Header';
import styles from './VideoDetailPage.module.css';

function toWatchUrl(embedUrl: string): string {
  return embedUrl.replace('youtube.com/embed/', 'youtube.com/watch?v=');
}

export function VideoDetailPage() {
  const { id } = useParams<{ id: string }>();

  const videoProjects = projects.filter(p => p.category === 'video');
  const currentIndex = videoProjects.findIndex(p => p.id === id);
  const project = currentIndex !== -1 ? videoProjects[currentIndex] : undefined;
  const prevProject = currentIndex > 0 ? videoProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < videoProjects.length - 1 ? videoProjects[currentIndex + 1] : null;

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

  const watchUrl = project.videoUrl ? toWatchUrl(project.videoUrl) : null;
  const isShort = project.videoAspectRatio === '9/16';

  return (
    <>
      <Header />
      <div className={styles.page}>
        <Link to="/" className={styles.back}>← Video Work</Link>

        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.meta}>
          {project.role && <span>{project.role}</span>}
          {project.client && <><span className={styles.sep}>·</span><span>{project.client}</span></>}
        </div>

        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}

        <div
          className={styles.posterWrap}
          style={isShort ? { maxWidth: '360px', margin: '0 auto 24px' } : { marginBottom: '24px' }}
        >
          <a
            href={watchUrl ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.poster}
            style={{ aspectRatio: project.videoAspectRatio ?? '16/9' }}
            aria-label={`Watch ${project.title} on YouTube`}
          >
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className={styles.posterImage}
            />
            <div className={styles.playOverlay} aria-hidden="true">
              <svg className={styles.playIcon} viewBox="0 0 68 48" fill="none">
                <rect width="68" height="48" rx="10" fill="rgba(0,0,0,0.75)" />
                <path d="M27 15l22 9-22 9V15z" fill="white" />
              </svg>
            </div>
          </a>
          {watchUrl && (
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.watchLink}
            >
              ▶ Watch on YouTube
            </a>
          )}
        </div>

        {project.credits && (
          <p className={styles.credits}>
            <strong>Credits:</strong> {project.credits}
          </p>
        )}

        {(prevProject || nextProject) && (
          <div className={styles.videoNav}>
            {prevProject ? (
              <Link to={`/video/${prevProject.id}`} className={styles.navCard}>
                <img
                  src={prevProject.thumbnailUrl}
                  alt={prevProject.title}
                  className={styles.navThumb}
                />
                <span className={styles.navDir}>← Previous</span>
                <span className={styles.navTitle}>{prevProject.title}</span>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link to={`/video/${nextProject.id}`} className={`${styles.navCard} ${styles.navCardRight}`}>
                <img
                  src={nextProject.thumbnailUrl}
                  alt={nextProject.title}
                  className={styles.navThumb}
                />
                <span className={styles.navDir}>Next →</span>
                <span className={styles.navTitle}>{nextProject.title}</span>
              </Link>
            ) : <div />}
          </div>
        )}
      </div>
    </>
  );
}
