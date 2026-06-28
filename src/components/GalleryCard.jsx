import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gallery } from '../services/dummyData'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  const [activeImageIndex, setActiveImageIndex] = useState(null)
  
  const filters = ['All', 'Hair', 'Color', 'Bridal', 'Spa']
  
  const filteredGallery = filter === 'All' 
    ? gallery 
    : gallery.filter((item) => item.category === filter)

  const openLightbox = (id) => {
    const index = filteredGallery.findIndex(item => item.id === id)
    setActiveImageIndex(index)
  }

  const closeLightbox = () => setActiveImageIndex(null)

  const nextImage = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev + 1) % filteredGallery.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length)
  }

  return (
    <section className="section-padding min-h-screen bg-cream dark:bg-black transition-colors duration-300">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-2">Our Visual Masterpieces</p>
          <h1 className="text-5xl font-display font-bold text-black dark:text-white">Luxury Gallery</h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border border-gold/30 ${
                filter === item 
                  ? 'bg-gold text-black border-gold shadow-lg scale-105' 
                  : 'bg-white dark:bg-neutral-900 text-black dark:text-white hover:border-gold'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Dynamic Masonry-Style Grid Layout */}
        <motion.div 
          layout 
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden rounded-3xl shadow-luxury group cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white/50 px-5 py-2 rounded-full text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                    View Image
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal Component */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors"
              onClick={closeLightbox}
            >
              <HiX />
            </button>

            <button 
              className="absolute left-4 md:left-8 text-white text-5xl hover:text-gold transition-colors p-2"
              onClick={prevImage}
            >
              <HiChevronLeft />
            </button>

            <motion.img
              key={activeImageIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={filteredGallery[activeImageIndex].image}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              className="absolute right-4 md:right-8 text-white text-5xl hover:text-gold transition-colors p-2"
              onClick={nextImage}
            >
              <HiChevronRight />
            </button>

            <div className="absolute bottom-6 text-white/70 font-medium tracking-wide">
              Category: <span className="text-gold font-semibold">{filteredGallery[activeImageIndex].category}</span> ({activeImageIndex + 1} / {filteredGallery.length})
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery