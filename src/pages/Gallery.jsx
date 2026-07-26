import { useMemo, useState } from 'react'
import PageIntro from '../components/PageIntro.jsx'
import {
  artworkAvailability,
  artworks,
  galleryFilterFields,
  gallerySortOptions,
} from '../data/content.js'

const emptyFilters = Object.fromEntries(galleryFilterFields.map(({ key }) => [key, 'all']))

function filterOptions(field) {
  return [...new Set(artworks.map((artwork) => artwork[field.key]))]
    .sort((first, second) => String(first).localeCompare(String(second)))
}

function sortArtworks(items, sort) {
  return [...items].sort((first, second) => {
    if (sort === 'oldest') return first.year - second.year || first.title.localeCompare(second.title)
    if (sort === 'title') return first.title.localeCompare(second.title)
    if (sort === 'featured') return Number(second.featured) - Number(first.featured) || second.year - first.year
    return second.year - first.year || first.title.localeCompare(second.title)
  })
}

function ArtworkCard({ artwork }) {
  return (
    <li className="artwork-item">
      <article className="artwork-card" aria-labelledby={`${artwork.id}-title`}>
        <div
          className={`generated-art generated-art--${artwork.palette}`}
          role="img"
          aria-label={`Generated placeholder for ${artwork.title}`}
        >
          <span aria-hidden="true">{artwork.series}</span>
        </div>
        <div className="artwork-card__content">
          <p className="artwork-card__series">{artwork.series}</p>
          <h2 id={`${artwork.id}-title`}>{artwork.title}</h2>
          <dl className="artwork-meta">
            <div><dt>Year</dt><dd>{artwork.year}</dd></div>
            <div><dt>Medium</dt><dd>{artwork.medium}</dd></div>
            <div><dt>Dimensions</dt><dd>{artwork.dimensions}</dd></div>
            <div><dt>Availability</dt><dd>{artworkAvailability[artwork.availability]}</dd></div>
          </dl>
          <details>
            <summary>Artwork details</summary>
            <p>{artwork.description}</p>
            <p><strong>Theme:</strong> {artwork.theme}</p>
            {artwork.exhibitionHistory.length > 0 && (
              <div>
                <h3>Exhibition history</h3>
                <ul>
                  {artwork.exhibitionHistory.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
              </div>
            )}
          </details>
        </div>
      </article>
    </li>
  )
}

export default function Gallery() {
  const [filters, setFilters] = useState(emptyFilters)
  const [sort, setSort] = useState('featured')

  const visibleArtworks = useMemo(() => {
    const filtered = artworks.filter((artwork) => galleryFilterFields.every(({ key }) => (
      filters[key] === 'all' || String(artwork[key]) === filters[key]
    )))
    return sortArtworks(filtered, sort)
  }, [filters, sort])

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <>
      <PageIntro eyebrow="Selected work" title="Gallery">
        Explore a generated collection that demonstrates the gallery structure while final artwork and copy are prepared.
      </PageIntro>

      <section className="gallery-controls" aria-label="Gallery controls">
        <div className="filter-grid">
          {galleryFilterFields.map((field) => (
            <label key={field.key}>
              {field.label}
              <select
                value={filters[field.key]}
                onChange={(event) => updateFilter(field.key, event.target.value)}
              >
                <option value="all">All</option>
                {filterOptions(field).map((option) => (
                  <option value={option} key={option}>
                    {field.labels?.[option] ?? option}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <label>
            Sort artwork
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              {gallerySortOptions.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="gallery-status">
          <p aria-live="polite">{visibleArtworks.length} {visibleArtworks.length === 1 ? 'work' : 'works'} shown</p>
          <button className="text-button" type="button" onClick={() => setFilters(emptyFilters)}>
            Reset filters
          </button>
        </div>
      </section>

      {visibleArtworks.length > 0 ? (
        <ul className="artwork-grid" aria-label="Artwork gallery">
          {visibleArtworks.map((artwork) => <ArtworkCard artwork={artwork} key={artwork.id} />)}
        </ul>
      ) : (
        <p className="empty-state">No generated works match these filters. Reset the filters to view the full gallery.</p>
      )}
    </>
  )
}
