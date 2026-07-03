import { motion } from 'framer-motion'
import { heroImage } from '../assets/images'
import { fadeUp } from '../utils/motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'   // ADD THIS

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ADD THIS BLOCK */}
      <div
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.15,
          position: "absolute",
          inset: 0,
        }}
      />

      <div className="container-custom relative z-10 px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <p className="text-gold uppercase tracking-[0.3em] mb-4">RV Hair Salon</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Transform Your Style With Elegance
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Premium salon experience with expert stylists, luxury treatments, and timeless beauty.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/book-appointment" className="gold-btn">
              Book Appointment
            </Link>
            <Link to="/services" className="outline-btn">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero