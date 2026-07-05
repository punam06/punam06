import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  {
    title: 'Sustainable Technology',
    description:
      'Passionate about building AI systems that drive the circular economy — reducing e-waste, optimizing material recovery, and minimizing environmental impact.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    title: 'AI Research',
    description:
      'Exploring explainable AI (SHAP, KAN) and hardware-aware model optimization to make machine learning more interpretable, efficient, and deployable at the edge.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'Hardware Optimization',
    description:
      'Bridging software and silicon — optimizing neural networks for ARM, CUDA, and edge devices to achieve real-time inference with minimal power consumption.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="section-label">About</span>
          <h2 className="section-title mb-6">
            Bridging AI and{' '}
            <span className="gradient-text">Sustainable Innovation</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed mb-12">
            I'm an undergraduate at{' '}
            <span className="text-gray-900 dark:text-gray-100 font-semibold">
              Bangladesh University of Professionals (BUP)
            </span>
            , driven by a vision where technology and ecology reinforce each
            other. My work centers on making AI transparent, efficient, and
            accessible — from edge deployment of explainable models to
            hardware-aware optimization that reduces computational carbon
            footprints.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card-hover group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {h.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
