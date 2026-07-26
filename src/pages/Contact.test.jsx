import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Contact from './Contact.jsx'

describe('contact page', () => {
  it('clearly marks all contact information as placeholder content', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 1, name: 'Contact' })).toBeInTheDocument()
    const details = screen.getByRole('region', { name: 'Contact details' })

    expect(within(details).getByText('Placeholder content')).toBeInTheDocument()
    expect(within(details).getByText(/replace these details/i)).toBeInTheDocument()
    expect(within(details).getByText('Studio address')).toBeInTheDocument()
  })

  it('provides accessible contact links without an integrated form', () => {
    render(<Contact />)

    expect(screen.getByRole('link', { name: 'Email the studio at studio@example.com' })).toHaveAttribute(
      'href',
      'mailto:studio@example.com',
    )
    expect(screen.getByRole('link', { name: 'Call the studio at +41 00 000 00 00' })).toHaveAttribute(
      'href',
      'tel:+41000000000',
    )
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('lists the information visitors should include in an enquiry', () => {
    render(<Contact />)

    const guidance = screen.getByRole('region', { name: 'Enquiry guidance' })
    expect(within(guidance).getAllByRole('listitem')).toHaveLength(3)
  })
})
