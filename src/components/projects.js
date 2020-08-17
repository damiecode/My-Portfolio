/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Projects = () => (
  <div>
    <section className="portfolio-work" data-section="projects">
      <div className="portfolio-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">My Work</span>
            <h2 className="portfolio-heading animate-box">Recent Projects</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
            <div className="project" style={{ backgroundImage: 'url(images/img-1.png)' }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="work.html">Resturant Page</a></h3>
                  <span>A Restaurant page which is built using only Javascript.</span>
                  <p className="icon">
                    <span><a href="https://github.com/damiecode/Restaurant-Page"><i className="icon-link" /></a></span>
                    <span>
                      <a href="https://rawcdn.githack.com/damiecode/Restaurant-Page/77bf25f144f23c3e09cfadf76c6dd9d7c8c9059f/dist/index.html">
                        <i className="icon-eye" />
                        {' '}
                        10
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-star" />
                        {' '}
                        5
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
            <div className="project" style={{ backgroundImage: 'url(images/img-2.png)' }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="work.html">Weather App</a></h3>
                  <span>
                    A weather application that shows weather info
                    on queried location(s) via API from openweathermap.
                  </span>
                  <p className="icon">
                    <span><a href="https://rawcdn.githack.com/damiecode/Weather-App/feature/weatherApp/dist/index.html"><i className="icon-link" /></a></span>
                    <span>
                      <a href="https://github.com/damiecode/Weather-App">
                        <i className="icon-eye" />
                        {' '}
                        10
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-star" />
                        {' '}
                        5
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
            <div className="project" style={{ backgroundImage: 'url(images/img-3.png)' }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="work.html">The Next Web</a></h3>
                  <span>Built with HTML</span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-link" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-star" />
                        {' '}
                        49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
            <div className="project" style={{ backgroundImage: 'url(images/img-4.png)' }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="work.html">Calculator App</a></h3>
                  <span>
                    A simple calculator app built with React.
                    It uses Stateful component which are defined using a class.
                  </span>
                  <p className="icon">
                    <span><a href="https://github.com/damiecode/maths-magicians-app"><i className="icon-link" /></a></span>
                    <span>
                      <a href="https://maths-magicians-app.herokuapp.com">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-star" />
                        {' '}
                        5
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
            <div className="project" style={{ backgroundImage: 'url(images/img-5.png)' }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="work.html">Quest For Treasure</a></h3>
                  <span> A simple game built with JavaScript.</span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-link" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-star" />
                        {' '}
                        49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
            <div className="project" style={{ backgroundImage: 'url(images/img-6.png)' }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="work.html">Rails Facebook</a></h3>
                  <span>
                    A Facebook-like social network application.
                    Features – users, profiles, “friending”, posts, newsfeed, and likes.
                  </span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-link" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-star" />
                        {' '}
                        49
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
