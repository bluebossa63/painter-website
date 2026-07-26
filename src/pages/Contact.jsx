import PageIntro from '../components/PageIntro.jsx'

const enquiryGuidance = [
  'The artwork, project, or subject of your enquiry',
  'Your preferred timing and location',
  'The best way and time to reply',
]

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Enquiries" title="Contact">
        Placeholder details for exhibition, commission, and press enquiries. No messages are collected by this site.
      </PageIntro>

      <div className="contact-layout">
        <section className="contact-details" aria-labelledby="contact-details-heading">
          <p className="content-label">Placeholder content</p>
          <h2 id="contact-details-heading">Contact details</h2>
          <p className="contact-note">
            Replace these details with artist-approved contact information before the site is released.
          </p>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:studio@example.com" aria-label="Email the studio at studio@example.com">
                  studio@example.com
                </a>
              </dd>
            </div>
            <div>
              <dt>Telephone</dt>
              <dd>
                <a href="tel:+41000000000" aria-label="Call the studio at +41 00 000 00 00">
                  +41 00 000 00 00
                </a>
              </dd>
            </div>
            <div>
              <dt>Studio address</dt>
              <dd>Placeholder street, 0000 Placeholder city, Switzerland</dd>
            </div>
          </dl>
        </section>

        <section className="enquiry-guidance" aria-labelledby="enquiry-guidance-heading">
          <p className="eyebrow">Before you write</p>
          <h2 id="enquiry-guidance-heading">Enquiry guidance</h2>
          <p>To help the artist respond, please include:</p>
          <ul>
            {enquiryGuidance.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="button" href="mailto:studio@example.com?subject=Portfolio%20enquiry">
            Start an email
          </a>
        </section>
      </div>
    </>
  )
}
