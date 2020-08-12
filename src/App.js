import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/home';
// import About from './components/about';
// import Projects from './components/projects';
// import Blog from './components/blog';
// import Timeline from './components/timeline';

const App = () => (
  <div id="portfolio-page">
    <div id="container-wrap">
      <Sidebar />
      <div id="portfolio-main">
        <Home />
        {/* <About />
            <Projects />
            <Blog />
            <Timeline /> */}
      </div>
    </div>
  </div>
);

export default App;
