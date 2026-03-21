import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import DashboardCard from '../components/DashboardCard'
import GameCard from '../components/GameCard'
import WebsiteCard from '../components/WebsiteCard'
import LastUpdated from '../components/LastUpdated'
import dashboards from '../data/dashboards'
import games from '../data/games'
import websites from '../data/websites'

export default function Home() {
  const featuredDashboards = dashboards.slice(0, 3)
  const featuredGames = games.slice(0, 2)
  const featuredWebsites = websites.slice(0, 3)

  return (
    <>
      <Hero />

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 pb-4 pt-2">
        <div className="rounded-xl border border-gray-700 bg-gray-800/50 px-8 py-8 grid sm:grid-cols-3 gap-8">
          <div className="sm:col-span-2">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">About</p>
            <h2 className="mb-3 text-xl font-bold text-white">Channel Analytics Manager · Hologic</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              I specialize in translating complex sales and channel data into clear, actionable insights.
              Outside of work I build interactive data tools, browser games, and websites — this portfolio
              is a collection of those personal projects.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/john-hsu-183bbb31/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-4 py-2.5 text-sm font-medium text-gray-300 hover:border-indigo-500/60 hover:text-white transition-colors"
            >
              LinkedIn Profile →
            </a>
            <a
              href="https://github.com/johnmhsu11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-4 py-2.5 text-sm font-medium text-gray-300 hover:border-indigo-500/60 hover:text-white transition-colors"
            >
              GitHub Profile →
            </a>
          </div>
        </div>
      </section>

      {/* Dashboards preview */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            label="Analytics"
            title="Analytics Dashboards"
            description="Interactive data visualizations built with Power BI, Python, and Streamlit — click any card to explore."
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
        <LastUpdated />
      </section>

      {/* Websites preview */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-gray-800">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            label="Websites"
            title="Website Projects"
            description="Websites I've designed and built from scratch."
          />
          <Link
            to="/websites"
            className="hidden sm:inline-flex text-sm text-accent hover:text-indigo-300 transition-colors shrink-0 ml-4 mb-1"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWebsites.map((w) => (
            <WebsiteCard key={w.id} website={w} />
          ))}
        </div>
      </section>
    </>
  )
}
