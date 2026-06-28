import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

const About = () => {
  const milestones = [
    { year: '2016', title: 'The Genesis', desc: 'Luxe Salon launched its premier flagship branch.' },
    { year: '2019', title: 'Best Luxury Salon Award', desc: 'Recognized for absolute excellence in premium style operations.' },
    { year: '2022', title: 'Global Expansion', desc: 'Introduced international treatments and certified style leads.' },
    { year: '2026', title: 'Digital Evolution', desc: 'Unveiling advanced customer profiles and automated booking structures.' }
  ]

  return (
    <section className="bg-cream dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Hero Breakdown Section */}
      <div className="section-padding container-custom mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80" 
            alt="About Luxury Salon" 
            className="rounded-3xl shadow-luxury relative z-10 w-full object-cover h-[450px]" 
          />
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold rounded-3xl z-0"></div>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="space-y-6"
        >
          <p className="text-gold uppercase tracking-[0.2em] font-semibold">Our Signature Legacy</p>
          <h1 className="text-5xl font-display font-bold leading-tight">About Our Salon</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Our story is built on luxury, technical mastery, and unmatched execution. We treat every beauty session as a canvas for high fashion expression.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="p-5 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border-l-4 border-gold">
              <h3 className="font-display font-bold text-xl mb-1 text-gold">Our Mission</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Deliver elite styling and customized premium wellness sessions.</p>
            </div>
            <div className="p-5 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border-l-4 border-gold">
              <h3 className="font-display font-bold text-xl mb-1 text-gold">Our Vision</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Set global benchmarks for luxury grooming practices everywhere.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Corporate Timeline Component */}
      <div className="bg-white dark:bg-neutral-950 py-20 transition-colors duration-300">
        <div className="container-custom mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16">The Journey Timeline</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative p-6 bg-cream dark:bg-neutral-900 rounded-2xl shadow-md border border-gold/10">
                <span className="text-5xl font-display font-extrabold text-gold/20 absolute top-2 right-4">{item.year}</span>
                <h4 className="font-bold text-lg mb-2 text-gold relative z-10">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About