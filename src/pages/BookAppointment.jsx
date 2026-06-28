import BookingForm from '../components/BookingForm'

const BookAppointment = () => {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-5xl font-display text-center mb-12">Book Appointment</h1>
        <BookingForm />
      </div>
    </section>
  )
}

export default BookAppointment