const PricingCard = ({ title, price, features }) => {
  return (
    <div className="card-luxury border border-gold p-8 text-center hover:scale-105 transition duration-300">
      <h3 className="text-3xl font-display mb-4">{title}</h3>
      <p className="text-4xl font-bold text-gold mb-6">{price}</p>
      <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-300">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="gold-btn">Book Appointment</button>
    </div>
  )
}

export default PricingCard