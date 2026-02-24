/**
 * Dashboards data
 * To embed a Power BI report:
 *  1. Open the report in Power BI Service
 *  2. File → Publish to web
 *  3. Copy the iframe src URL and paste it as embedUrl below
 */
const dashboards = [
  {
    id: 'sales-overview',
    title: 'Sales Overview',
    description: 'Year-over-year revenue trends, regional breakdowns, and top-performing product categories.',
    embedUrl: '', // paste Power BI embed URL here
    tags: ['Sales', 'Revenue', 'YoY'],
    thumbnail: null,
  },
  {
    id: 'customer-analytics',
    title: 'Customer Analytics',
    description: 'Customer segmentation, retention rates, lifetime value, and churn analysis.',
    embedUrl: '',
    tags: ['Customers', 'Retention', 'CLV'],
    thumbnail: null,
  },
  {
    id: 'operational-kpis',
    title: 'Operational KPIs',
    description: 'Supply chain efficiency, inventory turnover, and operational cost tracking.',
    embedUrl: '',
    tags: ['Operations', 'KPIs', 'Supply Chain'],
    thumbnail: null,
  },
]

export default dashboards
