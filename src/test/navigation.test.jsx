import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from '../App.jsx'

const destinations = [
  { name: 'Home', path: '/', heading: 'Painter Name' },
  { name: 'Gallery', path: '/gallery', heading: 'Gallery' },
  { name: 'Projects', path: '/projects', heading: 'Projects' },
  { name: 'CV', path: '/cv', heading: 'Curriculum Vitae' },
  { name: 'Contact', path: '/contact', heading: 'Contact' },
]

describe('primary navigation journeys', () => {
  beforeEach(() => window.history.replaceState({}, '', '/'))

  it.each(destinations)('opens $name at $path and marks it as current', async ({ name, path, heading }) => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name, exact: true }))

    expect(window.location.pathname).toBe(path)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name, exact: true })).toHaveAttribute('aria-current', 'page')
  })

  it('normalizes a trailing slash and continues internal navigation', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/gallery/')
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery', exact: true })).toHaveAttribute('aria-current', 'page')

    await user.click(screen.getByRole('link', { name: 'Contact', exact: true }))

    expect(window.location.pathname).toBe('/contact')
    expect(screen.getByRole('heading', { level: 1, name: 'Contact' })).toBeInTheDocument()
  })
})
