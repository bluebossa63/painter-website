import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from './Home.jsx'

describe('home page composition', () => {
  it('presents a clear introduction and primary gallery path', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { level: 1, name: 'Painter Name' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore the gallery' })).toHaveAttribute('href', '/gallery')
    expect(screen.getByRole('img', { name: /featured placeholder artwork field study i/i })).toBeInTheDocument()
  })

  it('connects featured work, projects, biography, and contact content', () => {
    render(<Home />)

    const featured = screen.getByRole('region', { name: 'Featured work' })
    expect(within(featured).getAllByRole('article')).toHaveLength(3)
    expect(within(featured).getByRole('link', { name: 'View all work' })).toHaveAttribute('href', '/gallery')

    expect(screen.getByRole('link', { name: 'Explore projects' })).toHaveAttribute('href', '/projects')
    expect(screen.getByRole('link', { name: 'Read the artist profile and CV' })).toHaveAttribute('href', '/cv')
    expect(screen.getByRole('link', { name: 'Start an enquiry' })).toHaveAttribute('href', '/contact')
  })
})
