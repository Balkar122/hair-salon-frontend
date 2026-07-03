import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Failed to load services:", err);
      }
    };
    fetchServices();
  }, []);

  // Group services by category
  const grouped = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Our Services</h1>
      {Object.keys(grouped).length === 0 ? (
        <p>No services available yet.</p>
      ) : (
        Object.keys(grouped).map((category) => (
          <div key={category} style={{ marginBottom: "2rem" }}>
            <h2 style={{ borderBottom: "2px solid #ccc", paddingBottom: "0.5rem" }}>
              {category}
            </h2>
            {grouped[category].map((service) => (
              <div
                key={service._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div>
                  <strong>{service.name}</strong>
                  {service.duration && (
                    <span style={{ color: "#777", marginLeft: "0.5rem" }}>
                      ({service.duration})
                    </span>
                  )}
                  {service.description && (
                    <p style={{ margin: "0.2rem 0 0", color: "#666", fontSize: "0.9rem" }}>
                      {service.description}
                    </p>
                  )}
                </div>
                <div style={{ fontWeight: "bold" }}>₹{service.price}</div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Services;