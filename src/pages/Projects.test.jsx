import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Projects from './Projects.jsx'

function renderProjects() {
  window.history.replaceState({}, '', '/projects')
  return render(<Projects />)
}

describe('reference projects', () => {
  it('presents project references with accessible placeholder imagery and metadata', () => {
    renderProjects()

    expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeInTheDocument()
    const list = screen.getByRole('list', { name: 'Reference projects' })
    const projectItems = list.querySelectorAll(':scope > li')

    expect(projectItems).toHaveLength(3)
    expect(screen.getByRole('heading', { level: 2, name: 'Thresholds in Color' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Generated placeholder for Thresholds in Color' })).toBeInTheDocument()
    expect(within(projectItems[0]).getByText('Public commission')).toBeInTheDocument()
    expect(within(projectItems[0]).getByText('Sample Arts Council')).toBeInTheDocument()
  })

  it('reveals a structured project reference and offers a contact action', async () => {
    const user = userEvent.setup()
    renderProjects()
    const firstProject = screen.getByRole('heading', { level: 2, name: 'Thresholds in Color' }).closest('article')

    await user.click(within(firstProject).getByText('View project reference'))

    expect(within(firstProject).getByRole('heading', { level: 3, name: 'Project overview' })).toBeInTheDocument()
    expect(within(firstProject).getByRole('heading', { level: 3, name: 'Materials and techniques' })).toBeInTheDocument()
    expect(within(firstProject).getByRole('heading', { level: 3, name: 'Credits' })).toBeInTheDocument()
    expect(within(firstProject).getByRole('link', { name: 'Discuss a similar project' })).toHaveAttribute('href', '/contact')
  })
})
