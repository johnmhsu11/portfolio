import { useNavigate } from 'react-router-dom'

export default function DashboardCard({ dashboard }) {
  const { id, title, description, tags, embedUrl } = dashboard
  const navigate = useNavigate()
  const hasEmbed = Boolean(embedUrl)

  return (
    <article
      onClick={() => navigate(`/dashboards/${id}`)}
      className="group relative flex cursor-pointer flex-col rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-sm transition-all duration-200 hover:border-indigo-500/50 hover:shadow-indigo-500/10 hover:shadow-lg"
    >
      {/* Placeholder thumbnail */}
      <div className="mb-5 flex h-36 items-center justify-center rounded-lg border border-gray-700 bg-gray-900">
        {hasEmbed ? (
          <svg
            className="h-10 w-10 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
        ) : (
          <span className="text-xs text-gray-600 select-none">No preview</span>
        )}
      </div>

      <h3 className="mb-2 text-base font-semibold text-white group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">{description}</p>

      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-600 px-2.5 py-0.5 text-xs text-gray-400"
          >
            {tag}
          </span>
        ))}
        {!hasEmbed && (
          <span className="ml-auto text-xs text-gray-600 italic">Embed pending</span>
        )}
      </div>

      {/* Hover arrow */}
      <span className="absolute right-5 top-5 text-gray-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent">
        →
      </span>
    </article>
  )
}
