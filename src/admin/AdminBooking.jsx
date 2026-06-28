import { useState } from 'react'

const AdminBookings = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const [bookingsList, setBookingsList] = useState([
    { id: 'LX-8902', customer: 'Amara Vance', service: 'Balayage Glow & Cut', stylist: 'Sophia Carter', date: '2026-06-29', time: '14:30', status: 'Pending' },
    { id: 'LX-8903', customer: 'Jordan Blake', service: 'Luxury Charcoal Facial', stylist: 'Liam James', date: '2026-06-29', time: '16:00', status: 'Confirmed' },
    { id: 'LX-8904', customer: 'Clara Oswald', service: 'Bridal Package Trial', stylist: 'Emma Stone', date: '2026-06-30', time: '09:00', status: 'Confirmed' },
    { id: 'LX-8905', customer: 'David Tennant', service: 'Classic Scissor Cut', stylist: 'Liam James', date: '2026-07-02', time: '11:15', status: 'Cancelled' }
  ])

  const updateStatus = (id, newStatus) => {
    setBookingsList(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item))
  }

  const filteredBookings = bookingsList.filter(b => {
    const matchesSearch = b.customer.toLowerCase().includes(searchTerm.toLowerCase()) || b.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || b.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">Appointment Registries</h1>
          <p className="text-sm text-neutral-500">Monitor scheduling requests, adjust real-time system status flags, and update workflow queues.</p>
        </div>
      </div>

      {/* Control Actions & Utility Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm w-full">
        <input 
          type="text" 
          placeholder="Search by ID or customer name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-80 px-4 py-2 text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent text-neutral-800 dark:text-white focus:outline-none focus:border-gold"
        />
        
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
          {['All', 'Confirmed', 'Pending', 'Cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide border transition duration-150 whitespace-nowrap ${
                statusFilter === status 
                  ? 'bg-gold text-black border-gold' 
                  : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border-transparent hover:border-neutral-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Core Operational Grid Data Stream Table */}
      <div className="card-luxury overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-luxury">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 text-xs font-bold uppercase tracking-wider border-b border-neutral-100 dark:border-neutral-800">
                <th className="p-4">Reference ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Requested Service</th>
                <th className="p-4">Assigned Expert</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Status Flag</th>
                <th className="p-4 text-right">Actions Menu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                    <td className="p-4 font-mono text-xs font-bold text-neutral-400">{b.id}</td>
                    <td className="p-4 font-semibold text-neutral-900 dark:text-white">{b.customer}</td>
                    <td className="p-4">{b.service}</td>
                    <td className="p-4 font-medium text-gold">{b.stylist}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span className="block font-medium">{b.date}</span>
                      <span className="text-xs text-neutral-400">{b.time}</span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-block text-xs font-bold tracking-wide px-2.5 py-0.5 rounded-full ${
                        b.status === 'Confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        b.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>{b.status}</span>
                    </td>
                    <td className="p-4 text-right space-x-1 whitespace-nowrap">
                      {b.status === 'Pending' && (
                        <>
                          <button 
                            onClick={() => updateStatus(b.id, 'Confirmed')}
                            className="bg-green-600 hover:bg-green-700 text-white text-xs px-2.5 py-1 rounded-md font-medium transition"
                          >
                            Approve
                          </button>
                          <button 
                            onClick={() => updateStatus(b.id, 'Cancelled')}
                            className="bg-neutral-200 dark:bg-neutral-700 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white text-neutral-700 dark:text-neutral-300 text-xs px-2.5 py-1 rounded-md font-medium transition"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {b.status === 'Confirmed' && (
                        <button 
                          onClick={() => updateStatus(b.id, 'Cancelled')}
                          className="border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs px-2.5 py-1 rounded-md font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                        >
                          Revoke Appointment
                        </button>
                      )}
                      {b.status === 'Cancelled' && (
                        <span className="text-xs text-neutral-400 italic">No Actions Pending</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-sm text-neutral-400 italic">
                    No records found matching current parameter constraints.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminBookings