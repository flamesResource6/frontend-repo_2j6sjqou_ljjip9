import { motion } from 'framer-motion'

const foodImages = [
  // Curated fine-dining photography (royalty-free Unsplash)
  'https://images.unsplash.com/photo-1604908176997-431d9a0f4e5b?q=80&w=1600&auto=format&fit=crop', // plated scallops
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop', // filet + sauce
  'https://images.unsplash.com/photo-1544025162-8e3a23a1a7a6?q=80&w=1600&auto=format&fit=crop', // dessert
  'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1600&auto=format&fit=crop', // wine pour
]

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0a0a0a]" id="hero">
      {/* Background vignette + soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />

      {/* Floating food collage (replaces robot) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] opacity-20 blur-3xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.25),transparent_60%)]" />
        {/* Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Image 1 */}
          <FloatingCircle idx={0} src={foodImages[0]} className="left-[10%] top-[18%] w-40 h-40 md:w-56 md:h-56" delay={0} />
          {/* Image 2 */}
          <FloatingCircle idx={1} src={foodImages[1]} className="right-[12%] top-[15%] w-44 h-44 md:w-64 md:h-64" delay={0.15} />
          {/* Image 3 */}
          <FloatingCircle idx={2} src={foodImages[2]} className="left-[14%] bottom-[12%] w-36 h-36 md:w-52 md:h-52" delay={0.3} />
          {/* Image 4 */}
          <FloatingCircle idx={3} src={foodImages[3]} className="right-[16%] bottom-[10%] w-40 h-40 md:w-56 md:h-56" delay={0.45} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-yellow-300/80 tracking-[0.3em] uppercase text-xs md:text-sm"
          >
            Fine Dining • Tasting Menu • Wine Pairing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-3 text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight"
          >
            Étoile Noire
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-xl text-white/80"
          >
            A modern temple of gastronomy. Black and gold elegance, choreographed service, and a symphony of seasonal flavors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#menu"
              className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition-colors"
            >
              Explore Menu
            </a>
            <a
              href="#reserve"
              className="px-6 py-3 rounded-full border border-yellow-400/60 text-yellow-300 hover:bg-yellow-400/10 transition-colors"
            >
              Reserve a Table
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FloatingCircle({ src, className = '', delay = 0, idx = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -12, 0] }}
      transition={{ delay, duration: 6 + idx, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute ${className}`}
      style={{ filter: 'saturate(1.05) contrast(1.05)' }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-yellow-400/60 shadow-[0_0_40px_rgba(234,179,8,0.15)]">
        <img src={src} alt="Gastronomy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-yellow-300/5" />
      </div>
    </motion.div>
  )
}
