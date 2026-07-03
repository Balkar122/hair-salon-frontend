import { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    duration: "",
    description: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchServices = async () => {
    const res = await fetch("http://localhost:5000/api/services");
    const data = await res.json();
    setServices(data);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing service
        await fetch(`http://localhost:5000/api/services/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setEditingId(null);
      } else {
        // Create new service
        await fetch("http://localhost:5000/api/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      setFormData({ name: "", category: "", price: "", duration: "", description: "", image: "" });
      fetchServices();
    } catch (err) {
      console.error("Failed to save service:", err);
    }
  };

  const handleEdit = (service) => {
    setFormData({
      name: service.name,
      category: service.category,
      price: service.price,
      duration: service.duration || "",
      description: service.description || "",
      image: service.image || "",
    });
    setEditingId(service._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    await fetch(`http://localhost:5000/api/services/${id}`, { method: "DELETE" });
    fetchServices();
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Manage Services</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          name="name"
          placeholder="Service Name (e.g. Hair Cut)"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
        />
        <input
          name="category"
          placeholder="Category (e.g. Hair, Spa, Skin)"
          value={formData.category}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
        />
        <input
          name="price"
          type="number"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
        />
        <input
          name="duration"
          placeholder="Duration (e.g. 30 mins) - optional"
          value={formData.duration}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
        />
        <textarea
          name="description"
          placeholder="Description - optional"
          value={formData.description}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
        />
        <input
          name="image"
          placeholder="Image URL (paste a link) - optional"
          value={formData.image}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.75rem" }}
        />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            style={{ width: "150px", height: "100px", objectFit: "cover", marginBottom: "0.75rem", borderRadius: "6px" }}
          />
        )}
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          {editingId ? "Update Service" : "Add Service"}
        </button>
      </form>

      <h2>Existing Services</h2>
      {services.map((s) => (
        <div
          key={s._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {s.image && (
              <img
                src={s.image}
                alt={s.name}
                style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "6px" }}
              />
            )}
            <div>
              <strong>{s.name}</strong> ({s.category}) — ₹{s.price}
            </div>
          </div>
          <div>
            <button onClick={() => handleEdit(s)} style={{ marginRight: "0.5rem" }}>
              Edit
            </button>
            <button onClick={() => handleDelete(s._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;