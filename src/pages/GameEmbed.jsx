import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import games from '../data/games'

export default function GameEmbed() {
  const { id } = useParams()
  const game = games.find((g) => g.id === id)
  const [isMobile, setIsMobile] = useState(false)
  const [iframeKey, setIframeKey] = useState(0)
  const [gameLoaded, setGameLoaded] = useState(false)

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
  }, [])

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
        <p className="text-4xl mb-4">🎮</p>
        <h2 className="text-2xl font-bold text-white mb-2">Game not found</h2>
        <p className="text-gray-400 mb-6">No game matches the ID "{id}".</p>
        <Link
          to="/games"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors"
        >
          ← Back to Games
        </Link>
      </div>
    )
  }

  const { title, description, tags, embedUrl } = game

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="border-b border-gray-700 bg-gray-900 px-6 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div>
            <Link
              to="/games"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              ← Games
            </Link>
            <h1 className="mt-1 text-xl font-bold text-white">{title}</h1>
            {description && (
              <p className="text-sm text-gray-400 mt-0.5">{description}</p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {tags && (
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
            )}
            {embedUrl && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setGameLoaded(false); setIframeKey((k) => k + 1) }}
                  title="Reload game"
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
      </div>

      {/* Mobile warning banner */}
      {isMobile && embedUrl && (
        <div className="border-b border-amber-700/40 bg-amber-900/25 px-6 py-2.5">
          <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-amber-300">
              This game is designed for desktop — some controls may not work on mobile.
            </p>
            <a
              href={embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-medium text-amber-300 underline underline-offset-2 hover:text-amber-200 transition-colors"
            >
              Open in browser ↗
            </a>
          </div>
        </div>
      )}

      {/* Embed area */}
      <div className="relative flex-1 bg-gray-950">
        {embedUrl ? (
          <>
            {/* Loading overlay — visible until iframe fires onLoad */}
            {!gameLoaded && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{ minHeight: 'calc(100vh - 10rem)' }}
              >
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-700 border-t-indigo-400" />
                <p className="text-sm text-gray-400">Waking up server…</p>
                <p className="text-xs text-gray-600">First load may take up to 30 seconds</p>
              </div>
            )}
            <iframe
              key={iframeKey}
              title={title}
              src={embedUrl}
              className={`w-full h-full transition-opacity duration-500 ${gameLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ minHeight: 'calc(100vh - 10rem)', border: 'none' }}
              allowFullScreen
              onLoad={() => setGameLoaded(true)}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full min-h-[60vh] px-6 text-center">
            <div className="rounded-xl border border-dashed border-gray-600 p-12 max-w-md">
              <p className="text-5xl mb-4">🎮</p>
              <h3 className="text-base font-semibold text-gray-300 mb-2">
                Game URL not configured
              </h3>
              <p className="text-sm text-gray-500">
                Open{' '}
                <code className="rounded bg-gray-800 px-1.5 py-0.5 text-xs text-indigo-400">
                  src/data/games.js
                </code>{' '}
                and set an <code className="rounded bg-gray-800 px-1.5 py-0.5 text-xs text-indigo-400">embedUrl</code> for this game.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
