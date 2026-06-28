import { useState } from 'react'

const AdminCustomers = () => {
  const [customers] = useState([
    { name: 'Ava Wilson', email: 'ava@example.com', phone: '+1 555-0192', totalVisits: 14, spent: '$1,240.00', membership: 'Luxury Elite' },
    { name: 'Olivia Brown', email: 'olivia.b@example.com', phone: '+1 555-0143', totalVisits: 8, spent: '$680.00', membership: 'Basic Glow' },
    { name: 'Noah Martin', email: 'noah@example.com', phone: '+1 555-0177', totalVisits: 22, spent: '$2,890.00', membership: 'VIP Diamond' },
    { name: 'Sophia Miller', email: 'sophia.m@example.com', phone: '+1 555-0155', totalVisits: 3, spent: '$190.00', membership: 'None' }
  ])

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">Customer Profiles</h1>
        <p className="text-sm text-neutral-500">Manage client data tracks, review tier classifications, and audit transaction records.</p>
      </div>

      <div className="card-luxury overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 text-xs font-bold uppercase tracking-wider border-b border-neutral-100 dark:border-neutral-800">
                <th className="p-4">Customer Name</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Total Visits</th>
                <th className="p-4">Gross Revenue Contribution</th>
                <th className="p-4">Tier Status</th>
                <th className="p-4 text-right">Profile Management</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
              {customers.map((c, i) => (
                <tr key={i} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                  <td className="p-4 font-semibold text-neutral-900 dark:text-white">{c.name}</td>
                  <td className="p-4">
                    <span className="block">{c.email}</span>
                    <span className="text-xs text-neutral-400">{c.phone}</span>
                  </td>
                  <td className="p-4 font-mono font-medium">{c.totalVisits} visits</td>
                  <td className="p-4 font-bold text-neutral-900 dark:text-white">{c.spent}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                      c.membership === 'VIP Diamond' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                      c.membership === 'Luxury Elite' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                      c.membership === 'Basic Glow' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
                    }`}>{c.membership}</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gold hover:underline text-xs font-semibold">View Ledger History →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminCustomers