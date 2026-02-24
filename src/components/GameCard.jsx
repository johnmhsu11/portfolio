export default function GameCard({ game }) {
  const { title, description, status, playUrl } = game
  const isLive = status === 'live'

  return (
    <article className="flex flex-col rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-sm transition-all duration-200 hover:border-gray-600 hover:shadow-md">
      {/* Placeholder thumbnail */}
      <div className="mb-5 flex h-36 items-center justify-center rounded-lg border border-gray-700 bg-gray-900">
        <svg
          className="h-10 w-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      </div>

      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            isLive
              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
              : 'bg-gray-700 text-gray-400 border border-gray-600'
          }`}
        >
          {isLive ? 'Live' : 'Coming Soon'}
        </span>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">{description}</p>

      {isLive && playUrl ? (
        <a
          href={playUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors"
        >
          Play Now →
        </a>
      ) : (
        <button
          disabled
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm font-semibold text-gray-600 cursor-not-allowed"
        >
          Coming Soon
        </button>
      )}
    </article>
  )
}
