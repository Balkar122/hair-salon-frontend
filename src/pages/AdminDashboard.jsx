import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/all`);
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Failed to load bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchBookings();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const total = bookings.length;
  const pending = bookings.filter((b) => b.status === "pending").length;
  const confirmed = bookings.filter((b) => b.status === "confirmed").length;
  const cancelled = bookings.filter((b) => b.status === "cancelled").length;

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="flex min-h-screen bg-cream">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6 hidden md:flex flex-col">
        <h2 className="font-display text-2xl text-gold mb-10">RV Hair Salon</h2>
        <nav className="space-y-2">
          <Link
            to="/admin"
            className="block px-4 py-3 rounded-xl bg-gold text-white font-semibold"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/services"
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 transition"
          >
            Manage Services
          </Link>
          <Link
            to="/"
            className="block px-4 py-3 rounded-xl text-white/70 hover:bg-white/10 transition"
          >
            View Website
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-display mb-1">Admin Dashboard</h1>
        <p className="text-gray-500 mb-8">Overview of all customer bookings</p>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="card-luxury p-6">
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <p className="text-3xl font-bold mt-1">{total}</p>
          </div>
          <div className="card-luxury p-6">
            <p className="text-gray-500 text-sm">Pending</p>
            <p className="text-3xl font-bold mt-1 text-yellow-500">{pending}</p>
          </div>
          <div className="card-luxury p-6">
            <p className="text-gray-500 text-sm">Confirmed</p>
            <p className="text-3xl font-bold mt-1 text-green-600">{confirmed}</p>
          </div>
          <div className="card-luxury p-6">
            <p className="text-gray-500 text-sm">Cancelled</p>
            <p className="text-3xl font-bold mt-1 text-gold">{cancelled}</p>
          </div>
        </div>

        {/* Bookings table */}
        <div className="card-luxury p-6 overflow-x-auto">
          <h2 className="text-xl font-display mb-4">All Bookings</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wide">
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Phone</th>
                <th className="py-3 pr-4">Service</th>
                <th className="py-3 pr-4">Date</th>
                <th className="py-3 pr-4">Time</th>
                <th className="py-3 pr-4">Status</th>
                <th className="py-3 pr-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-gray-400">
                    No bookings yet.
                  </td>
                </tr>
              ) : (
                bookings.map((b) => (
                  <tr key={b._id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 pr-4 font-medium">{b.name}</td>
                    <td className="py-3 pr-4">{b.phone}</td>
                    <td className="py-3 pr-4">{b.service}</td>
                    <td className="py-3 pr-4">{b.date}</td>
                    <td className="py-3 pr-4">{b.time}</td>
                    <td className="py-3 pr-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[b.status]}`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4">
                      <select
                        value={b.status}
                        onChange={(e) => handleStatusChange(b._id, e.target.value)}
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:border-gold focus:outline-none"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;