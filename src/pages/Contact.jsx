import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl font-display mb-8">Contact Us</h1>
          <div className="space-y-4 mb-8">
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-gold" /> 123 Luxury Street, City Center</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-gold" /> hello@luxesalon.com</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-gold" /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><FaClock className="text-gold" /> Mon - Sun: 9:00 AM - 9:00 PM</p>
          </div>

          <div className="flex gap-4 text-gold text-xl mb-8">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-luxury">
            <iframe
              title="map"
              src="[google.com](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086293664936!2d-122.41941568468185!3d37.77492977975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df6d7d75%3A0x4e7d5d4fd89f5cb1!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1614978355410!5m2!1sen!2sus)"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <form className="card-luxury p-8 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border" />
          <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border" />
          <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl border" />
          <textarea rows="6" placeholder="Message" className="w-full p-4 rounded-xl border"></textarea>
          <button className="gold-btn w-full">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact