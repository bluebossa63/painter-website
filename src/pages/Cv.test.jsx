import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Cv from './Cv.jsx'

describe('CV and about page', () => {
  it('clearly identifies placeholder biography content', () => {
    render(<Cv />)

    expect(screen.getByRole('heading', { level: 1, name: 'Curriculum Vitae' })).toBeInTheDocument()
    const about = screen.getByRole('region', { name: 'About the artist' })

    expect(within(about).getByText('Placeholder content')).toBeInTheDocument()
    expect(within(about).getByText(/replace this biography/i)).toBeInTheDocument()
    expect(within(about).getByText('Primary media')).toBeInTheDocument()
    expect(within(about).getByText('Location')).toBeInTheDocument()
  })

  it('presents structured CV entries as accessible named lists', () => {
    render(<Cv />)

    const education = screen.getByRole('list', { name: 'Education entries' })
    const exhibitions = screen.getByRole('list', { name: 'Selected exhibitions entries' })
    const recognition = screen.getByRole('list', { name: 'Awards and residencies entries' })

    expect(within(education).getAllByRole('listitem')).toHaveLength(2)
    expect(within(exhibitions).getAllByRole('listitem')).toHaveLength(3)
    expect(within(recognition).getAllByRole('listitem')).toHaveLength(2)
    expect(within(exhibitions).getAllByText('Placeholder entry')).toHaveLength(3)
    expect(within(exhibitions).getByText('2026').closest('time')).toHaveAttribute('dateTime', '2026')
  })
})
