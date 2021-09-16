import React from "react";
import "./Footer.css";
import { GiSelfLove } from "react-icons/gi";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <Router>
      <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">
                    Developer<span></span>
                  </h5>
                  <p>
                    Made with{" "}
                    <span>
                      <GiSelfLove color="red" />
                    </span>{" "}
                    by{" "}
                    <span>
                      <Link to="https://rahulsaha-portfolio.herokuapp.com">
                        Rahul Saha
                      </Link>
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Idea <span></span>
                  </h5>
                  <p>Github</p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Contact Us<span></span>
                  </h5>

                  <p>
                    <a href="mailto:info@domain.com" title="glorythemes">
                      forrahul7@gmail.com
                    </a>
                  </p>
                  <ul className="social-footer2">
                    <li className="">
                      <Link to="https://github.com/rahulsaha7">
                        <FaGithubSquare />
                      </Link>
                    </li>
                    <li className="">
                      <Link to="https://www.linkedin.com/in/rahul-saha7">
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li className="">
                      <Link to="https://twitter.com/Rahul_Saha_7?s=09">
                        <FaTwitter />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>version 1.0.1</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
};
