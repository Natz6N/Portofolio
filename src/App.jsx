import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import Loading from './Components/Loading'
import './App.css'

function App() {
  
  return (
    <>
      <Router>
        {/* <Loading /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
  </>
  )
}

export default App
