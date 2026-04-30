import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './Profile.module.css'

export default function Profile() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user, navigate])

  if (!user) return null

  return (
    <main className={styles.main}>
      <div className="mesh-bg" />
      <div className="noise" />
      
      <div className={styles.container}>
        <div className={`glass-panel border-beam ${styles.dashboard}`}>
          
          <div className={styles.header}>
            <div className={styles.avatar}>
              <i className="fas fa-user-shield" />
            </div>
            <h1 className={styles.title}>Welcome back, {user.userName}!</h1>
            <p className={styles.subtitle}>Your command center is online and secured.</p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <i className="fas fa-shield-alt" />
              <h3>Active</h3>
              <p>Protection Status</p>
            </div>
            <div className={styles.statCard}>
              <i className="fas fa-bug" />
              <h3>0</h3>
              <p>Threats Detected</p>
            </div>
            <div className={styles.statCard}>
              <i className="fas fa-clock" />
              <h3>24/7</h3>
              <p>Monitoring Engine</p>
            </div>
          </div>

          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <div className={`${styles.dot} ${styles.red}`} />
              <div className={`${styles.dot} ${styles.yellow}`} />
              <div className={`${styles.dot} ${styles.green}`} />
            </div>
            <p><span>user@{user.userName}:~$</span> systemctl status protecsure-engine</p>
            <p>● protecsure-engine.service - Advanced Behavioral Heuristic Engine</p>
            <p>   Loaded: loaded (/etc/systemd/system/protecsure.service; enabled)</p>
            <p>   Active: <strong style={{color: '#55ff77'}}>active (running)</strong> since system boot</p>
            <p>   Status: "All neural nodes functioning optimally."</p>
          </div>

          <div className={styles.accountSettingsGrid}>
            
            <div className={`glass-panel ${styles.settingsCard}`}>
              <div className={styles.cardHeader}>
                <i className="fas fa-id-badge" />
                <h2>Account Details</h2>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.inputGroup}>
                  <label>Username</label>
                  <input type="text" value={user.userName} disabled />
                </div>
                <div className={styles.inputGroup}>
                  <label>Registered Email</label>
                  <input type="email" value="Hidden for Security" disabled />
                </div>
              </div>
            </div>

            <div className={`glass-panel ${styles.settingsCard}`}>
              <div className={styles.cardHeader}>
                <i className="fas fa-crown" />
                <h2>Subscription</h2>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.planBadge}>
                  PROTECSURE BASIC
                </div>
                <p className={styles.planDesc}>You are currently using the free tier.</p>
                <button className={styles.upgradeBtn}>UPGRADE TO PREMIUM</button>
              </div>
            </div>

            <div className={`glass-panel ${styles.settingsCard} ${styles.fullWidth}`}>
              <div className={styles.cardHeader}>
                <i className="fas fa-key" />
                <h2>Security Settings</h2>
              </div>
              <div className={styles.cardBody}>
                <form className={styles.passwordForm} onSubmit={(e) => { e.preventDefault(); alert('Password change mockup executed.'); }}>
                  <div className={styles.inputGroup}>
                    <label>Current Password</label>
                    <input type="password" placeholder="••••••••" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>New Password</label>
                    <input type="password" placeholder="••••••••" required />
                  </div>
                  <button type="submit" className={styles.saveBtn}>UPDATE CREDENTIALS</button>
                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}
