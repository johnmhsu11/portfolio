import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import dashboards from '../data/dashboards'
import LastUpdated from '../components/LastUpdated'

export default function DashboardEmbed() {
  const { id } = useParams()
  const dashboard = dashboards.find((d) => d.id === id)
  const [iframeKey, setIframeKey] = useState(0)
  const [showBanner, setShowBanner] = useState(true)
  const [activeTab, setActiveTab] = useState('live')
  const [imageError, setImageError] = useState(false)

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
  const staticImageSrc = `/static/dashboards/${id}.png`

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gray-900 px-6 py-4">
        <div className="mx-auto max-w-7xl flex items-start justify-between gap-4">
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
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="hidden sm:flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-600 px-2.5 py-0.5 text-xs text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Live tab controls — only shown when live tab is active */}
            {activeTab === 'live' && embedUrl && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIframeKey((k) => k + 1)}
                  title="Reload dashboard"
                  className="rounded-lg border border-gray-600 px-3 py-1.5 text-xs text-gray-400 hover:border-gray-400 hover:text-white transition-colors"
                >
                  Reload
                </button>
                <a
                  href={embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  className="rounded-lg border border-gray-600 px-3 py-1.5 text-xs text-gray-400 hover:border-gray-400 hover:text-white transition-colors"
                >
                  Open ↗
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Tab switcher */}
        <div className="mx-auto max-w-7xl mt-3 flex gap-1">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'live'
                ? 'bg-accent text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            ⚡ Live
          </button>
          <button
            onClick={() => setActiveTab('static')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'static'
                ? 'bg-accent text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🖼 Static
          </button>
        </div>
      </div>

      {/* Sleep state banner — live tab only */}
      {activeTab === 'live' && embedUrl && showBanner && (
        <div className="border-b border-blue-700/40 bg-blue-900/20 px-6 py-2.5">
          <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-blue-300">
              <span className="font-medium">Dashboard not loading?</span> Free-tier apps sleep after inactivity.
              Use <strong>Open ↗</strong> to wake it up, then hit <strong>Reload</strong>.
              Or switch to the <button onClick={() => setActiveTab('static')} className="underline hover:text-blue-100 transition-colors">Static tab</button> for an instant snapshot.
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="shrink-0 text-blue-400 hover:text-blue-200 transition-colors text-lg leading-none"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Content area */}
      <div className="flex-1 bg-gray-950">

        {/* LIVE TAB */}
        {activeTab === 'live' && (
          embedUrl ? (
            <iframe
              key={iframeKey}
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
                  and add an embed URL for this dashboard.
                </p>
              </div>
            </div>
          )
        )}

        {/* STATIC TAB */}
        {activeTab === 'static' && (
          imageError ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[60vh] px-6 text-center">
              <div className="rounded-xl border border-dashed border-gray-600 p-12 max-w-md">
                <p className="text-4xl mb-4">🖼</p>
                <h3 className="text-base font-semibold text-gray-300 mb-2">
                  Static screenshot not yet available
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  To add one, take a screenshot of the live dashboard and save it as:
                </p>
                <code className="block rounded bg-gray-800 px-3 py-2 text-xs text-indigo-400 mb-5">
                  public/static/dashboards/{id}.png
                </code>
                <button
                  onClick={() => setActiveTab('live')}
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors"
                >
                  Switch to Live View
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 flex flex-col items-center">
              <div className="w-full max-w-6xl">
                <img
                  src={staticImageSrc}
                  alt={`${title} — static snapshot`}
                  className="w-full rounded-xl border border-gray-700 shadow-xl"
                  onError={() => setImageError(true)}
                />
                <p className="mt-3 text-center text-xs text-gray-500">
                  Static snapshot — may not reflect the latest data.{' '}
                  <button
                    onClick={() => setActiveTab('live')}
                    className="text-indigo-400 hover:text-indigo-300 underline transition-colors"
                  >
                    Switch to live view
                  </button>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
