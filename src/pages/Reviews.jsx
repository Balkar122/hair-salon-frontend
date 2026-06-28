import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../services/dummyData'

const Reviews = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h1 className="text-5xl font-display text-center mb-12">Customer Reviews</h1>
        <Swiper spaceBetween={30} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews