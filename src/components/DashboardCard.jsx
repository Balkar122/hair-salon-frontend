const DashboardCard = ({ title, value }) => {
  return (
    <div className="card-luxury p-6">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-3xl font-bold text-gold mt-2">{value}</h3>
    </div>
  )
}

export default DashboardCard