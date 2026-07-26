import { useEffect, useState } from 'react'
import Layout from './components/Layout.jsx'
import Contact from './pages/Contact.jsx'
import Cv from './pages/Cv.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Projects from './pages/Projects.jsx'

const routes = {
  '/': Home,
  '/gallery': Gallery,
  '/projects': Projects,
  '/cv': Cv,
  '/contact': Contact,
}

function getPath() {
  const path = window.location.pathname
  return path.length > 1 ? path.replace(/\/+$/, '') : path
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getPath)

  useEffect(() => {
    const handleHistoryChange = () => setCurrentPath(getPath())
    const handleLinkClick = (event) => {
      const link = event.target.closest('a[href]')

      if (
        !link ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target ||
        link.hasAttribute('download')
      ) {
        return
      }

      const destination = new URL(link.href, window.location.href)
      if (destination.origin !== window.location.origin) return

      event.preventDefault()
      window.history.pushState({}, '', destination)
      setCurrentPath(getPath())
    }

    window.addEventListener('popstate', handleHistoryChange)
    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('popstate', handleHistoryChange)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  const Page = routes[currentPath] ?? NotFound

  return (
    <Layout currentPath={currentPath}>
      <Page />
    </Layout>
  )
}
