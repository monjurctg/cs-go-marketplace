import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import img1 from "../../public/img/vector/Rectangle 14.png";
import img12 from "../../public/img/330x192 (1) 1.png";
import img13 from "../../public/img/330x192 (1) 1.png";
import MarketService from "../../services/MarketService";
import Link from "next/link";

function MarketSlider() {
  const swiperRef = useRef();
  const [data, setdata] = useState([]);
  let getFeaturedSeller = async () => {
    let res = await MarketService.featuredSeller();
    setdata(res?.data?.data ?? []);
    // console.log("resssss", res?.data?.data);
  };

  useEffect(() => {
    getFeaturedSeller();
  }, []);

  const handleLeftClick = () => {
    // setIsChange(!isChange);
    document.getElementById("prev").click();
  };
  const handleRightClick = () => {
    document.getElementById("next").click();
    // setIsChange(!isChange);
  };
  const prevHandler = () => {
    swiperRef.current?.slidePrev();
  };

  let swipData = "";
  if (data.length > 0) {
    swipData = data.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="shop-div">
          <div className="mr_title">
            <div className="mr__vector">
              <Image
                src={item?.steam_avatar}
                width={40}
                height={40}
                alt="vector"
              />
            </div>
            <p>{item?.on_sale[0]?.seller_info?.seller_details?.username}</p>
          </div>
          <div
            className="mr_items mb-4 d-flex"
            style={{
              gap: 15,
            }}>
            {item?.on_sale.map((sale, index) => (
              <div
                className="mr_item d-block "
                key={index}
                style={{width: item?.on_sale?.length > 0 && "33%"}}>
                <div className="mr__pro">
                  <img src={sale?.asset_details?.details?.icon_url} alt="" />
                </div>
                <div className="mr__price d-flex justify-content-between align-items-end ">
                  <div className="price">
                    <span>
                      {sale?.asset_details?.float_value == 0
                        ? "0.000"
                        : sale?.asset_details?.float_value == null
                        ? "0.000"
                        : sale?.asset_details?.float_value?.toFixed(3)}
                    </span>
                    <p>${sale?.bot_price}</p>
                  </div>
                  <span>FN</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mr__sliderBtn">
            <Link href={"/featured/shop/" + item?.auth_id}>
              <button className="mrBtn">View Shop</button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    ));
  }
  return (
    <section className="mar__slider">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 offset-xl-3 p-0">
            <div className="mar__sliderItems ">
              <div className="d-flex justify-content-between">
                <h3>Featured sellers</h3>
                <div className="arow   ">
                  <div className="left-arrow">
                    <img
                      style={{
                        cursor: "pointer",
                      }}
                      src="img/left-arrow-color.png"
                      alt=""
                      onClick={handleLeftClick}
                    />
                  </div>
                  <div>
                    <img
                      style={{
                        cursor: "pointer",
                      }}
                      src="img/right-arrow.png"
                      alt=""
                      onClick={handleRightClick}
                    />
                  </div>
                  <div className="right-arrow"></div>
                </div>
              </div>
              <div className="swiper mrslider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={24}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  autoplay={{
                    delay: 2500,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    900: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1400: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  modules={[Autoplay]}
                  // loop={true}
                  className="swiper-wrapper">
                  {swipData}

                  <div id="next" onClick={prevHandler}></div>
                  <div
                    id="prev"
                    onClick={() => swiperRef.current?.slideNext()}></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketSlider;
