import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQAccordion = ({ items }) => {
  const [activeId, setActiveId] = useState(null)

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="card-luxury p-5">
          <button
            className="w-full text-left font-semibold text-lg"
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          >
            {item.question}
          </button>
          <AnimatePresence>
            {activeId === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-gray-600 dark:text-gray-300">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion