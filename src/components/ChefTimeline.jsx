import { motion } from 'framer-motion'

const milestones = [
  { year: '2008', title: 'Apprenticeship in Lyon', desc: 'Classical French technique under Michelin mentors.' },
  { year: '2012', title: 'Nordic Expedition', desc: 'Foraged cuisine and minimalism reshape the palate.' },
  { year: '2017', title: 'Tokyo Residency', desc: 'Precision, umami studies, and the art of restraint.' },
  { year: '2022', title: 'Étoile Noire', desc: 'A personal ode to flavor architecture and grace.' },
]

export default function ChefTimeline() {
  return (
    <section id="chef" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-yellow-400/80 tracking-[0.3em] uppercase text-xs">Our Chef</p>
          <h3 className="mt-2 text-3xl md:text-5xl font-serif">The Journey</h3>
        </div>
        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-500/60 to-transparent" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                <div className="absolute -left-[10px] md:-left-[14px] h-4 w-4 rounded-full bg-yellow-400 ring-4 ring-yellow-300/20" />
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
                  <div className="text-yellow-300 text-sm">{m.year}</div>
                  <h4 className="text-xl font-semibold mt-1">{m.title}</h4>
                  <p className="text-white/70 mt-2">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
