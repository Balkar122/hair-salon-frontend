import { FaStar } from 'react-icons/fa'

const ReviewCard = ({ review }) => {
  return (
    <div className="card-luxury p-6">
      <div className="flex items-center gap-4 mb-4">
        <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
      </div>
      <div className="flex text-gold mb-3">
        {[...Array(review.stars)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
    </div>
  )
}

export default ReviewCard