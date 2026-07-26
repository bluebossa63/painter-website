export default function Home() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Painter portfolio</p>
        <h1>Painter Name</h1>
        <p className="lede">A concise placeholder introduction to the artist and their practice.</p>
        <div className="actions">
          <a className="button" href="/gallery">View gallery</a>
          <a className="text-link" href="/contact">Get in touch</a>
        </div>
      </div>
      <div className="art-placeholder" role="img" aria-label="Placeholder for featured artwork">
        Featured artwork placeholder
      </div>
    </section>
  )
}
