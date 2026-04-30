import styles from './Privacy.module.css'

export default function Privacy() {
  const policies = [
    {
      title: 'Information We Collect',
      icon: 'fa-database',
      points: [
        'Information you voluntarily provide — name, email, messages — when submitting forms or contacting us.',
        'Automatically collected data — IP address, browser type, device information, and usage patterns via cookies.',
        'We DO NOT collect biometric data, personal files, or browsing history outside of our platform.'
      ]
    },
    {
      title: 'How We Use Your Data',
      icon: 'fa-cogs',
      points: [
        'Provide and maintain the ProtecSure platform and services.',
        'Improve, personalize, and expand our website functionality.',
        'Understand and analyze how you use our website.',
        'Communicate with you for customer service, updates, and marketing (you may opt-out anytime).'
      ]
    },
    {
      title: 'Data Security Protocols',
      icon: 'fa-lock',
      points: [
        'All data is encrypted in transit using industry-standard TLS 1.3.',
        'Passwords are cryptographically hashed using BCrypt.',
        'We utilize enterprise-grade firewalls and isolated database architecture to prevent unauthorized access.'
      ]
    },
    {
      title: 'Your Privacy Rights',
      icon: 'fa-user-shield',
      points: [
        'The right to access – You can request copies of your personal data.',
        'The right to rectification – You can request that we correct inaccurate information.',
        'The right to erasure – You can request that we erase your personal data completely.',
        'If you make a request, we have one month to respond to you. Please contact support to exercise these rights.'
      ]
    }
  ]

  return (
    <main className={styles.main}>
      <div className="mesh-bg" />
      <div className="noise" />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={`gradient-text ${styles.title}`}>Privacy & Terms</h1>
          <p className={styles.subtitle}>
            ProtecSure Ltd. operates ProtecSure.com. We are committed to protecting your personal data and being completely transparent about how we use it.
          </p>
        </div>

        <div className={styles.policyGrid}>
          {policies.map((policy, index) => (
            <div key={index} className={`glass-panel ${styles.policyCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <i className={`fas ${policy.icon}`} />
                </div>
                <h2>{policy.title}</h2>
              </div>
              <div className={styles.cardBody}>
                <ul>
                  {policy.points.map((point, ptIndex) => (
                    <li key={ptIndex}>
                      <i className="fas fa-check-circle" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.lastUpdated}>
          LAST UPDATED: 2026-04-23 | SECURE HASH: 8f9b2a7c...
        </div>
      </div>
    </main>
  )
}
