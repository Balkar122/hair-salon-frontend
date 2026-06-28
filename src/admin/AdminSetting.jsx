import { useTheme } from '../context/ThemeContext'

const AdminSettings = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <h1 className="text-4xl font-display mb-6">Settings</h1>
      <div className="card-luxury p-6">
        <p className="mb-4">Current Theme: {theme}</p>
        <button onClick={toggleTheme} className="gold-btn">Toggle Dark Mode</button>
      </div>
    </div>
  )
}

export default AdminSettings