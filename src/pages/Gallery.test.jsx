import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Gallery from './Gallery.jsx'

function artworkTitles() {
  return screen.getAllByRole('article').map((card) => within(card).getByRole('heading', { level: 2 }).textContent)
}

describe('Gallery', () => {
  it('presents generated artwork records with accessible metadata', () => {
    render(<Gallery />)

    expect(screen.getByRole('region', { name: 'Gallery controls' })).toBeInTheDocument()
    expect(screen.getByRole('list', { name: 'Artwork gallery' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(6)
    expect(screen.getByText('6 works shown')).toHaveAttribute('aria-live', 'polite')
    expect(screen.getByRole('img', { name: 'Generated placeholder for Field Study I' })).toBeInTheDocument()
    expect(screen.getByText('80 × 100 cm')).toBeInTheDocument()
  })

  it('filters by structured artwork content and resets all controls', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    await user.selectOptions(screen.getByRole('combobox', { name: 'Medium' }), 'Acrylic on panel')

    expect(artworkTitles()).toEqual(['Quiet Structure', 'Blue Interval'])
    expect(screen.getByText('2 works shown')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Reset filters' }))

    expect(screen.getAllByRole('article')).toHaveLength(6)
    expect(screen.getByRole('combobox', { name: 'Medium' })).toHaveValue('all')
  })

  it('sorts the visible artwork by title', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    await user.selectOptions(screen.getByRole('combobox', { name: 'Sort artwork' }), 'title')

    expect(artworkTitles()).toEqual([
      'After Image',
      'Blue Interval',
      'Field Study I',
      'Field Study II',
      'Quiet Structure',
      'Weather Line',
    ])
  })
})
