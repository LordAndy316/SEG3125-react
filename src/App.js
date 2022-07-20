import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Exhibit from './pages/Exibit';
import Donate from './pages/Donate';
import About from './pages/About';
import News from './pages/News';
import Navbar from './component/navbar';
import Explore from './pages/Explore';
import Virtual from './pages/Virtual';
function App() {
  return (

      <Router>
        <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/exhibit1' element={<Exhibit/>} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/virtual' element={<Virtual/>} />
          
      </Routes>
      </Router>
  );
}

export default App;
