import { useState } from 'react'
import { Calendar as CalIcon, Clock, Users, Sparkles } from 'lucide-react'

const times = [
  '17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'
]

export default function Reservation() {
  const [form, setForm] = useState({ date: '', time: '', party_size: 2, name: '', phone: '', occasion: '', notes: '' })
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${backend}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          date: form.date,
          time: form.time,
          party_size: Number(form.party_size),
          occasion: form.occasion || undefined,
          notes: form.notes || undefined
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to reserve')
      setStatus('Reservation confirmed. We look forward to hosting you.')
      setForm({ date: '', time: '', party_size: 2, name: '', phone: '', occasion: '', notes: '' })
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="reserve" className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-yellow-400/80 tracking-[0.3em] uppercase text-xs">Reserve</p>
          <h3 className="mt-2 text-3xl md:text-5xl font-serif">Your Evening Awaits</h3>
        </div>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="text-sm text-white/70">Date</label>
            <div className="mt-1 flex items-center gap-3">
              <CalIcon className="text-yellow-300" size={18} />
              <input type="date" required value={form.date} onChange={(e)=>setForm({...form, date: e.target.value})} className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-2" />
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="text-sm text-white/70">Time</label>
            <div className="mt-1 flex items-center gap-3">
              <Clock className="text-yellow-300" size={18} />
              <select required value={form.time} onChange={(e)=>setForm({...form, time: e.target.value})} className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-2">
                <option value="" className="bg-black">Select time</option>
                {times.map(t=> <option key={t} value={t} className="bg-black">{t}</option>)}
              </select>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="text-sm text-white/70">Party Size</label>
            <div className="mt-1 flex items-center gap-3">
              <Users className="text-yellow-300" size={18} />
              <input type="number" min={1} max={20} required value={form.party_size} onChange={(e)=>setForm({...form, party_size: e.target.value})} className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-2" />
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="text-sm text-white/70">Full Name</label>
            <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-2 mt-1" placeholder="Your name" />
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="text-sm text-white/70">Phone</label>
            <input required value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-2 mt-1" placeholder="Contact number" />
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="text-sm text-white/70">Occasion (optional)</label>
            <input value={form.occasion} onChange={(e)=>setForm({...form, occasion: e.target.value})} className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-2 mt-1" placeholder="Birthday, anniversary, etc." />
          </div>
          <div className="md:col-span-2 p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="text-sm text-white/70">Notes</label>
            <textarea value={form.notes} onChange={(e)=>setForm({...form, notes: e.target.value})} rows={3} className="w-full bg-transparent border-b border-white/20 focus:border-yellow-400 outline-none py-2 mt-1" placeholder="Allergies, seating preferences, surprises..." />
          </div>
          <div className="md:col-span-2">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition-colors">
              <Sparkles size={18}/> Reserve Now
            </button>
            {status && <p className="mt-4 text-sm text-yellow-200/90">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
