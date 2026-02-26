import { useParams, Link } from 'react-router-dom'
import dashboards from '../data/dashboards'
import LastUpdated from '../components/LastUpdated'

export default function DashboardEmbed() {
  const { id } = useParams()
  const dashboard = dashboards.find((d) => d.id === id)

  if (!dashboard) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <p className="text-4xl mb-4">📊</p>
        <h2 className="text-2xl font-bold text-white mb-2">Dashboard not found</h2>
        <p className="text-gray-400 mb-6">No dashboard matches the ID "{id}".</p>
        <Link
          to="/dashboards"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors"
        >
          ← Back to Dashboards
        </Link>
      </div>
    )
  }

  const { title, description, tags, embedUrl } = dashboard

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gray-900 px-6 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div>
            <Link
              to="/dashboards"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              ← Dashboards
            </Link>
            <h1 className="mt-1 text-xl font-bold text-white">{title}</h1>
            {description && (
              <p className="text-sm text-gray-400 mt-0.5">{description}</p>
            )}
            <LastUpdated />
          </div>
          <div className="hidden sm:flex flex-wrap gap-2 shrink-0">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-600 px-2.5 py-0.5 text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Embed area */}
      <div className="flex-1 bg-gray-950">
        {embedUrl ? (
          <iframe
            title={title}
            src={embedUrl}
            className="w-full h-full"
            style={{ minHeight: 'calc(100vh - 10rem)', border: 'none' }}
            allowFullScreen
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full min-h-[60vh] px-6 text-center">
            <div className="rounded-xl border border-dashed border-gray-600 p-12 max-w-md">
              <svg
                className="mx-auto h-12 w-12 text-gray-600 mb-4"
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
              <h3 className="text-base font-semibold text-gray-300 mb-2">
                Embed URL not configured
              </h3>
              <p className="text-sm text-gray-500">
                Open{' '}
                <code className="rounded bg-gray-800 px-1.5 py-0.5 text-xs text-indigo-400">
                  src/data/dashboards.js
                </code>{' '}
                and add a Power BI "Publish to web" iframe URL for this dashboard.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
