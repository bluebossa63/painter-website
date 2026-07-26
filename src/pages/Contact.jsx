import PageIntro from '../components/PageIntro.jsx'

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Enquiries" title="Contact">
        Use the placeholder form for exhibition, commission, and press enquiries.
      </PageIntro>
      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="6" required />
        </label>
        <button className="button" type="submit">Send enquiry</button>
      </form>
    </>
  )
}
