import PageIntro from '../components/PageIntro.jsx'
import { projects } from '../data/projects.js'

function ProjectCard({ project }) {
  return (
    <li>
      <article className="project-card" aria-labelledby={`${project.id}-title`}>
        <div
          className={`project-placeholder project-placeholder--${project.palette}`}
          role="img"
          aria-label={`Generated placeholder for ${project.title}`}
        >
          <span aria-hidden="true">Project imagery pending</span>
        </div>
        <div className="project-card__content">
          <p className="eyebrow">{project.type}</p>
          <h2 id={`${project.id}-title`}>{project.title}</h2>
          <p className="project-summary">{project.summary}</p>
          <dl className="project-meta">
            <div><dt>Year</dt><dd>{project.year}</dd></div>
            <div><dt>Location</dt><dd>{project.location}</dd></div>
            <div><dt>Partner</dt><dd>{project.partner}</dd></div>
            <div><dt>Role</dt><dd>{project.role}</dd></div>
          </dl>
          <details className="project-reference">
            <summary>View project reference</summary>
            <div className="project-reference__body">
              <section>
                <h3>Project overview</h3>
                <p>{project.context}</p>
              </section>
              <section>
                <h3>Materials and techniques</h3>
                <p>{project.materials}</p>
              </section>
              <section>
                <h3>Collaborators</h3>
                <ul>
                  {project.collaborators.map((collaborator) => <li key={collaborator}>{collaborator}</li>)}
                </ul>
              </section>
              <section>
                <h3>Credits</h3>
                <p>{project.credits}</p>
              </section>
              <a className="button" href="/contact">Discuss a similar project</a>
            </div>
          </details>
        </div>
      </article>
    </li>
  )
}

export default function Projects() {
  return (
    <>
      <PageIntro eyebrow="Selected engagements" title="Projects">
        Explore generated project references demonstrating commissions, exhibitions, and collaborations while final copy and imagery are prepared.
      </PageIntro>
      <ul className="project-list" aria-label="Reference projects">
        {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
      </ul>
    </>
  )
}
