export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-900 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} John Hsu. Built with React &amp; Vite.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/john-hsu-183bbb31/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/johnmhsu11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
