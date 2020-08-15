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
                  <span>Website</span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-share3" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" />
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
            <div className="project" style={{ backgroundImage: 'url(images/img-2.png)' }}>
              <div className="desc">
                <div className="con">
                  <h3><a href="work.html">Weather App</a></h3>
                  <span>Website</span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-share3" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" />
                        {' '}
                        49
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
                  <span>Illustration</span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-share3" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" />
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
                  <h3><a href="work.html">Work 04</a></h3>
                  <span>Application</span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-share3" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" />
                        {' '}
                        49
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
                  <h3><a href="work.html">Work 05</a></h3>
                  <span>Graphic, Logo</span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-share3" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" />
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
                  <h3><a href="work.html">Work 06</a></h3>
                  <span>Web Design</span>
                  <p className="icon">
                    <span><a href="#"><i className="icon-share3" /></a></span>
                    <span>
                      <a href="#">
                        <i className="icon-eye" />
                        {' '}
                        100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart" />
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
        <div className="row">
          <div className="col-md-12 animate-box">
            <p>
              <a href="#" className="btn btn-primary btn-lg btn-load-more">
                Load more
                <i className="icon-reload" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
