import React from 'react';

const Home = () => (
  <div>
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <li style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1>
                        Hi!
                        <br />
                        I'm Damilola
                      </h1>
                      <p>
                        <a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1MhSUx4YpkqyRA6Xb2-5rzBhfKquRTbcTE_s49GrszWc/edit?usp=sharing">
                          Download CV
                          <em className="icon-download4" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>
            <div className="overlay" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>
                        I am
                        <br />
                        a FullStack Software Engineer
                      </h1>
                      <p>
                        <a className="btn btn-primary btn-learn" href="#">
                          View Portfolio
                          <em className="icon-briefcase3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default Home;
