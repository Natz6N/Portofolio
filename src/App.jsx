import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
// import About from './Pages/About'
import FAQ from './Pages/FAQ'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
  </>
  )
}

export default App;
