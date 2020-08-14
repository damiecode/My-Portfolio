/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Sidebar = () => (
  <div>
    <div>
      <nav href="#navbar" className="js-portfolio-nav-toggle portfolio-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
      <aside id="portfolio-aside" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
          <h1 id="portfolio-logo"><a href="index.html">Damilola Ale</a></h1>
          <span className="email">
            <i className="icon-mail" />
            {' '}
            codenlyn@gmail.com
          </span>
        </div>
        <nav id="portfolio-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
              <li><a href="#about" data-nav-section="about">About</a></li>
              <li><a href="#projects" data-nav-section="projects">Projects</a></li>
              <li><a href="#education" data-nav-section="education">Education</a></li>
              <li><a href="#contact" data-nav-section="contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <nav id="portfolio-main-menu">
          <ul>
            <li><a href="https://twitter.com/iamlildamski" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
            <li><a href="https://www.instagram.com/dam_eva/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
            <li><a href="https://www.linkedin.com/in/damiecode/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
            <li><a href="https://github.com/damiecodes" target="_blank" rel="noopener noreferrer"><i className="icon-github" /></a></li>
            <li><a href="https://medium.com/@codenlyn" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2" /></a></li>
          </ul>
        </nav>
      </aside>
    </div>
  </div>
);

export default Sidebar;
