import { useEffect, useRef, useState } from 'react'
import { MessageSquare, Send, X, Bot } from 'lucide-react'

export default function ChatSidebar({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Étoile Noire. I am your AI concierge. Ask for dish recommendations or say “reserve” to book a table.' }
  ])
  const [input, setInput] = useState('')
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async (e) => {
    e?.preventDefault()
    if (!input.trim()) return
    const next = [...messages, { role: 'user', content: input }]
    setMessages(next)
    setInput('')

    try {
      const res = await fetch(`${backend}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Chat error')
      const pack = [
        { role: 'assistant', content: data.reply },
        ...(data.suggestions?.length ? [{ role: 'assistant', content: 'Suggestions: ' + data.suggestions.join(' • ') }] : [])
      ]
      setMessages((m) => [...m, ...pack])
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Sorry, something went wrong.' }])
    }
  }

  return (
    <aside className={`fixed top-0 right-0 h-full w-full sm:w-[380px] z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full bg-[#0a0a0a] border-l border-white/10 text-white flex flex-col">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot size={18} className="text-yellow-300" />
            <span className="font-medium">AI Concierge</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5">
            <X size={16} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 ${m.role === 'user' ? 'ml-auto bg-yellow-400 text-black' : 'bg-white/5 border border-white/10'}`}>
              <p className="text-sm leading-relaxed">{m.content}</p>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <form onSubmit={send} className="p-3 border-t border-white/10 flex items-center gap-2">
          <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Ask for pairings or say reserve..." className="flex-1 bg-transparent border border-white/10 rounded-xl px-3 py-2 outline-none focus:border-yellow-400" />
          <button className="px-3 py-2 rounded-xl bg-yellow-400 text-black hover:bg-yellow-300">
            <Send size={16} />
          </button>
        </form>
      </div>
    </aside>
  )
}
