import SectionTitle from '../components/SectionTitle'
import DashboardCard from '../components/DashboardCard'
import LastUpdated from '../components/LastUpdated'
import dashboards from '../data/dashboards'

export default function Dashboards() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle
        label="Analytics"
        title="Analytics Dashboards"
        description="A collection of interactive data visualizations built with Power BI, Python, and Streamlit. Click a card to open the full embed."
      />

      {dashboards.length === 0 ? (
        <p className="text-gray-500 mt-8">No dashboards yet. Add entries to src/data/dashboards.js.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dashboards.map((d) => (
            <DashboardCard key={d.id} dashboard={d} />
          ))}
        </div>
      )}
      <LastUpdated />
    </div>
  )
}
