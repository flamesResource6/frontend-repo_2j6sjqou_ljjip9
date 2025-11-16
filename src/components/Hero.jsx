import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0a0a0a]" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black pointer-events-none" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-left">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-yellow-300/80 tracking-[0.3em] uppercase text-xs md:text-sm">Fine Dining • Tasting Menu • Wine Pairing</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-3 text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            Étoile Noire
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-4 max-w-xl text-white/80">
            A modern temple of gastronomy. Black and gold elegance, choreographed service, and a symphony of seasonal flavors.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-8 flex items-center gap-4">
            <a href="#menu" className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition-colors">Explore Menu</a>
            <a href="#reserve" className="px-6 py-3 rounded-full border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10 transition-colors">Reserve a Table</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
