import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import DashboardCard from '../components/DashboardCard'
import GameCard from '../components/GameCard'
import dashboards from '../data/dashboards'
import games from '../data/games'

export default function Home() {
  const featuredDashboards = dashboards.slice(0, 3)
  const featuredGames = games.slice(0, 2)

  return (
    <>
      <Hero />

      {/* Dashboards preview */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            label="Analytics"
            title="Power BI Dashboards"
            description="Interactive reports built in Power BI — click any card to explore."
          />
          <Link
            to="/dashboards"
            className="hidden sm:inline-flex text-sm text-accent hover:text-indigo-300 transition-colors shrink-0 ml-4 mb-1"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDashboards.map((d) => (
            <DashboardCard key={d.id} dashboard={d} />
          ))}
        </div>
      </section>

      {/* Games preview */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-gray-800">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            label="Games"
            title="Game Projects"
            description="Browser games built for fun. More on the way."
          />
          <Link
            to="/games"
            className="hidden sm:inline-flex text-sm text-accent hover:text-indigo-300 transition-colors shrink-0 ml-4 mb-1"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGames.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>
    </>
  )
}
