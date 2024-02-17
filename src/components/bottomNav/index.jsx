import { NavLink } from 'react-router-dom'
import './bottomNav.scss'

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/calender" className={({ isActive }) => (isActive ? 'active' : '')}>
        Calender
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
        Settings
      </NavLink>
    </div>
  )
}

export default BottomNav
