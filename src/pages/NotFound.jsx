import PageIntro from '../components/PageIntro.jsx'

export default function NotFound() {
  return (
    <PageIntro eyebrow="404" title="Page not found">
      The requested page does not exist. <a href="/">Return home</a>.
    </PageIntro>
  )
}
