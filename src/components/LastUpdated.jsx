export default function LastUpdated() {
  const date = new Date(__BUILD_TIME__)
  const formatted = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })

  return (
    <p className="mt-10 text-xs text-gray-600">
      Last updated: {formatted}
    </p>
  )
}
