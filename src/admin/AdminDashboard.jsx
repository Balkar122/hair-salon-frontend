import DashboardCard from '../components/DashboardCard'

const AdminDashboard = () => {
  const activities = [
    { client: 'Marcus V.', service: 'Beard Grooming & Styling', time: '10 mins ago', status: 'Completed', cash: '+$35' },
    { client: 'Elena R.', service: 'Bridal Package Consultation', time: '45 mins ago', status: 'Pending', cash: '$0' },
    { client: 'Jessica K.', service: 'Balayage & Olaplex Treatment', time: '2 hours ago', status: 'Confirmed', cash: '+$210' },
  ]

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">Performance Overview</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Live indicators and operational data indexes.</p>
      </div>

      {/* Grid Core KPI Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Appointments Today" value="42 Bookings" />
        <DashboardCard title="Gross Generated Revenue" value="$4,850.00" />
        <DashboardCard title="New Registered Profiles" value="+18 Clients" />
        <DashboardCard title="Active Stylists In Station" value="12 On Duty" />
      </div>

      {/* Live Operational Log Layout Panels */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="card-luxury p-6 lg:col-span-2 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
          <h3 className="text-lg font-bold font-display mb-4 text-neutral-900 dark:text-white">Recent Transactions & Events</h3>
          <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {activities.map((act, i) => (
              <div key={i} className="py-4 flex items-center justify-between text-sm">
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">{act.client}</h4>
                  <p className="text-xs text-neutral-500">{act.service} • {act.time}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    act.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    act.status === 'Confirmed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>{act.status}</span>
                  <p className="text-sm font-bold text-gold mt-1">{act.cash}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-luxury p-6 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold font-display mb-2 text-neutral-900 dark:text-white">Resource Allocation</h3>
            <p className="text-xs text-neutral-500">Peak demand periods monitored across active shifts.</p>
          </div>
          <div className="space-y-4 my-6">
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>Hair Design Station</span>
                <span>88% Capacity</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2 rounded-full overflow-hidden">
                <div className="bg-gold h-full rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>Esthetics & Bridal Lounges</span>
                <span>45% Capacity</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2 rounded-full overflow-hidden">
                <div className="bg-neutral-400 dark:bg-neutral-500 h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
          <button className="gold-btn w-full text-xs py-2">Optimize Staffing Assignments</button>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard