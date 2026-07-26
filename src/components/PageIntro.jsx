export default function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{children}</p>
    </section>
  )
}
