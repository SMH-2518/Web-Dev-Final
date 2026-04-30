import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <img src="/images/logo.png" alt="ProtecSure Logo" className={styles.logo} />
        <span className={styles.siteTitle}>
          <span className={styles.blue}>Protec</span><span className={styles.cyan}>Sure</span>
        </span>
      </NavLink>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {[
            { to: '/',         label: 'Home',     end: true },
            { to: '/plans',    label: 'Plans' },
            { to: '/download', label: 'Download' },
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
        {user ? (
          <>
            <NavLink to="/profile" className={styles.ctaBtn} style={{background: 'transparent', border: '1px solid var(--primary)', color: '#fff'}}>
              <i className="fas fa-user-circle" style={{marginRight: '8px', color: 'var(--primary)'}} />
              {user.userName}
            </NavLink>
            <button onClick={logout} className={styles.ctaBtn} style={{background: 'rgba(255, 50, 50, 0.1)', color: '#ff5555', border: '1px solid rgba(255, 50, 50, 0.3)'}}>
              Sign Out
            </button>
          </>
        ) : (
          <NavLink to="/auth" className={styles.ctaBtn}>
            Sign In / Register
          </NavLink>
        )}
      </div>
    </header>
  )
}
