import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Header } from '../../components/Header/Header';
import styles from './VideoDetailPage.module.css';

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

        {project.videoUrl ? (
          <div className={styles.playerWrapper} style={isShort ? { maxWidth: '360px', margin: '0 auto 24px' } : undefined}>
            <div className={styles.playerInner} style={{ aspectRatio: project.videoAspectRatio ?? '16/9' }}>
              <iframe
                src={project.videoUrl}
                title={project.title}
                className={styles.embed}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        ) : (
          <div className={styles.noVideo}>
            <img src={project.thumbnailUrl} alt={project.title} className={styles.fallbackImage} />
          </div>
        )}

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
