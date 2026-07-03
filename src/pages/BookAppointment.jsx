import { useState } from "react";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setMessage("✅ Appointment booked successfully!");
        setFormData({ name: "", phone: "", service: "", date: "", time: "" });
      } else {
        setMessage("❌ Something went wrong.");
      }
    } catch (err) {
      setMessage("❌ Could not connect to server.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Book Appointment</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }} />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }} />
        <input name="service" placeholder="Service (e.g. Haircut)" value={formData.service} onChange={handleChange} required style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }} />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }} />
        <input name="time" type="time" value={formData.time} onChange={handleChange} required style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }} />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Book Now</button>
      </form>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
};

export default BookAppointment;