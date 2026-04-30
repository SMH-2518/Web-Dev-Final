import { useState } from 'react'
import styles from './Download.module.css'

const PLATFORMS = [
  { id: 'windows', icon: 'fab fa-windows', name: 'Windows', desc: 'Neural protection for Win 10/11' },
  { id: 'mac', icon: 'fab fa-apple', name: 'macOS', desc: 'Silicon-native security' },
  { id: 'android', icon: 'fab fa-android', name: 'Android', desc: 'Mobile active shielding' },
  { id: 'ios', icon: 'fab fa-app-store-ios', name: 'iOS', desc: 'Encrypted mobile stack' },
]

export default function Download() {
  const [dl, setDl] = useState(null)
  const handleDl = (id) => {
    setDl(id)
    setTimeout(() => setDl(null), 2000)
  }

  return (
    <main className={styles.main}>
      <div className="mesh-bg" />
      <div className="noise" />
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.badge}>Get Protected</div>
          <h1 className="gradient-text">Deploy ProtecSure.</h1>
          <p className={styles.sub}>Secure every node in your digital ecosystem with our native applications.</p>
        </section>

        <div className={styles.grid}>
          {PLATFORMS.map(p => (
            <div key={p.id} className={`glass-panel border-beam ${styles.card}`}>
              <div className={styles.icon}><i className={p.icon} /></div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <button 
                className={styles.dlBtn}
                onClick={() => handleDl(p.id)}
              >
                {dl === p.id ? 'INITIALIZING...' : 'DOWNLOAD'}
              </button>
            </div>
          ))}
        </div>

        <section className={styles.extSection}>
          <div className={`glass-panel ${styles.extCard}`}>
            <div className={styles.extLeft}>
              <h2>All-in-One Extension</h2>
              <p>The core of our protection, consolidated into a single lightweight browser companion. Ad-blocking, Anti-spam, and Neural-active phishing defense.</p>
              <div className={styles.extActions}>
                <button className={styles.chrome}><i className="fab fa-chrome"/> Add to Chrome</button>
                <button className={styles.firefox}><i className="fab fa-firefox"/> Get for Firefox</button>
              </div>
            </div>
            <div className={styles.extRight}>
              <div className={styles.logoCircle}>
                <img src="/images/logo.png" alt="Logo" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
