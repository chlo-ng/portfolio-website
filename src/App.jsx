import './styles.css'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

// pages + components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'

function App() {

  return (
    <Router>
     <style>
        @import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Karla:ital,wght@0,200..800;1,200..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
