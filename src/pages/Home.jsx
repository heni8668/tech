import React from 'react'
import backgroundImage from '../images/sliderImage.jpeg'
// import Preloader from '../components/PreLoader/Preloader';

const Home = () => {
  return (
    <>
      {/* pre loader area start */}
      {/* <div className="bd-preloader">
        <div className="bd-preloader__center">
          <span>
            <img src="assets/img/logo/logo.png" alt="" />
          </span>
        </div>
      </div> */}
      {/* <Preloader /> */}
      {/* pre loader area end */}

      {/* back to top start */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* back to top end */}

      {/* back to top end */}

      {/* offcanvas area start */}
      <div className="offcanvas__area">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>
              <div className="offcanvas__close">
                <button className="offcanvas__close-btn offcanvas-close-btn">
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
            <div className="offcanvas__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </form>
            </div>
            <div className="mobile-menu fix mb-40"></div>

            <div className="offcanvas__map d-none d-lg-block mb-15">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"></iframe>
            </div>

            <div className="offcanvas__contact mt-30 mb-20">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                    >
                      12/A, Mirnada City Tower, NYC
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="mailto:support@gmail.com">088889797697</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="tel:+012-345-6789">support@mail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="offcanvas__social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
      {/* offcanvas area end */}

      <main>
        {/* slider area start */}
        <div className="bd-slider__section">
          <div className="bd-slider__active bd-slider__wrapper swiper-container">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-10">
                      <div className="bd-slider__content">
                        <span
                          className="bd-slider__subtitle"
                          data-animation="fadeInUp"
                          data-delay=".3s"
                        >
                          We are creative inc.
                        </span>
                        <h3
                          className="bd-slider__title"
                          data-animation="fadeInUp"
                          data-delay=".5s"
                        >
                          Clean Simple & Minimal
                        </h3>
                        <p data-animation="fadeInUp" data-delay=".7s">
                          Lorem ipsum dolor sit amet consmod tempor
                        </p>
                        <div
                          className="bd-slider__btn"
                          data-animation="fadeInUp"
                          data-delay=".9s"
                        >
                          <a href="about.html" className="bd-btn">
                            Read More{" "}
                            <span>
                              <i className="fa-regular fa-angle-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
                data-background="assets/img/slider/slider-4.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-10">
                      <div className="bd-slider__content">
                        <span
                          className="bd-slider__subtitle"
                          data-animation="fadeInUp"
                          data-delay=".3s"
                        >
                          We are creative inc.
                        </span>
                        <h3
                          className="bd-slider__title"
                          data-animation="fadeInUp"
                          data-delay=".5s"
                        >
                          Clean Simple & Minimal
                        </h3>
                        <p data-animation="fadeInUp" data-delay=".7s">
                          Lorem ipsum dolor sit amet consmod tempor
                        </p>
                        <div
                          className="bd-slider__btn"
                          data-animation="fadeInUp"
                          data-delay=".9s"
                        >
                          <a href="about.html" className="bd-btn">
                            Read More{" "}
                            <span>
                              <i className="fa-regular fa-angle-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider area end */}

        {/* services area start */}
        <div className="bd-services__area  pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-section__title-wrapper text-center mb-90 wow fadeInUp">
                  <span className="bd-section__subtitle mb-5">Creative Inc.</span>
                  <h3 className="bd-section__title bd-title-border">
                    You are welcome
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="bd-services-2__item text-center mb-30 wow fadeInUp">
                  <h3 className="bd-services-2__title">
                    <a href="services-details.html">Website Design</a>
                  </h3>
                  <div className="bd-services-2__icon text-center">
                    <i className="fa-thin fa-table-layout"></i>
                  </div>
                  <div className="bd-services-2__content">
                    <p>
                      orem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod Lorem ipsum dolor sit amet.{" "}
                    </p>

                    <div className="bd-services-2__item-btn">
                      <a href="services-details.html" className="link-btn-2">
                        Read More
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bd-services-2__item text-center mb-30 wow fadeInUp">
                  <h3 className="bd-services-2__title">
                    <a href="services-details.html">Development</a>
                  </h3>
                  <div className="bd-services-2__icon text-center">
                    <i className="fa-thin fa-code"></i>
                  </div>
                  <div className="bd-services-2__content">
                    <p>
                      orem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod Lorem ipsum dolor sit amet.{" "}
                    </p>

                    <div className="bd-services-2__item-btn">
                      <a href="services-details.html" className="link-btn-2">
                        Read More
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bd-services-2__item text-center mb-30 wow fadeInUp">
                  <h3 className="bd-services-2__title">
                    <a href="services-details.html">Graphic Design</a>
                  </h3>
                  <div className="bd-services-2__icon text-center">
                    <i className="fa-thin fa-pen-nib"></i>
                  </div>
                  <div className="bd-services-2__content">
                    <p>
                      orem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod Lorem ipsum dolor sit amet.{" "}
                    </p>

                    <div className="bd-services-2__item-btn">
                      <a href="services-details.html" className="link-btn-2">
                        Read More
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* services area end */}

        {/* about us section start  */}
        <div className="bd-about__section pt-120 pb-90 theme-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="bd-about__img w-img mr-70 mb-30 wow fadeInRight">
                  <img src="assets/img/about/about-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bd-about__text mb-30 wow fadeInLeft">
                  <div className="bd-section__title-wrapper">
                    <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                      Creative in Mind
                    </span>
                    <h3 className="bd-section__title bd-section__title-lg mb-25">
                      Our Creativity has <br /> no limit
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet conse cotur adip isicing elit
                      sed do eiu smod tempor incididunt labore arale jane kannar{" "}
                    </p>
                    <p className="mb-25">
                      rong Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation{" "}
                    </p>
                    <div className="bd-section__btn-wrapper">
                      <a href="about.html" className="bd-btn">
                        Read More{" "}
                        <span>
                          <i className="fa-regular fa-angle-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about us section end   */}

        {/* tp counter section start  */}
        <div className="bd-counter__section theme-bg-2 pt-120 pb-90">
          <div className="container">
            <div className="bd-counter__border">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="bd-counter__item d-flex align-items-center mb-30">
                    <div className="bd-counter__icon">
                      <span>
                        <i className="fa-thin fa-gear"></i>
                      </span>
                    </div>
                    <div className="bd-counter__info">
                      <span className="counter">256</span>
                      <h3 className="bd-counter__title">Plugins</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="bd-counter__item d-flex align-items-center mb-30">
                    <div className="bd-counter__icon">
                      <span>
                        <i className="fa-thin fa-user-tie-hair"></i>
                      </span>
                    </div>
                    <div className="bd-counter__info">
                      <span className="counter">1256</span>
                      <h3 className="bd-counter__title">Clients</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="bd-counter__item d-flex align-items-center mb-30">
                    <div className="bd-counter__icon">
                      <span>
                        <i className="fa-thin fa-layer-group"></i>
                      </span>
                    </div>
                    <div className="bd-counter__info">
                      <span className="counter">7653</span>
                      <h3 className="bd-counter__title">Projects</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="bd-counter__item d-flex align-items-center mb-30">
                    <div className="bd-counter__icon">
                      <span>
                        <i className="fa-thin fa-trophy"></i>
                      </span>
                    </div>
                    <div className="bd-counter__info">
                      <span className="counter">27</span>
                      <h3 className="bd-counter__title">Awards</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tp counter section end  */}

        {/* portfolio area start  */}
        <div className="bd-portfolio__section pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-section__title-wrapper text-center mb-120 wow fadeInUp">
                  <span className="bd-section__subtitle mb-5">Creative Inc.</span>
                  <h3 className="bd-section__title bd-title-border">
                    You are welcome
                  </h3>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5">
                <div className="bd-portfolio__img w-img mr-70 mb-60 wow fadeInUp">
                  <img src="assets/img/portfolio/portfolio-1.jpg" alt="image" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="bd-portfolio__text mb-60 wow fadeInUp">
                  <div className="bd-section__title-wrapper">
                    <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                      Creative Design
                    </span>
                    <h3 className="bd-section__title bd-section__title-lg mb-25">
                      Art direction to Dhaka Asian Highway
                    </h3>
                    <p className="mb-25">
                      Lorem ipsum dolor sit amet conse cotur adip isicing elit
                      sed do eiu smod tempor incididunt labore arale jane
                      kannaLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.{" "}
                    </p>
                    <div className="bd-section__btn-wrapper">
                      <a href="portfolio-details.html" className="link-btn-2">
                        View Projects
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="bd-portfolio__text mr-50 mb-60 wow fadeInUp">
                  <div className="bd-section__title-wrapper">
                    <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                      Business Planning
                    </span>
                    <h3 className="bd-section__title bd-section__title-lg mb-25">
                      Business planning & strategy for Rainy Design
                    </h3>
                    <p className="mb-25">
                      Lorem ipsum dolor sit amet conse cotur adip isicing elit
                      sed do eiu smod tempor incididunt labore arale jane
                      kannaLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.{" "}
                    </p>
                    <div className="bd-section__btn-wrapper">
                      <a href="portfolio-details.html" className="link-btn-2">
                        View Projects
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <div className="bd-portfolio__img w-img ml-50 mb-60 wow fadeInUp">
                  <img src="assets/img/portfolio/portfolio-2.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5">
                <div className="bd-portfolio__img w-img mr-70 mb-60 wow fadeInUp">
                  <img src="assets/img/portfolio/portfolio-1.jpg" alt="image" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="bd-portfolio__text mb-60">
                  <div className="bd-section__title-wrapper wow fadeInUp">
                    <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                      Ui Design
                    </span>
                    <h3 className="bd-section__title bd-section__title-lg mb-25">
                      Brand Identity & marketing for Storm & Rain
                    </h3>
                    <p className="mb-25">
                      Lorem ipsum dolor sit amet conse cotur adip isicing elit
                      sed do eiu smod tempor incididunt labore arale jane
                      kannaLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.{" "}
                    </p>
                    <div className="bd-section__btn-wrapper">
                      <a href="portfolio-details.html" className="link-btn-2">
                        View Projects
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="bd-section__btn-wrapper text-center mt-30 wow fadeInUp">
                  <a href="portfolio.html" className="link-btn-3">
                    All Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* portfolio area end  */}

        {/* cta area start  */}
        <div className="bd-cta__section primary-bg pt-60 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="bd-cta__info mb-30 wow fadeInUp">
                  <h3 className="bd-cta__title text-white">Lets start a project</h3>
                  <span>It will be fun. Lets gather aweosme experience </span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bd-section__btn-wrapper text-lg-end wow fadeInUp">
                  <a href="contact.html" className="bd-border-btn">
                    Contact us
                    <i className="fas fa-angle-right"></i>
                    <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cta area end  */}

        {/* bd testimonial start  */}
        <div className="bd-testimonial__area theme-bg pt-120 pb-120 ">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-section__title-wrapper text-center mb-90 wow fadeInUp">
                  <span className="bd-section__subtitle mb-5">Testimonial</span>
                  <h3 className="bd-section__title bd-title-border">
                    What people say
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-relative">
              <div className="swiper-container bd-testimonial-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="bd-testimonial__item wow fadeInLeft">
                      <div className="bd-testimonial__icon">
                        <span>
                          <i className="fa-thin fa-quote-right"></i>
                        </span>
                      </div>
                      <div className="bd-testimonial__review">
                        <p>
                          Lorem ipsum dolor sit amet, consec tetur adipisicing
                          elit, sed do eius mod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercita tion ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.{" "}
                        </p>
                      </div>
                      <div className="bd-testimonial__reviewer d-flex align-items-center justify-content-center">
                        <div className="bd-testimonial__revirwer-avata">
                          <img
                            src="assets/img/testimonial/avata-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="bd-testimonial__revirwer-name">
                          <h3>Hason Raza</h3>
                          <span>Musician</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bd-testimonial__item wow fadeInRight">
                      <div className="bd-testimonial__icon">
                        <span>
                          <i className="fa-thin fa-quote-right"></i>
                        </span>
                      </div>
                      <div className="bd-testimonial__review">
                        <p>
                          Lorem ipsum dolor sit amet, consec tetur adipisicing
                          elit, sed do eius mod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercita tion ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.{" "}
                        </p>
                      </div>
                      <div className="bd-testimonial__reviewer d-flex align-items-center justify-content-center">
                        <div className="bd-testimonial__revirwer-avata">
                          <img
                            src="assets/img/testimonial/avata-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="bd-testimonial__revirwer-name">
                          <h3>Mahmud Khan</h3>
                          <span>Musician</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="bd-testimonial__item wow fadeInLeft">
                      <div className="bd-testimonial__icon">
                        <span>
                          <i className="fa-thin fa-quote-right"></i>
                        </span>
                      </div>
                      <div className="bd-testimonial__review">
                        <p>
                          Lorem ipsum dolor sit amet, consec tetur adipisicing
                          elit, sed do eius mod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercita tion ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.{" "}
                        </p>
                      </div>
                      <div className="bd-testimonial__reviewer d-flex align-items-center justify-content-center">
                        <div className="bd-testimonial__revirwer-avata">
                          <img
                            src="assets/img/testimonial/avata-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="bd-testimonial__revirwer-name">
                          <h3>Jecob Oram</h3>
                          <span>Musician</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bd-testimonial__nav mt-50">
                <div className="container-fluid">
                  <div className="bd-testimonial__nav-wrapper d-flex justify-content-center">
                    <div className="testimonial-slider-button-prev">
                      <span>
                        <i className="fa-thin fa-angle-left"></i>
                      </span>
                    </div>
                    <div className="testimonial-slider-button-next">
                      <span>
                        <i className="fa-thin fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bd testimonial end  */}

        {/* bd brand start  */}
        <div className="bd-brand__section pt-120 pb-120 wow fadeInUp">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-1.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-3.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-4.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-5.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-6.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-7.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2  col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-8.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-9.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-10.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-11.png" alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="bd-brand__item">
                  <img src="assets/img/brand/brand-12.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bd brand end  */}
      </main>
    </>
  );
}

export default Home