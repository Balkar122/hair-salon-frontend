import PricingCard from '../components/PricingCard'

const Pricing = () => {
  const plans = [
    { title: 'Basic Glow', price: '$49', features: ['Hair Cut', 'Basic Styling', 'Consultation'] },
    { title: 'Luxury Care', price: '$99', features: ['Hair Spa', 'Advanced Styling', 'Premium Products'] },
    { title: 'Bridal Premium', price: '$199', features: ['Bridal Makeup', 'Hair Styling', 'Touch-up Support'] },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-5xl font-display text-center mb-12">Pricing Plans</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing