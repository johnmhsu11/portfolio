export default function WebsiteCard({ website }) {
  const { title, description, tags, url, icon } = website

  return (
    <article
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      className="group relative flex cursor-pointer flex-col rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-sm transition-all duration-200 hover:border-indigo-500/50 hover:shadow-indigo-500/10 hover:shadow-lg"
    >
      <div className="mb-5 flex h-36 items-center justify-center rounded-lg border border-gray-700 bg-gray-900">
        <span className="text-6xl select-none" role="img" aria-label={title}>
          {icon}
        </span>
      </div>

      <h3 className="mb-2 text-base font-semibold text-white group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">{description}</p>

      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-gray-600 px-2.5 py-0.5 text-xs text-gray-400"
          >
            {tag}
          </span>
        ))}
        <span className="ml-auto text-xs text-gray-500 italic">Opens externally</span>
      </div>

      <span className="absolute right-5 top-5 text-gray-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent">
        →
      </span>
    </article>
  )
}
