import { useForm } from 'react-hook-form'

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log('Booking Submitted:', data)
    alert('Appointment booked successfully!')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-luxury p-8 space-y-4">
      <div>
        <input
          {...register('fullName', { required: 'Full name is required' })}
          placeholder="Full Name"
          className="w-full p-4 rounded-xl border"
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <input
          {...register('email', { required: 'Email is required' })}
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl border"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <input
          {...register('phone', { required: 'Phone is required' })}
          placeholder="Phone"
          className="w-full p-4 rounded-xl border"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <select {...register('service')} className="w-full p-4 rounded-xl border">
          <option>Hair Cut</option>
          <option>Hair Styling</option>
          <option>Hair Coloring</option>
          <option>Hair Spa</option>
          <option>Keratin</option>
          <option>Facial</option>
          <option>Beard Styling</option>
          <option>Bridal Makeup</option>
        </select>
      </div>

      <div>
        <input {...register('stylist')} placeholder="Preferred Stylist" className="w-full p-4 rounded-xl border" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input {...register('date')} type="date" className="w-full p-4 rounded-xl border" />
        <input {...register('time')} type="time" className="w-full p-4 rounded-xl border" />
      </div>

      <div>
        <textarea {...register('notes')} placeholder="Notes" rows="4" className="w-full p-4 rounded-xl border"></textarea>
      </div>

      <button type="submit" className="gold-btn w-full">Submit</button>
    </form>
  )
}

export default BookingForm