import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';

function App() {

  const user = {
    name : "Satwik Raj",
    email : "satwikrajv@gmail.com"
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          user = {user}
        />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/help" element={<Help/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
