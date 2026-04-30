import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Auth.module.css'

export default function Auth() {
  const { login } = useAuth()
  // 'login', 'register', or 'verify'
  const [view, setView] = useState('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  // Form states
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true); setError(''); setSuccess('')
    try {
      const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, email, password })
      })
      const text = await res.text()
      if (res.ok) {
        setSuccess('Registration successful! Please check your email for the verification code.')
        setTimeout(() => { setView('verify'); setSuccess('') }, 2000)
      } else {
        setError(text)
      }
    } catch (err) {
      setError('Network error. Is the backend running?')
    }
    setLoading(false)
  }

  const handleVerify = async (e) => {
    e.preventDefault()
    setLoading(true); setError(''); setSuccess('')
    try {
      const res = await fetch('http://localhost:8080/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code })
      })
      const text = await res.text()
      if (res.ok) {
        setSuccess('Email verified successfully! You can now log in.')
        setTimeout(() => { setView('login'); setSuccess('') }, 500)
      } else {
        setError(text)
      }
    } catch (err) {
      setError('Network error. Is the backend running?')
    }
    setLoading(false)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true); setError(''); setSuccess('')
    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (res.ok) {
        const data = await res.json()
        login(data.token, data.userName)
        setSuccess('Login successful! Connecting to Dashboard...')
        setTimeout(() => navigate('/profile'), 1000)
      } else {
        const text = await res.text()
        setError(text || 'Invalid credentials')
      }
    } catch (err) {
      setError('Network error. Is the backend running?')
    }
    setLoading(false)
  }

  return (
    <main className={styles.main}>
      <div className="mesh-bg" />
      <div className="noise" />
      <div className={styles.container}>
        <div className={`glass-panel border-beam ${styles.authCard}`}>
          
          <div className={styles.header}>
            <img src="/images/logo.png" alt="Logo" className={styles.logo} />
            <h2>
              {view === 'login' && 'Access System'}
              {view === 'register' && 'Initialize Account'}
              {view === 'verify' && 'Verify Security Key'}
            </h2>
          </div>

          {error && <div className={styles.errorAlert}><i className="fas fa-exclamation-triangle" /> {error}</div>}
          {success && <div className={styles.successAlert}><i className="fas fa-check-circle" /> {success}</div>}

          {view === 'login' && (
            <form onSubmit={handleLogin} className={styles.form}>
              <div className={styles.inputGroup}>
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className={styles.inputGroup}>
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'AUTHENTICATING...' : 'LOG IN'}
              </button>
              <p className={styles.switch}>New to ProtecSure? <span onClick={() => {setView('register'); setError('')}}>Create Account</span></p>
            </form>
          )}

          {view === 'register' && (
            <form onSubmit={handleRegister} className={styles.form}>
              <div className={styles.inputGroup}>
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)} required />
              </div>
              <div className={styles.inputGroup}>
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className={styles.inputGroup}>
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password (Min 8 Chars)" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} />
              </div>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'PROCESSING...' : 'SECURE REGISTRATION'}
              </button>
              <p className={styles.switch}>Already protected? <span onClick={() => {setView('login'); setError('')}}>Log In</span></p>
            </form>
          )}

          {view === 'verify' && (
            <form onSubmit={handleVerify} className={styles.form}>
              <p className={styles.desc}>We've sent a 6-digit cryptographic code to <strong>{email}</strong>.</p>
              <div className={styles.inputGroup}>
                <i className="fas fa-key" />
                <input type="text" placeholder="000000" value={code} onChange={e => setCode(e.target.value)} required maxLength={6} className={styles.codeInput} />
              </div>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'VERIFYING...' : 'VALIDATE TOKEN'}
              </button>
            </form>
          )}

        </div>
      </div>
    </main>
  )
}
