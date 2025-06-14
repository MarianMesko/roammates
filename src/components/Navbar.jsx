import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const links = [
    { to: '/', name: 'Chat' },
    { to: '/polls', name: 'Polls' },
    { to: '/expenses', name: 'Expenses' },
    { to: '/photos', name: 'Photos' },
    { to: '/home', name: 'Home' },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-purple-600">Roammates</div>
        <nav className="space-x-4">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-1 rounded ${
                  isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:text-purple-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
