import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import {Dashboard} from './pages/Dashboard'
import './App.css'
import NavBar from './sections/NavBar'
import { Button } from "@/components/ui/button";
function App() {

  
  return (
    <BrowserRouter>
    
    <nav> 
      <div className='logo text-white p-3'>

      To Do 
      </div>
     

      
    </nav>
    <div className='page'>
     
    <Routes>

         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </div>
    <NavBar />
    </BrowserRouter>
  )
}

export default App
