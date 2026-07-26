import { describe, expect, it } from 'vitest'
import { artworkAvailability, artworks, galleryFilterFields, gallerySortOptions } from './content.js'
import { artistProfile, cvSections } from './cv.js'
import { projects } from './projects.js'

function expectUniqueValues(values) {
  expect(new Set(values).size).toBe(values.length)
}

describe('portfolio content integrity', () => {
  it('keeps artwork records complete, unique, and compatible with gallery controls', () => {
    expect(artworks.length).toBeGreaterThan(0)
    expectUniqueValues(artworks.map(({ id }) => id))
    expect(artworks.filter(({ featured }) => featured)).toHaveLength(3)

    for (const artwork of artworks) {
      expect(artwork).toMatchObject({
        id: expect.any(String),
        title: expect.any(String),
        year: expect.any(Number),
        medium: expect.any(String),
        dimensions: expect.any(String),
        series: expect.any(String),
        theme: expect.any(String),
        availability: expect.stringMatching(/^(available|unavailable|enquiry)$/),
        featured: expect.any(Boolean),
        description: expect.any(String),
        exhibitionHistory: expect.any(Array),
        palette: expect.any(String),
      })
      expect(artworkAvailability).toHaveProperty(artwork.availability)
    }

    expectUniqueValues(galleryFilterFields.map(({ key }) => key))
    expectUniqueValues(gallerySortOptions.map(({ value }) => value))
  })

  it('keeps project references complete and uniquely addressable', () => {
    expect(projects.length).toBeGreaterThan(0)
    expectUniqueValues(projects.map(({ id }) => id))

    for (const project of projects) {
      expect(project).toMatchObject({
        id: expect.any(String),
        title: expect.any(String),
        type: expect.any(String),
        year: expect.any(Number),
        location: expect.any(String),
        partner: expect.any(String),
        role: expect.any(String),
        summary: expect.any(String),
        context: expect.any(String),
        materials: expect.any(String),
        collaborators: expect.any(Array),
        credits: expect.any(String),
        palette: expect.any(String),
      })
    }
  })

  it('keeps the artist profile and CV sections structurally valid', () => {
    expect(artistProfile.statement).toEqual(expect.any(String))
    expect(artistProfile.details.length).toBeGreaterThan(0)
    expect(cvSections.length).toBeGreaterThan(0)
    expectUniqueValues(cvSections.map(({ id }) => id))

    for (const section of cvSections) {
      expect(section.title).toEqual(expect.any(String))
      expect(section.entries.length).toBeGreaterThan(0)
      for (const entry of section.entries) {
        expect(entry).toMatchObject({
          year: expect.any(String),
          title: expect.any(String),
          organization: expect.any(String),
          location: expect.any(String),
        })
      }
    }
  })
})
