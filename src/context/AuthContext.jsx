import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Check if user is logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userName = localStorage.getItem('userName')
    if (token && userName) {
      setUser({ token, userName })
    }
  }, [])

  const login = (token, userName) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userName', userName)
    setUser({ token, userName })
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
