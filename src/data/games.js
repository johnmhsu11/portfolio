/**
 * Games data
 * status: 'coming-soon' | 'live'
 * embedUrl: URL to embed the game in an iframe (for status: 'live')
 * playUrl: fallback external URL (used if no embedUrl)
 */
const games = [
  {
    id: 'cribbage',
    title: 'Cribbage',
    description:
      'Classic two-player card game. Score points by forming fifteens, pairs, runs, and flushes — then count your hand to claim what you find.',
    status: 'live',
    thumbnail: null,
    icon: '♠',
    tags: ['Cards', 'Strategy', 'vs Computer'],
    embedUrl: 'https://cribbage-p9cp.onrender.com',
    playUrl: null,
  },
  {
    id: 'game-one',
    title: 'Project Alpha',
    description: 'A fast-paced browser-based puzzle game. More details coming soon.',
    status: 'coming-soon',
    thumbnail: null,
    playUrl: null,
  },
  {
    id: 'game-two',
    title: 'Project Beta',
    description: 'An idle strategy game built with vanilla JS. In development.',
    status: 'coming-soon',
    thumbnail: null,
    playUrl: null,
  },
]

export default games
