export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-900 py-8 mt-16">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} John Hsu. Built with React &amp; Vite.</p>
      </div>
    </footer>
  )
}
