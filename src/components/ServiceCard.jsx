import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card-luxury overflow-hidden"
    >
      <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-display mb-2">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
        <div className="flex justify-between mb-4 text-sm">
          <span className="text-gold font-semibold">{service.price}</span>
          <span>{service.duration}</span>
        </div>
        <button className="gold-btn w-full">Book Now</button>
      </div>
    </motion.div>
  )
}

export default ServiceCard