import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const STATS = [
  { label: 'Global Users', value: '10M+', icon: 'fas fa-globe' },
  { label: 'Protection', value: '99.9%', icon: 'fas fa-shield-check' },
  { label: 'Support', value: '24/7', icon: 'fas fa-headset' },
]

function EliteScanner() {
  const [scanning, setScanning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState(['[SYSTEM]: PROTECSURE v7.4.1 INITIALIZED'])

  const runScan = () => {
    if (scanning) return
    setScanning(true)
    setProgress(0)
    setLogs(['[SYSTEM]: STARTING HEURISTIC ENGINE...'])
    
    let p = 0
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 5) + 1
      if (p >= 100) {
        p = 100
        clearInterval(interval)
        setScanning(false)
        setLogs(prev => [...prev, '[SUCCESS]: SYSTEM INTEGRITY VERIFIED', '[STATUS]: PROTECTED'])
      } else {
        if (p > 20 && p < 25) setLogs(prev => [...prev, '[INFO]: SCANNING ROOT SEGMENTS...'])
        if (p > 50 && p < 55) setLogs(prev => [...prev, '[INFO]: ANALYZING NETWORK PACKETS...'])
        if (p > 80 && p < 85) setLogs(prev => [...prev, '[INFO]: CHECKING IDENTITY TOKENS...'])
      }
      setProgress(p)
    }, 80)
  }

  return (
    <div className={styles.scannerWrapper}>
      <div className={`glass-panel border-beam ${styles.scannerCard}`}>
        <div className={styles.scannerHeader}>
          <div className={styles.dots}><span/><span/><span/></div>
          <div className={styles.scannerTitle}>Advanced Threat Terminal</div>
        </div>
        <div className={styles.scannerBody}>
          <div className={styles.terminal}>
            {logs.map((log, i) => <div key={i} className={styles.logLine}>{log}</div>)}
            {scanning && <div className={styles.cursor} />}
          </div>
          <div className={styles.scanControls}>
            <div className={styles.progressTrack}>
              <div className={styles.progressBar} style={{ width: `${progress}%` }} />
            </div>
            <button className={styles.scanBtn} onClick={runScan} disabled={scanning}>
              {scanning ? 'ENGINE ACTIVE...' : 'INITIALIZE SCAN'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="mesh-bg" />
      <div className="grid-overlay" />
      <div className="noise" />

      {/* ── ELITE HERO ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} /> Advanced Defense
              </div>
              <h1 className={`gradient-text ${styles.title}`}>
                The only security <br/> you'll ever need.
              </h1>
              <p className={styles.subtitle}>
                ProtecSure leverages neural-active shielding to preemptively stop threats before 
                they reach your digital doorstep. Artistic design meets uncompromising safety.
              </p>
              <div className={styles.actions}>
                <Link to="/plans" className={styles.primaryBtn}>Get Started</Link>
                <Link to="/download" className={styles.secondaryBtn}>Explore Extensions</Link>
              </div>
              <div className={styles.stats}>
                {STATS.map((s, i) => (
                  <div key={i} className={styles.statItem}>
                    <div className={styles.statVal}>{s.value}</div>
                    <div className={styles.statLab}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.mockupContainer}>
                <img src="/images/mockup.png" alt="Mockup" className={styles.mockup} />
                <div className={styles.mockupGlow} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCANNER SECTION ── */}
      <section className={styles.scannerSection}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Real-time system integrity.</h2>
              <p className={styles.sectionSub}>Run our proprietary heuristic scanner directly in your browser. No installation required for immediate peace of mind.</p>
              <ul className={styles.checkList}>
                <li><i className="fas fa-check-circle" /> Behavioral Heuristic Analysis</li>
                <li><i className="fas fa-check-circle" /> Memory Shielding v2</li>
                <li><i className="fas fa-check-circle" /> Phishing Pattern Recognition</li>
              </ul>
            </div>
            <EliteScanner />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <div className={styles.brand}>Protec<span>Sure</span></div>
              <p>© 2025 Professional Security Suite.</p>
            </div>
            <div className={styles.footerLinks}>
              <Link to="/plans">Pricing</Link>
              <Link to="/download">Download</Link>
              <Link to="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
