import { Menu, UtensilsCrossed, Calendar, ChefHat, MessageSquare } from 'lucide-react'

export default function Navbar({ onChatToggle }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300 flex items-center justify-center ring-2 ring-yellow-400/40">
            <UtensilsCrossed className="text-black" size={20} />
          </div>
          <div>
            <p className="text-xs tracking-widest text-yellow-400 uppercase">Maison</p>
            <h1 className="text-xl text-white font-semibold font-[Playfair_Display]">Étoile Noire</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#menu" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
            <Menu size={16} /> Menu
          </a>
          <a href="#reserve" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
            <Calendar size={16} /> Reserve
          </a>
          <a href="#chef" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
            <ChefHat size={16} /> Chef
          </a>
          <button onClick={onChatToggle} className="text-black bg-yellow-400 hover:bg-yellow-300 transition-colors px-4 py-2 rounded-full font-medium flex items-center gap-2">
            <MessageSquare size={16} /> Concierge
          </button>
        </nav>
        <button onClick={onChatToggle} className="md:hidden p-2 rounded-full bg-yellow-400 text-black">
          <MessageSquare size={18} />
        </button>
      </div>
    </header>
  )
}
