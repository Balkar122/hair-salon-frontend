import { useState } from 'react'
import GalleryCard from '../components/GalleryCard'
import { gallery } from '../services/dummyData'

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Hair', 'Color', 'Bridal', 'Spa']

  const filteredGallery =
    filter === 'All' ? gallery : gallery.filter((item) => item.category === filter)

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-5xl font-display text-center mb-8">Gallery</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full ${filter === item ? 'bg-gold text-black' : 'bg-white dark:bg-neutral-800'}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery