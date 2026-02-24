import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboards from './pages/Dashboards'
import DashboardEmbed from './pages/DashboardEmbed'
import Games from './pages/Games'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/dashboards/:id" element={<DashboardEmbed />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
