import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuShowcase from './components/MenuShowcase'
import Reservation from './components/Reservation'
import ChefTimeline from './components/ChefTimeline'
import ChatSidebar from './components/ChatSidebar'

function App() {
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    document.body.style.backgroundColor = '#000'
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar onChatToggle={() => setChatOpen(true)} />
      <main className="pt-20">
        <Hero />
        <MenuShowcase />
        <Reservation />
        <ChefTimeline />
      </main>
      <ChatSidebar open={chatOpen} onClose={() => setChatOpen(false)} />
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Étoile Noire — All Rights Reserved</p>
          <p className="text-yellow-300">Open Tue–Sun • 17:30–22:00</p>
        </div>
      </footer>
    </div>
  )
}

export default App
