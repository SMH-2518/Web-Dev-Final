import { useState } from 'react'
import styles from './Plans.module.css'

const PLANS = [
  {
    name: 'Core',
    price: '₹149',
    desc: 'The essential security layer.',
    features: ['Real-time Scanning', 'Web Protection', 'Ad-blocking', 'Email Support'],
  },
  {
    name: 'Elite',
    price: '₹229',
    desc: 'The standard for advanced users.',
    features: ['All Core features', 'Phishing Shield', 'ID Monitoring', '24/7 Support'],
    popular: true,
  },
  {
    name: 'Quantum',
    price: '₹349',
    desc: 'Uncompromising total security.',
    features: ['All Elite features', 'Cloud Encryption', 'Network Firewall', 'Private VPN'],
  },
]

export default function Plans() {
  const [billing, setBilling] = useState('monthly')

  return (
    <main className={styles.main}>
      <div className="mesh-bg" />
      <div className="noise" />
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.badge}>Select Tier</div>
          <h1 className="gradient-text">Elite Protection.</h1>
          <p className={styles.sub}>Choose your level of neural shielding. Cancel or upgrade at any time.</p>
          
          <div className={styles.billing}>
            <button 
              className={billing === 'monthly' ? styles.active : ''} 
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button 
              className={billing === 'yearly' ? styles.active : ''} 
              onClick={() => setBilling('yearly')}
            >
              Annual <span className={styles.save}>-25%</span>
            </button>
          </div>
        </section>

        <div className={styles.grid}>
          {PLANS.map((p, i) => (
            <div key={i} className={`glass-panel ${p.popular ? 'border-beam' : ''} ${styles.card}`}>
              {p.popular && <div className={styles.popBadge}>Most Popular</div>}
              <h2>{p.name}</h2>
              <div className={styles.price}>
                {p.price}<span>/mo</span>
              </div>
              <p className={styles.cardSub}>{p.desc}</p>
              <ul className={styles.featList}>
                {p.features.map(f => (
                  <li key={f}><i className="fas fa-check" /> {f}</li>
                ))}
              </ul>
              <button className={`${styles.cta} ${p.popular ? styles.ctaPop : ''}`}>Select {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
