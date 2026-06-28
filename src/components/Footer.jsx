import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white section-padding">
      <div className="container-custom grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-display text-gold mb-4">Luxe Salon</h3>
          <p className="text-white/70">Luxury hair, beauty, and grooming experience.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-white/70">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gold">Services</h4>
          <ul className="space-y-2 text-white/70">
            <li>Hair Cut</li>
            <li>Coloring</li>
            <li>Keratin</li>
            <li>Bridal Makeup</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gold">Newsletter</h4>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded-full text-black mb-3"
          />
          <button className="gold-btn w-full">Subscribe</button>
          <div className="flex gap-4 mt-4 text-gold text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <p className="text-center text-white/50 mt-10">© 2026 Luxe Salon. All rights reserved.</p>
    </footer>
  )
}

export default Footer