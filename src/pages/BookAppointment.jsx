import { useState, useEffect } from "react";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/services`);
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Failed to load services:", err);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Appointment booked successfully! We'll confirm shortly.");
        setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "" });
      } else if (res.status === 409) {
        setMessage(`⚠️ ${data.message}`);
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setMessage("❌ Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-black min-h-screen flex items-center">
      <div className="container-custom max-w-lg mx-auto">
        <p className="text-gold uppercase tracking-[0.3em] text-sm text-center mb-3">
          Reserve Your Slot
        </p>
        <h1 className="text-4xl font-display text-white text-center mb-10">
          Book Appointment
        </h1>

        <form
          onSubmit={handleSubmit}
          className="card-luxury bg-white p-8 space-y-5"
        >
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:outline-none transition"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:outline-none transition"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:outline-none transition"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:outline-none transition bg-white text-gray-700"
          >
            <option value="" disabled>
              Select a Service
            </option>
            {services.map((s) => (
              <option key={s._id} value={s.name}>
                {s.name} — ₹{s.price} {s.duration ? `(${s.duration})` : ""}
              </option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:outline-none transition"
            />
            <input
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-gold focus:outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="gold-btn w-full text-center disabled:opacity-60"
          >
            {loading ? "Booking..." : "Book Now"}
          </button>

          {message && (
            <p className="text-center text-sm mt-2 font-medium">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;