export default function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-10">
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-gray-400 max-w-xl">{description}</p>
      )}
    </div>
  )
}
