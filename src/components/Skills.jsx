import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['C', 'Java', 'Python', 'TypeScript', 'SQL'],
    color: 'bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400',
  },
  {
    label: 'AI & ML',
    skills: ['TensorFlow', 'PyTorch', 'SHAP', 'KAN', 'Scikit-learn', 'JAX'],
    color: 'bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400',
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Linux', 'macOS', 'VS Code', 'CUDA', 'CMake'],
    color: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400',
  },
  {
    label: 'Hardware & Edge',
    skills: ['ARM Neon', 'TFLite', 'Embedded C', 'Raspberry Pi', 'Arduino'],
    color: 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="section-label">Skills & Experience</span>
          <h2 className="section-title">
            Tools I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card"
            >
              <h3 className="text-base font-mono font-semibold tracking-wider uppercase mb-4 text-gray-500 dark:text-gray-500">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
