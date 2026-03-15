import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="container navbar-inner">
                <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
                    <span className="eye-icon">👁️</span>
                    <span>EyeMouse</span>
                </Link>

                <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
                    {open ? '✕' : '☰'}
                </button>

                <ul className={`navbar-links${open ? ' open' : ''}`}>
                    <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/how-to-use" onClick={() => setOpen(false)}>How to Use</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink></li>
                    <li>
                        <NavLink to="/download" className="navbar-cta" onClick={() => setOpen(false)}>
                            ⬇ Download
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
