import { artworks } from '../data/content.js'
import { projects } from '../data/projects.js'

const featuredArtworks = artworks.filter((artwork) => artwork.featured).slice(0, 3)
const featuredProject = projects[0]

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__content">
          <p className="eyebrow">Painter portfolio</p>
          <h1 id="home-title">Painter Name</h1>
          <p className="lede">Generated placeholder introduction for a painting practice shaped by color, atmosphere, and the spaces between observation and memory.</p>
          <div className="actions">
            <a className="button" href="/gallery">Explore the gallery</a>
            <a className="text-link" href="/projects">View selected projects</a>
          </div>
        </div>
        <div
          className={`home-hero__art generated-art generated-art--${featuredArtworks[0].palette}`}
          role="img"
          aria-label={`Featured placeholder artwork ${featuredArtworks[0].title}`}
        >
          <span>{featuredArtworks[0].title}, {featuredArtworks[0].year}</span>
        </div>
      </section>

      <section className="home-section" aria-labelledby="featured-work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected paintings</p>
            <h2 id="featured-work-title">Featured work</h2>
          </div>
          <a className="text-link" href="/gallery">View all work</a>
        </div>
        <div className="home-artwork-grid">
          {featuredArtworks.map((artwork) => (
            <article className="home-artwork" key={artwork.id}>
              <div
                className={`generated-art generated-art--${artwork.palette}`}
                role="img"
                aria-label={`Generated placeholder for ${artwork.title}`}
              >
                <span>{artwork.title}</span>
              </div>
              <p className="eyebrow">{artwork.series}</p>
              <h3>{artwork.title}</h3>
              <p>{artwork.year} · {artwork.medium}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-project" aria-labelledby="project-title">
        <div className={`project-placeholder project-placeholder--${featuredProject.palette}`} role="img" aria-label={`Generated placeholder for ${featuredProject.title}`}>
          <span aria-hidden="true">Project imagery pending</span>
        </div>
        <div>
          <p className="eyebrow">Featured project · {featuredProject.year}</p>
          <h2 id="project-title">{featuredProject.title}</h2>
          <p className="lede">{featuredProject.summary}</p>
          <dl className="home-project__meta">
            <div><dt>Type</dt><dd>{featuredProject.type}</dd></div>
            <div><dt>Location</dt><dd>{featuredProject.location}</dd></div>
          </dl>
          <a className="button" href="/projects">Explore projects</a>
        </div>
      </section>

      <section className="home-about" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">Artist profile</p>
          <h2 id="about-title">Practice and background</h2>
        </div>
        <div>
          <p className="lede">Generated placeholder biography introducing the artist’s approach, materials, and ongoing areas of enquiry. Final artist-approved text will replace this copy.</p>
          <a className="text-link" href="/cv">Read the artist profile and CV</a>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Discuss an artwork or project</h2>
        <p>Use the placeholder contact details to enquire about available work, commissions, exhibitions, or collaborations.</p>
        <a className="button" href="/contact">Start an enquiry</a>
      </section>
    </div>
  )
}
