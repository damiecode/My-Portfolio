/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const About = () => (
  <div>
    <section className="portfolio-about" data-section="about">
      <div className="portfolio-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Us</span>
                  <h2 className="portfolio-heading">Who Am I?</h2>
                  <p>
                    I'm a professional, energetic, and passionate full-stack developer
                    who loves using technology to solve real-world problems.
                    I'm constantly using web development to innovate
                    and enhance my technical knowledge. I love to code,
                    and my critical thinking skills
                    and learning mentality have helped me improve even further
                  </p>
                  <p>
                    In the last eight months, I have built more than 30 projects
                    (equating to a cumulative 1300 hours of work)
                    and have learned what it is like to use Git workflow at the industrial level.
                    Working remotely through pair programming has also significantly improved
                    my communication and organization skills
                    and has also prepared me to work with cross-cultural teams.
                    {' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="portfolio-about">
      <div className="portfolio-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">What I do?</span>
            <h2 className="portfolio-heading">Here are some of my expertise</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          <div className="col-md-4 text-center animate-box">
            <div className="services color-1">
              <span className="icon">
                <i className="icon-bulb" />
              </span>
              <div className="desc">
                <h3>Web Development </h3>
                <p>
                  I have experience building websites using
                  JavaScript,React,HTML,CSS, Ruby and Rails.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-3">
              <span className="icon">
                <i className="icon-phone3" />
              </span>
              <div className="desc">
                <h3>Data Structures & Algorithms</h3>
                <p>
                  As coming from the CS background,
                  I have good grasp over fundamental concepts of DSA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
