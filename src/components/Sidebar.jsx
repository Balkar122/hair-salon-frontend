import { NavLink } from 'react-router-dom'
import { 
  HiChartBar, HiCalendar, HiUserGroup, HiScissors, 
  HiBriefcase, HiDocumentReport, HiBell, HiCog, HiUserCircle 
} from 'react-icons/x' // Fallback to basic if needed, or sub React Icons

const Sidebar = () => {
  const items = [
    { label: 'Dashboard', path: '/admin', icon: '📊' },
    { label: 'Bookings', path: '/admin/bookings', icon: '📅' },
    { label: 'Customers', path: '/admin/customers', icon: '👥' },
    { label: 'Services', path: '/admin/services', icon: '✂️' },
    { label: 'Staff', path: '/admin/staff', icon: '👔' },
    { label: 'Reports', path: '/admin/reports', icon: '📈' },
    { label: 'Notifications', path: '/admin/notifications', icon: '🔔' },
    { label: 'Calendar', path: '/admin/calendar', icon: '🗓️' },
    { label: 'Profile', path: '/admin/profile', icon: '👤' },
    { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ]

  return (
    <aside className="w-64 min-h-screen bg-black border-r border-gold/20 text-white p-6 flex flex-col justify-between hidden md:flex shrink-0">
      <div>
        <div className="mb-10 text-center">
          <h2 className="text-xl font-display font-bold text-gold tracking-widest uppercase">Luxe Admin</h2>
          <p className="text-xs text-white/40 mt-1">Management Engine</p>
        </div>
        
        <nav className="space-y-1">
          {items.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.path} 
              end={item.path === '/admin'}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition duration-200 group text-sm font-medium
                ${isActive 
                  ? 'bg-gold text-black shadow-lg font-semibold' 
                  : 'text-white/70 hover:bg-neutral-900 hover:text-gold'}
              `}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10 pt-4 text-center">
        <p className="text-xs text-white/30">System v2.4.0 • 2026</p>
      </div>
    </aside>
  )
}

export default Sidebar