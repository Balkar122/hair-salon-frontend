import { useState } from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ReviewCard from '../components/ReviewCard'
import { services, reviews, gallery } from '../services/dummyData'
import { Link } from 'react-router-dom'

const categories = ['All', 'Hair', 'Skin', 'Spa', 'Bridal']

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryMap = {
    Hair: ['Hair Cut', 'Hair Styling', 'Hair Coloring', 'Keratin', 'Beard Styling'],
    Skin: ['Facial'],
    Spa: ['Hair Spa'],
    Bridal: ['Bridal Makeup'],
  }

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => categoryMap[activeCategory]?.includes(s.title))

  return (
    <>
      <Hero />

      {/* Quick category strip */}
      <section className="border-y border-gold/20 bg-black">
        <div className="container-custom flex flex-wrap justify-center gap-8 py-6 text-white/80 text-sm tracking-[0.15em] uppercase">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`transition-colors pb-1 border-b-2 ${
                activeCategory === cat
                  ? 'text-gold border-gold'
                  : 'border-transparent hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding">
        <div className="container-custom">
          <p className="text-gold uppercase tracking-[0.3em] text-sm text-center mb-3">
            Signature Menu
          </p>
          <h2 className="text-4xl font-display mb-12 text-center">Featured Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="outline-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl text-gold font-bold">15+</h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl text-gold font-bold">20k+</h3>
            <p>Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl text-gold font-bold">5+</h3>
            <p>Expert Staff</p>
          </div>
          <div>
            <h3 className="text-4xl text-gold font-bold">10+</h3>
            <p>Awards Won</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#F8F5F0]">
        <div className="container-custom">
          <p className="text-gold uppercase tracking-[0.3em] text-sm text-center mb-3">
            Client Love
          </p>
          <h2 className="text-4xl font-display mb-12 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <p className="text-gold uppercase tracking-[0.3em] text-sm text-center mb-3">
            Follow Along
          </p>
          <h2 className="text-4xl font-display mb-12 text-center">Instagram Gallery</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.category}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 uppercase tracking-widest text-sm transition-opacity">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section-padding bg-gold text-black">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-4xl font-display mb-4">Join Our Newsletter</h2>
          <p className="mb-6">Get beauty tips, salon offers, and new service updates.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-4 rounded-full"
            />
            <button className="bg-black text-white px-8 py-4 rounded-full">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home