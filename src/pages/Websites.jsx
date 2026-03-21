import SectionTitle from '../components/SectionTitle'
import WebsiteCard from '../components/WebsiteCard'
import LastUpdated from '../components/LastUpdated'
import websites from '../data/websites'

export default function Websites() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle
        label="Websites"
        title="Website Projects"
        description="Websites I've designed and built. Click a card to visit the live site."
      />

      {websites.length === 0 ? (
        <p className="text-gray-500 mt-8">No websites yet. Add entries to src/data/websites.js.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {websites.map((w) => (
            <WebsiteCard key={w.id} website={w} />
          ))}
        </div>
      )}
      <LastUpdated />
    </div>
  )
}
