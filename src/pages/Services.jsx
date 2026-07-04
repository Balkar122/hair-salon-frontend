import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

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

  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="section-padding bg-cream min-h-screen">
      <div className="container-custom">
        <p className="text-gold uppercase tracking-[0.3em] text-sm text-center mb-3">
          What We Offer
        </p>
        <h1 className="text-4xl font-display text-center mb-12">Our Services</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="bg-black rounded-3xl p-6 h-fit md:sticky md:top-24">
            <h3 className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-xl transition ${
                      activeCategory === cat
                        ? "bg-gold text-white font-semibold"
                        : "text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Service list */}
          <div className="md:col-span-3 space-y-6">
            {filteredServices.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No services available in this category yet.
              </p>
            ) : (
              filteredServices.map((service) => (
                <div
                  key={service._id}
                  className="card-luxury flex flex-col sm:flex-row items-stretch overflow-hidden"
                >
                  <img
                    src={service.image || "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400"}
                    alt={service.name}
                    className="w-full sm:w-48 h-48 sm:h-auto object-cover"
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-display mb-1">{service.name}</h3>
                      {service.duration && (
                        <p className="text-sm text-gray-500 mb-2">⏱ {service.duration}</p>
                      )}
                      {service.description && (
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {service.description}
                        </p>
                      )}
                      <p className="text-gold font-bold text-lg">₹{service.price}</p>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Link
                        to="/book-appointment"
                        className="gold-btn text-center flex-1"
                      >
                        Book Now
                      </Link>
                      <button className="outline-btn flex-1">View More</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;