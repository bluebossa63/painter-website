import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App.jsx'

function renderApp(path = '/') {
  window.history.pushState({}, '', path)
  return render(<App />)
}

describe('portfolio scaffold', () => {
  beforeEach(() => window.history.pushState({}, '', '/'))

  it('renders the home page and primary navigation', () => {
    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: 'Painter Name' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
  })

  it('renders the gallery route', () => {
    renderApp('/gallery')

    expect(screen.getByRole('heading', { level: 1, name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('renders a useful not-found page', () => {
    renderApp('/missing')

    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Return home' })).toHaveAttribute('href', '/')
  })
})
