import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-accent font-medium transition-colors'
      : 'text-gray-400 hover:text-white transition-colors'

  return (
    <header className="sticky top-0 z-50 border-b border-gray-700 bg-gray-900/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-white hover:text-accent transition-colors"
        >
          John Hsu
        </Link>

        <div className="flex items-center gap-8">
          <NavLink to="/dashboards" className={linkClass}>
            Dashboards
          </NavLink>
          <NavLink to="/games" className={linkClass}>
            Games
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
