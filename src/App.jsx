import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import Download from './pages/Download'
import HowToUse from './pages/HowToUse'
import AboutUs from './pages/AboutUs'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App
