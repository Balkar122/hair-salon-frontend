import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ReviewCard from '../components/ReviewCard'
import { services, reviews, gallery } from '../services/dummyData'

const Home = () => {
  return (
    <>
      <Hero />

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-display mb-10 text-center">Featured Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black text-white">
        <div className="container-custom grid md:grid-cols-4 gap-8 text-center">
          <div><h3 className="text-4xl text-gold font-bold">15+</h3><p>Years Experience</p></div>
          <div><h3 className="text-4xl text-gold font-bold">5k+</h3><p>Happy Clients</p></div>
          <div><h3 className="text-4xl text-gold font-bold">20+</h3><p>Expert Staff</p></div>
          <div><h3 className="text-4xl text-gold font-bold">50+</h3><p>Awards Won</p></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-display mb-10 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-display mb-10 text-center">Instagram Gallery</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <img key={item.id} src={item.image} alt={item.category} className="rounded-3xl h-64 w-full object-cover" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gold text-black">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-4xl font-display mb-4">Join Our Newsletter</h2>
          <p className="mb-6">Get beauty tips, salon offers, and new service updates.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 p-4 rounded-full" />
            <button className="bg-black text-white px-8 py-4 rounded-full">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home