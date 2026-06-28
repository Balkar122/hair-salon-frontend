import ServiceCard from '../components/ServiceCard'
import { services } from '../services/dummyData'

const Services = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-5xl font-display text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services