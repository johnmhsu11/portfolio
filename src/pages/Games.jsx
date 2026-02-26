import SectionTitle from '../components/SectionTitle'
import GameCard from '../components/GameCard'
import LastUpdated from '../components/LastUpdated'
import games from '../data/games'

export default function Games() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle
        label="Games"
        title="Game Projects"
        description="Browser-based games I've built for fun. Click 'Play Now' on any live title, or check back soon for upcoming releases."
      />

      {games.length === 0 ? (
        <p className="text-gray-500 mt-8">No games yet. Add entries to src/data/games.js.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      )}
      <LastUpdated />
    </div>
  )
}
