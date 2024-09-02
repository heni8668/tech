import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo/image.png'

const Header = () => {
  return (
    <div>
      {/* header area start */}
      <header>
        <div className="bd-header__section bd-header__transparent">
          <div className="bd-header__main" id="header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-6 col-6">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} height={100} width={140} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-10 col-md-6 col-6">
                  <div className="d-flex justify-content-end">
                    <div className="main-menu ">
                      <nav id="mobile-menu">
                        <ul>
                          <li
                          // className="has-dropdown"
                          >
                            <Link to="/">Home</Link>
                            {/* <ul className="submenu">
                              <li>
                                <a href="index.html">Home Style 1</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Style 2</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home Style 3</a>
                              </li>
                            </ul> */}
                          </li>
                          <li>
                            <Link to="/academy">Ux academy</Link>
                          </li>
                          <li
                          // className="has-dropdown"
                          >
                            <Link to="/scholarship">scholarship</Link>
                            {/* <ul className="submenu">
                              <li>
                                <a href="portfolio.html">Projects V1</a>
                              </li>
                              <li>
                                <a href="portfolio-2.html">Projects V2</a>
                              </li>
                              <li>
                                <a href="portfolio-details.html">
                                  Projects Details V1
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-details-2.html">
                                  Projects Details V2{" "}
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-details-3.html">
                                  Projects Details V3{" "}
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-details-4.html">
                                  Projects Details V4{" "}
                                </a>
                              </li>
                            </ul> */}
                          </li>

                          <li
                          // className="has-dropdown"
                          >
                            <Link to="/outgoing-program">outgoing program</Link>
                            {/* <ul className="submenu">
                              <li>
                                <a href="services.html">services</a>
                              </li>
                              <li>
                                <a href="services-details.html">
                                  Services details
                                </a>
                              </li>
                            </ul> */}
                          </li>
                          <li
                          // className="has-dropdown"
                          >
                            <Link to="/blog">Blog</Link>
                            {/* <ul className="submenu">
                              <li>
                                <a href="blog.html">Blog V1</a>
                              </li>
                              <li>
                                <a href="blog-2.html">Blog V2</a>
                              </li>
                              <li>
                                <a href="blog-3.html">Blog V3</a>
                              </li>
                              <li>
                                <a href="blog-4.html">Blog V4</a>
                              </li>
                              <li>
                                <a href="blog-details.html">Blog Details</a>
                              </li>
                            </ul> */}
                          </li>
                          {/* <li>
                            <Link to="/contact">About us</Link>
                          </li> */}
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="bd-header__main-right d-flex justify-content-end align-items-center pl-30">
                      <div className="bd-header__search d-none d-md-block p-relative">
                        <div className="bd-header__search-wrapper">
                          <button className="bd-header__search-btn">
                            {/* <i className="fal fa-search"></i> */}
                          </button>
                          <button className="bd-header__search-btn-close">
                            <i className="fal fa-times"></i>
                          </button>
                        </div>
                        <div className="bd-header__search-form">
                          <form>
                            <input type="text" placeholder="Search Here" />
                            <button>
                              <i className="fal fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="bd-header__hamburger ml-50">
                        <button
                          type="button"
                          className="hamburger-btn offcanvas-open-btn"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header area end */}
    </div>
  );
};

export default Header;
