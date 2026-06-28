import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMoon, HiSun, HiMenu, HiX } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  const activeStyle = "text-gold font-semibold border-b-2 border-gold pb-1"
  const inactiveStyle = "text-black dark:text-white hover:text-gold transition duration-300 font-medium"

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gold/20 transition-colors duration-300">
      <div className="container-custom flex items-center justify-between py-4 px-6 mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-display font-bold tracking-widest text-gold uppercase">
          Luxe Salon
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/book-appointment" className="gold-btn text-sm py-2 px-5 ml-4">
            Book Now
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="text-2xl text-gold hover:scale-110 transition-transform" 
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <HiMoon /> : <HiSun />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-3xl text-gold lg:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gold/20 shadow-xl lg:hidden z-40"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `text-lg ${isActive ? 'text-gold font-bold' : 'text-black dark:text-white'}`}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/book-appointment" 
                onClick={() => setIsOpen(false)}
                className="gold-btn text-center block w-full mt-2"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar