import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper";
function HeaderSlider() {
  const [domLoaded, setdomLoaded] = useState(false);
  useEffect(() => {
    setdomLoaded(true);
  }, []);

  return (
    <>
      <div className="header__slider">
        <div className="bt__deals">
          <span>limited offers</span>
          <h4>Best deals</h4>

          <div className="sliderLeftOrRightButton">
            <div className="leftArrow" style={{cursor: "pointer"}}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="rightArrow" style={{cursor: "pointer"}}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>

          <p style={{color: "#fff", marginTop: "10px"}}>
            {0} of {6}
          </p>
        </div>

        <div className="swiper headerSwiper">
          {domLoaded && (
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              // pagination={{
              //   type: "fraction",
              // }}
              loop={true}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                968: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
              // navigation={true}
              modules={[Pagination, Navigation]}
              className="swiper-wrapper">
              <SwiperSlide className="swiper-slide" style={{width: "304px"}}>
                <a href="#">
                  <h6>
                    Water elemental <span>FN</span>
                  </h6>
                  <div className="bDeals__img">
                    {/* <img src="img/330x192 (1) 1.png" alt="" /> */}
                  </div>
                  <div className="dis__price">
                    <div className="dis">
                      <span>-12.97%</span>
                      <p>$4.00</p>
                    </div>
                    <div className="pinCode">
                      <span>0.198752</span>
                      <p>
                        <i className="fa-solid fa-lock"></i> 3D
                      </p>
                    </div>
                  </div>
                  <p>
                    <i className="fa-brands fa-steam-symbol"></i> Steam price:
                    $6.77
                  </p>
                </a>
              </SwiperSlide>
            </Swiper>
          )}
          <div className="">
            {/* <a href="#" className="swiper-slide">
              <h6>
                Water elemental <span>FN</span>
              </h6>
              <div className="bDeals__img">
                <img src="img/330x192 (1) 1.png" alt="" />
              </div>
              <div className="dis__price">
                <div className="dis">
                  <span>-12.97%</span>
                  <p>$4.00</p>
                </div>
                <div className="pinCode">
                  <span>0.198752</span>
                  <p>
                    <i className="fa-solid fa-lock"></i> 3D
                  </p>
                </div>
              </div>
              <p>
                <i className="fa-brands fa-steam-symbol"></i> Steam price: $6.77
              </p>
            </a>
            <a href="#" className="swiper-slide">
              <h6>
                Water elemental <span>FN</span>
              </h6>
              <div className="bDeals__img">
                <img src="img/330x192 (1) 1 (2).png" alt="" />
              </div>
              <div className="dis__price">
                <div className="dis">
                  <span>-12.97%</span>
                  <p>$4.00</p>
                </div>
                <div className="pinCode">
                  <span>0.198752</span>
                  <p>
                    <i className="fa-solid fa-lock"></i> 3D
                  </p>
                </div>
              </div>
              <p>
                <i className="fa-brands fa-steam-symbol"></i> Steam price: $6.77
              </p>
            </a>
            <a href="#" className="swiper-slide">
              <h6>
                Water elemental <span>FN</span>
              </h6>
              <div className="bDeals__img">
                <img src="img/330x192 (1) 1 (3).png" alt="" />
              </div>
              <div className="dis__price">
                <div className="dis">
                  <span>-12.97%</span>
                  <p>$4.00</p>
                </div>
                <div className="pinCode">
                  <span>0.198752</span>
                  <p>
                    <i className="fa-solid fa-lock"></i> 3D
                  </p>
                </div>
              </div>
              <p>
                <i className="fa-brands fa-steam-symbol"></i> Steam price: $6.77
              </p>
            </a>
            <a href="#" className="swiper-slide">
              <h6>
                Water elemental <span>FN</span>
              </h6>
              <div className="bDeals__img">
                <img src="img/330x192 (1) 1.png" alt="" />
              </div>
              <div className="dis__price">
                <div className="dis">
                  <span>-12.97%</span>
                  <p>$4.00</p>
                </div>
                <div className="pinCode">
                  <span>0.198752</span>
                  <p>
                    <i className="fa-solid fa-lock"></i> 3D
                  </p>
                </div>
              </div>
              <p>
                <i className="fa-brands fa-steam-symbol"></i> Steam price: $6.77
              </p>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSlider;
