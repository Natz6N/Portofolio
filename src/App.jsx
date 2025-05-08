import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import LPage from './Pages/l'
import Webpages from './Pages/test'
import './custom.css'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/l" element={<LPage />} />
          <Route path="/web" element={<Webpages />} />
        </Routes>
        <Footer />
      </Router>
  </>
  )
}

export default App
