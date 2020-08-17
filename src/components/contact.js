/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <section className="portfolio-contact" data-section="contact">
        <div className="portfolio-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Get in Touch</span>
              <h2 className="portfolio-heading">Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="portfolio-feature portfolio-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="portfolio-icon">
                  <i className="icon-globe-outline" />
                </div>
                <div className="portfolio-text">
                  <p><a href="#">codenlyn@gmail.com</a></p>
                </div>
              </div>
              <div className="portfolio-feature portfolio-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="portfolio-icon">
                  <i className="icon-map" />
                </div>
                <div className="portfolio-text">
                  <p>Lagos, Nigeria</p>
                </div>
              </div>

              <div className="portfolio-feature portfolio-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="portfolio-icon">
                  <i className="icon-phone" />
                </div>
                <div className="portfolio-text">
                  <p><a href="tel://">+2349035185172</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-md-push-1">
              <div className="row">
                <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                  <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/xgenqdrd"
                    method="POST"
                  >
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message" />
                    </div>
                    <div className="form-group">
                      {status === 'SUCCESS' ? <p>Thanks!</p> : <input type="submit" className="btn btn-primary btn-send-message" value="Send Message" />}
                      {status === 'ERROR' && <p>Ooops! There was an error.</p>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
