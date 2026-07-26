import PageIntro from '../components/PageIntro.jsx'

const sections = ['Education', 'Selected exhibitions', 'Awards and residencies']

export default function Cv() {
  return (
    <>
      <PageIntro eyebrow="Professional background" title="Curriculum Vitae">
        Placeholder entries provide a structure for the painter’s professional history.
      </PageIntro>
      <div className="cv-list">
        {sections.map((section) => (
          <section key={section}>
            <h2>{section}</h2>
            <p>Year — Placeholder entry, Institution or Venue, Location</p>
          </section>
        ))}
      </div>
    </>
  )
}
