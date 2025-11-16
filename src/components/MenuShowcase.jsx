import { motion } from 'framer-motion'

const items = [
  {
    name: 'A5 Wagyu • Black Truffle',
    desc: 'Binchotan-seared wagyu, sauce périgourdine, pomme anna',
    price: 78,
  },
  {
    name: 'North Sea Scallop • Caviar',
    desc: 'Roasted scallop, champagne beurre blanc, oscietra pearls',
    price: 64,
  },
  {
    name: 'Romanesco • Almond Velouté',
    desc: 'Charred romanesco, almond milk, confit shallot, olive crumble',
    price: 42,
  },
  {
    name: 'Chocolate Marquis • Gold Leaf',
    desc: '72% dark chocolate, tonka, salted caramel, feuille d’or',
    price: 26,
  },
]

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-yellow-400/80 tracking-[0.3em] uppercase text-xs">Signature Dishes</p>
          <h3 className="mt-2 text-3xl md:text-5xl font-serif">The Menu</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-medium text-yellow-300 group-hover:text-yellow-200 transition-colors">{it.name}</h4>
                  <p className="text-white/70 mt-1">{it.desc}</p>
                </div>
                <div className="text-yellow-300 font-semibold">${it.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
