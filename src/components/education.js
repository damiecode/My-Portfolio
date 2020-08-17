/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Education = () => (
  <section className="colorlib-education" data-section="education">
    <div className="colorlib-narrow-content">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span className="heading-meta">Education</span>
          <h2 className="colorlib-heading animate-box">Education</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div className="fancy-collapse-panel">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Bachelor of Technology - OBAFEMI AWOLOWO UNIVERSITY
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          - Became a member and volunteer of Developer students club by Google.
                          - Participated in programs and competitions
                          from Andela learning community.
                          - Worked on group projects with my classmates
                          during our students' workshop experience.
                          {' '}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <li>
                            Learned the basics of Computer Science,
                            Engineering and Economics.
                          </li>
                          <li>
                            Majored in Computer Science and offered courses like
                            Introduction to computer science, OOP in Java, Principle of compilers,
                            Software engineering, Human-computer interaction,
                            Artificial intelligence and so on.
                          </li>
                          <li>
                            Minored in Economics and offered courses like Introduction to Economics,
                            Micro and Macro Economics, Development Economics,
                            Organizational behaviour and so on.
                          </li>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Software Engineering - MICROVERSE
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="panel-body">
                    <p>
                      1300+ hours of
                      {' '}
                      <strong>programming</strong>
                      . Real-life projects created with Ruby on Rails,
                      React/Redux, HTML/CSS through remote pair programming
                      with people from all over the world.
                    </p>
                    <ul>
                      <li>
                        Learned the core fundamentals of Full stack web development:
                        HTML/CSS, Ruby, Ruby On Rails, React
                      </li>
                      <li>Learned Unit Test & best coding practices (i.e. Git flow, linting).</li>
                      <li>Learned Algorithms and Data structures in JavaScript & Ruby</li>
                      <li>
                        Completed 1600+ development hours pair-programming
                        with students around the world
                      </li>
                      <li>Built 50 mini to complex full stack application</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
