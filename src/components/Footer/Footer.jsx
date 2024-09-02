import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* footer area start */}
      <footer>
        <div class="bd-footer__section theme-bg-2 pt-120">
          <div class="container">
            <div class="bd-footer__main pb-50">
              <div class="row">
                <div class="col-lg-4">
                  <div class="bd-footer-widget footer-col-1">
                    <div class="bd-footer-widget__title">
                      <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </a>
                    </div>
                    <div class="bd-footer-widget__content">
                      <p>
                        Lorem ipsum dolor Lorem ipsum dolor sit tur adipisicing
                        elit, sed do eiusmod tempor iut labore et dolore magna
                        aliqua.
                      </p>
                      <div class="bd-footer-widget__form">
                        <form>
                          <input type="email" placeholder="Your email here" />
                          <button>Subscribe</button>
                        </form>
                      </div>
                      <div class="bd-footer-widget__social">
                        <span>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i class="fab fa-youtube"></i>
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            <i class="fab fa-linkedin"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="bd-footer-widget footer-col-2">
                    <h3 class="bd-footer-widget__title">Quick Links</h3>
                    <div class="bd-footer-widget__content">
                      <div class="bd-footer-widget__menu">
                        <ul>
                          <li>
                            <a href="#">About us</a>
                          </li>
                          <li>
                            <a href="#">Service</a>
                          </li>
                          <li>
                            <a href="#">Customer Care</a>
                          </li>
                          <li>
                            <a href="#">Pricing Plans</a>
                          </li>
                          <li>
                            <a href="#">Team Members</a>
                          </li>
                          <li>
                            <a href="#">Career</a>
                          </li>
                          <li>
                            <a href="#">Advertisements</a>
                          </li>
                          <li>
                            <a href="#">Return Policy</a>
                          </li>
                          <li>
                            <a href="#">Affiliation</a>
                          </li>
                          <li>
                            <a href="#">Terms of Use</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="bd-footer-widget footer-col-3">
                    <h3 class="bd-footer-widget__title">Recent Posts</h3>
                    <div class="bd-footer-widget__content">
                      <div class="bd-footer-widget__blog d-flex align-items-center mb-30">
                        <div class="bd-footer-widget__blog-thum mr-30">
                          <img
                            src="assets/img/footer/footer-blog-1.jpg"
                            alt="thub"
                          />
                        </div>
                        <div class="bd-footer-widget__blog-content">
                          <h3 class="bd-footer-widget__blog-title">
                            <a href="blog-details.html">
                              {" "}
                              Lorem ipsum dolor sit amet conse
                            </a>
                          </h3>
                          <span>Aug 28, 2017</span>
                        </div>
                      </div>
                      <div class="bd-footer-widget__blog d-flex align-items-center mb-30">
                        <div class="bd-footer-widget__blog-thum  mr-30">
                          <img
                            src="assets/img/footer/footer-blog-2.jpg"
                            alt="thub"
                          />
                        </div>
                        <div class="bd-footer-widget__blog-content">
                          <h3 class="bd-footer-widget__blog-title">
                            <a href="blog-details.html">
                              {" "}
                              onod inova binai je tumi ama rsathe emon
                            </a>
                          </h3>
                          <span>Aug 28, 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bd-footer__copyright bd-border-top pt-40 pb-40">
              <span>
                All rights reserved © 2022 <a href="index.html">eThemeStudio</a>{" "}
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </div>
  );
}

export default Footer