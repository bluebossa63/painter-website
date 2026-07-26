import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App.jsx'

function renderApp(path = '/') {
  window.history.replaceState({}, '', path)
  return render(<App />)
}

describe('portfolio routing and layout', () => {
  beforeEach(() => window.history.replaceState({}, '', '/'))

  it('renders the home page and shared site landmarks', () => {
    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: 'Painter Name' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main-content')
  })

  it('navigates between pages without replacing the shared shell', async () => {
    const user = userEvent.setup()
    renderApp()
    const header = screen.getByRole('banner')

    await user.click(screen.getByRole('link', { name: 'Gallery' }))

    expect(window.location.pathname).toBe('/gallery')
    expect(screen.getByRole('heading', { level: 1, name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBe(header)
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('aria-current', 'page')
  })

  it('responds to browser history navigation', async () => {
    renderApp('/gallery')

    window.history.pushState({}, '', '/projects')
    window.dispatchEvent(new PopStateEvent('popstate'))

    await waitFor(() => expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument())
  })

  it('renders a useful not-found page in the shared layout', () => {
    renderApp('/missing')

    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Return home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
  })
})
