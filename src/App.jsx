import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import { ThemeProvider } from './theme-context';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        {/* routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog />}/>
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
