import PageIntro from '../components/PageIntro.jsx'

export default function Projects() {
  return (
    <>
      <PageIntro eyebrow="Selected engagements" title="Projects">
        A placeholder area for exhibitions, commissions, and collaborations.
      </PageIntro>
      <article className="feature-card">
        <div className="art-placeholder" role="img" aria-label="Placeholder for selected project" />
        <div>
          <p className="eyebrow">Project type · Year</p>
          <h2>Selected Project</h2>
          <p>Project summary placeholder.</p>
        </div>
      </article>
    </>
  )
}
