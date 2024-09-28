// src/App.js
import Logo from './components/Logo';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>


        <nav>
          <Logo />
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
