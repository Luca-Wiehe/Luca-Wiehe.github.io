import './App.css';
import React, { useEffect } from 'react';
import Navbar from './Views/Header/Navbar';
import Work from './Views/Body/Work';
import Education from './Views/Body/Education';
import Projects from './Views/Body/Projects';
import Awards from './Views/Body/Awards';
import AboutMe from './Views/Body/AboutMe';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on route change
  }, [pathname]);
}


function App() {
  return (
    <Router>
      <div>
        <div className="app">
          <div><Navbar /></div>
          <div>
            <ScrollToTop />
            <Routes>
              <Route path="/" exact element={<AboutMe />} />
              <Route path="/education" exact element={<Education />} />
              <Route path="/work" exact element={<Work />} />
              <Route path="/projects" exact element={<Projects />} />
              <Route path="/awards" exact element={<Awards />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
