const navigation = [
  ['/', 'Home'],
  ['/gallery', 'Gallery'],
  ['/projects', 'Projects'],
  ['/cv', 'CV'],
  ['/contact', 'Contact'],
]

export default function Layout({ children, currentPath }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Painter portfolio home">
          Painter Name
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map(([href, label]) => (
              <li key={href}>
                <a href={href} aria-current={currentPath === href ? 'page' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main-content" tabIndex="-1">{children}</main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Painter Name</p>
      </footer>
    </div>
  )
}
