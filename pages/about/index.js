import React from "react";

import Breadcrumb from "../../components/layouts/Breadcrumb";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

function Index() {
  return (
    <>
      <div className="header_area">
        <Navbar isAuth={true} />
        <hr className="mt-3 mb-5" />
      </div>
      <main className="pb-5">
        <section className="market">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 section__title">
                <Breadcrumb name={`About us`} />
              </div>
              <div className="col-md-9">
                <div className=" ab__para">
                  <p className="mb-5">
                    We are a team of passionate gamers who has embarked on a
                    mission to create a skins marketplace that is user-friendly
                    and transparent in every step of the way. We strive to meet
                    the demands of both casual and experienced skin traders
                    alike through a familiar set of features with a modern
                    design that makes it effortless to interact with our
                    marketplace.
                    <br /> <br /> <br />
                    As a growing start-up, we are constantly looking to innovate
                    and be trendy in the skin trading ecosystem. Our company
                    prides itself on the open and mutual relationship with our
                    valuable gamers and partners. Safety, transparency and
                    respect are the core pillars instilled in the Skins Dojo
                    DNA.
                    <br />
                    <br />
                    <br />
                    If you have any suggestions or looking to partner with us as
                    a CS:GO content creator or esports organization, feel free
                    to reach out to us at info@skinsdojo.com
                  </p>
                  {/* <div className="ab__goal mb-4">
                    <h5 className="mb-3">Mission</h5>
                    <p>
                      Our mission is to help gamers trade items effortlessly,
                      with no risk of monetary loss. We deliver a service that
                      makes item trading safe and easy!
                    </p>
                  </div>
                  <div className="ab__goal mb-4">
                    <h5 className="mb-3">Vision</h5>
                    <p>
                      We want to create a space for gamers to truly express
                      themselves, elevating their overall gaming experience and
                      life.
                    </p>
                  </div>
                  <div className="ab__goal mb-4">
                    <h5 className="mb-3">The team</h5>
                    <p>
                      The people behind GamerPay are dedicated entrepreneurs
                      with various experiences within trading, marketplaces,
                      product development, and of course with a great deal of
                      passion for gaming in general. Most of us are parents with
                      children who are gaming as well.
                    </p>
                  </div>
                  <div className="ab__goal mb-5">
                    <h5 className="mb-3">Values</h5>
                    <p>
                      Our values have been on our minds from day-1, and we are
                      highly motivated by them.
                      <br />
                      <br />
                      Here are the values that drive us forward every single
                      day:
                    </p>
                  </div> */}

                  {/* <div className=" mb-3 d-none d-md-block">
                    <div className="ab__service">
                      <div className="abService__img">
                        <img src="img/about/Frame 156.png" alt="" srcset="" />
                      </div>
                      <div className="abService__content">
                        <h6 className="mb-2">Adventurous</h6>
                        <p>
                          Gaming is limitless. Dream big, and be sure to strive
                          for them! Here are the values that drive us forward
                          every single day:
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-3 d-none d-md-block">
                    <div className="ab__service">
                      <div className="abService__img">
                        <img src="img/about/Frame 157.png" alt="" srcset="" />
                      </div>
                      <div className="abService__content">
                        <h6 className="mb-2">Respect</h6>
                        <p>
                          Treat others as you wish to be treated - We are deeply
                          committed to helping both frequent and casual traders.
                          Especially those that do not yet comprehend how to buy
                          or sell virtual items.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-3 d-none d-md-block">
                    <div className="ab__service">
                      <div className="abService__img">
                        <img src="img/about/Frame 158.png" alt="" srcset="" />
                      </div>
                      <div className="abService__content">
                        <h6 className="mb-2">Honesty</h6>
                        <p>
                          Be true to yourself and others. We are always fully
                          transparent about what you pay for transacting on our
                          platform and why. At GamerPay you purchase gaming
                          skins and assets because you want to portray yourself
                          and spice up your experience playing the game you
                          love.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-3 d-none d-md-block">
                    <div className="ab__service">
                      <div className="abService__img">
                        <img src="img/about/Frame 159.png" alt="" srcset="" />
                      </div>
                      <div className="abService__content">
                        <h6 className="mb-2">Inclusion</h6>
                        <p>
                          Be open, respect views that differ from your own. - No
                          matter the age, gender or race. We want to build a
                          safe place for all to trade without the fear of being
                          scammed or harassed.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="col-md-3 d-none d-md-block">
                <div className="ab__investor">
                  <h5 className="mb-4">Investors</h5>
                  <div className="investor mb-3">
                    <div className="investor__img mb-2">
                      <img src="img/about/Rectangle 38.png" alt="" />
                    </div>
                    <span className="block">PreSeed Ventures</span>
                  </div>
                  <div className="investor mb-3">
                    <div className="investor__img mb-2">
                      <img src="img/about/Rectangle 39.png" alt="" />
                    </div>
                    <span className="block">Rainmaking</span>
                  </div>
                  <div className="investor mb-3">
                    <div className="investor__img mb-2">
                      <img src="img/about/Rectangle 40.png" alt="" />
                    </div>
                    <span className="block">Vækstfonden</span>
                  </div>
                  <div className="investor mb-3">
                    <div className="investor__img mb-2">
                      <img src="img/about/Rectangle 41.png" alt="" />
                    </div>
                    <span className="block">YCombinator</span>
                  </div>
                  <div className="investor">
                    <div className="investor__img mb-2">
                      <img src="img/about/Rectangle 42.png" alt="" />
                    </div>
                    <span className="block">FundersClub</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="container ab__investor d-block d-md-none">
            <h5 className="mb-4">Investors</h5>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              // pagination={{
              //   clickable: true,
              // }}
              // modules={[Pagination]}
              className="mySwiper">
              <SwiperSlide>
                <div className="investor mb-3">
                  <div className="investor__img mb-2">
                    <img src="img/about/Rectangle 38.png" alt="" />
                  </div>
                  <span className="block">PreSeed Ventures</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="investor mb-3">
                  <div className="investor__img mb-2">
                    <img src="img/about/Rectangle 39.png" alt="" />
                  </div>
                  <span className="block">Rainmaking</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="investor mb-3">
                  <div className="investor__img mb-2">
                    <img src="img/about/Rectangle 40.png" alt="" />
                  </div>
                  <span className="block">Vækstfonden</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="investor mb-3">
                  <div className="investor__img mb-2">
                    <img src="img/about/Rectangle 41.png" alt="" />
                  </div>
                  <span className="block">Y Combinator</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="investor">
                  <div className="investor__img mb-2">
                    <img src="img/about/Rectangle 42.png" alt="" />
                  </div>
                  <span className="block">FundersClub</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> */}
        </section>
      </main>

      <Footer page={"about"} />
    </>
  );
}

export default Index;
