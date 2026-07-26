import PageIntro from '../components/PageIntro.jsx'

const works = ['Artwork One', 'Artwork Two', 'Artwork Three']

export default function Gallery() {
  return (
    <>
      <PageIntro eyebrow="Selected work" title="Gallery">
        Placeholder works establish the responsive gallery structure.
      </PageIntro>
      <section className="card-grid" aria-label="Artwork gallery">
        {works.map((title, index) => (
          <article className="card" key={title}>
            <div className={`art-placeholder tone-${index + 1}`} role="img" aria-label={`Placeholder for ${title}`} />
            <h2>{title}</h2>
            <p>Year · Medium · Dimensions</p>
          </article>
        ))}
      </section>
    </>
  )
}
