import PageIntro from '../components/PageIntro.jsx'
import { artistProfile, cvSections } from '../data/cv.js'

export default function Cv() {
  return (
    <>
      <PageIntro eyebrow="Professional background" title="Curriculum Vitae">
        A placeholder biography and sample CV entries establish the structure for artist-approved content.
      </PageIntro>

      <section className="about-artist" aria-labelledby="about-artist-title">
        <div>
          <p className="content-label">Placeholder content</p>
          <h2 id="about-artist-title">About the artist</h2>
          <p className="about-statement">{artistProfile.statement}</p>
        </div>
        <dl className="artist-details">
          {artistProfile.details.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="cv-list" aria-label="Curriculum vitae entries">
        {cvSections.map(({ id, title, entries }) => (
          <section key={id} aria-labelledby={`${id}-title`}>
            <h2 id={`${id}-title`}>{title}</h2>
            <ol aria-label={`${title} entries`}>
              {entries.map((entry, index) => (
                <li key={`${entry.year}-${index}`}>
                  <time dateTime={entry.year}>{entry.year}</time>
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.organization} · {entry.location}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  )
}
