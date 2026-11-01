import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data/content';
import './Projects.css';

/**
 * Projects — Selected work.
 * Editorial rows with a numbered column, description, stack tags and
 * links. Links render only when a real URL exists in the data file.
 */
export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeader number="04" label="Selected Projects" />

        <div className="projects__list">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title}>
              <article className="project-card">
                <div className="project-card__header">
                  <span className="project-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="project-card__line" aria-hidden="true" />
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <div className="project-card__footer">
                    <ul className="project-card__tags" aria-label="Technologies">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>

                    <div className="project-card__links">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          className="text-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.liveLabel ?? 'View live'}
                          <span aria-hidden="true"> ↗</span>
                        </a>
                      ) : (
                        <span className="project-card__status">
                          {project.statusNote ?? 'Link coming soon'}
                        </span>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="text-link text-link--muted"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub<span aria-hidden="true"> ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
