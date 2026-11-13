import { NavLink } from 'react-router-dom'
export default function BottomTabs() { return <nav className="tabs" aria-label="Primary"><NavLink to="/" end>Home</NavLink><NavLink to="/money">Money</NavLink><NavLink to="/schedule">Schedule</NavLink><NavLink to="/settings">Settings</NavLink></nav> }
