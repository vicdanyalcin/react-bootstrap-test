import React from "react";
import Project from "./assets/components/Project";
import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#signup">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              A free, responsive, one page Bootstrap theme created by Start
              Bootstrap.
            </h2>
            <a href="#about" className="btn btn-primary js-scroll-trigger">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">Built with Bootstrap 4</h2>
              <p className="text-white-50">
                Grayscale is a free Bootstrap theme created by Start Bootstrap.
                It can be yours right now, simply download the template on
                <a href="http://startbootstrap.com/template-overviews/grayscale/">
                  the preview page
                </a>
                . The theme is open source, and you can use it for any purpose,
                personal or commercial.
              </p>
            </div>
          </div>
          <img src="img/ipad.png" className="img-fluid" alt="" />
        </div>
      </section>

      <Project></Project>

      <section id="signup" className="signup-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>

              <form className="form-inline d-flex">
                <input
                  type="email"
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  placeholder="Enter email address..."
                />
                <button type="submit" className="btn btn-primary mx-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    4923 Market Street, Orlando FL
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="./">hello@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>

          <div className="social d-flex justify-content-center">
            <a href="./" className="mx-2">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="./" className="mx-2">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="./" className="mx-2">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black small text-center text-white-50">
        <div className="container">Copyright &copy; Your Website 2019</div>
      </footer>
    </div>
  );
}

export default App;
