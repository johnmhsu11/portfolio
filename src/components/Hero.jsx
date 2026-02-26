import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      {/* Subtle radial gradient background accent */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Hi, I'm{' '}
          <span className="text-accent">John Hsu</span>
        </h1>
        <p className="mb-10 text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
          Data analyst &amp; hobbyist game developer. I build interactive dashboards
          that surface trends, answer questions, and drive smarter decisions — and make games for fun.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/dashboards"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 transition-colors"
          >
            View Dashboards
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/games"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
          >
            Explore Games
          </Link>
        </div>
      </div>
    </section>
  )
}
