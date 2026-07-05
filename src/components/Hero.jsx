import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-950 dark:to-primary-950/30 pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/10 dark:bg-primary-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container relative z-10 text-center"
      >
        <motion.p
          variants={item}
          className="text-base font-mono font-medium tracking-widest uppercase text-primary-500 mb-6"
        >
          Computer Science & Engineering
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Umme Hani Punam</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent systems at the intersection of{' '}
          <span className="text-gray-900 dark:text-gray-100 font-semibold">
            sustainable technology
          </span>{' '}
          and{' '}
          <span className="text-gray-900 dark:text-gray-100 font-semibold">
            AI research
          </span>
          . Focused on Explainable AI, hardware-aware machine learning, and
          circular economy solutions.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 rounded-xl text-base font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-gray-900/10 dark:shadow-white/5"
          >
            View Projects
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-xl text-base font-semibold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex items-center justify-center gap-6 text-gray-400 dark:text-gray-600"
        >
          <div className="h-px w-12 bg-gray-300 dark:bg-gray-800" />
          <span className="text-sm font-mono font-medium tracking-widest uppercase">
            Scroll down
          </span>
          <div className="h-px w-12 bg-gray-300 dark:bg-gray-800" />
        </motion.div>
      </motion.div>
    </section>
  )
}
