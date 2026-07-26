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

export default function App() {
  const Page = routes[window.location.pathname] ?? NotFound

  return (
    <Layout>
      <Page />
    </Layout>
  )
}
