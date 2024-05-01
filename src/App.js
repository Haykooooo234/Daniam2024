import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Partners from './Components/Partners/Partners';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
         <Router>
      <Navbar />
      <main className='main-content'>
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/services' element={<Services />} />
          < Route path='/partners' element={<Partners />} />
          < Route path='/team' element={<Team />} />
          < Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
