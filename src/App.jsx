import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Plans from './pages/Plans'
import Download from './pages/Download'
import Privacy from './pages/Privacy'
import Auth from './pages/Auth'
import Profile from './pages/Profile'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/download" element={<Download />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}
