import React, {useEffect, useRef, useState} from "react";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";

import img1 from "../../public/img/330x192 (1) 1.png";
import img2 from "../../public/img/330x192 (1) 1 (2).png";
import {AiFillCaretUp} from "react-icons/ai";
// import lock from '..';

import "swiper/css";
import {Navigation, Pagination} from "swiper";
import MarketService from "../../services/MarketService";
import Link from "next/link";
import glock from "../../public/img/glock.svg";
import {calculatePercentage, getPercentage} from "../../utils/helperFunctions";

function BestDetails() {
  const [domLoaded, setdomLoaded] = useState(false);
  const swiperRef = useRef();
  const [currentValue, setCurrentValue] = useState(1);
  const [isChange, setIsChange] = useState(false);
  const [total, setTotal] = useState(null);
  const [bestDeals, setBestDeals] = useState([]);

  let getBestDeals = async () => {
    const res = await MarketService.getBestDeals();
    // console.log(res, "res");
    setBestDeals(res?.data);
    setTotal(res?.data?.data.length);
    // console.log("resasdasdasd", res);
  };

  useEffect(() => {
    getBestDeals();
  }, []);

  useEffect(() => {
    const crntValue = window?.document.querySelector(
      ".swiper-pagination-current"
    );
    const total = document.querySelector(".swiper-pagination-total")?.innerHTML;

    setCurrentValue(crntValue?.innerHTML);
  }, [isChange]);

  useEffect(() => {
    setdomLoaded(true);
  }, []);
  const handleLeftClick = () => {
    setIsChange(!isChange);
    document.getElementById("prev").click();
  };
  const handleRightClick = () => {
    document.getElementById("next").click();
    setIsChange(!isChange);
  };
  const prevHandler = () => {
    swiperRef.current?.slidePrev();
  };
  console.log(total, "bestDeals?.data?.lenght");

  return (
    <div className="mt-5">
      <div className=" slider-container ">
        <div style={{overflow: "hidden"}} className="header__slider w-100">
          <div className=" mt-4">
            <button className="limitedOfferButton">Limited Offer</button>
            <h4
              style={{
                color: "#9DB4D3",
                marginTop: "25px",
                fontSize: "39px",
                fontWeight: "400px",
                width: "200px",
              }}>
              Best Deals
            </h4>
            <div className="slider-btn-container">
              <div className="sliderLeftOrRightButton">
                <div
                  className="leftArrow"
                  style={{cursor: "pointer"}}
                  onClick={handleLeftClick}>
                  <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div
                  className="rightArrow"
                  style={{cursor: "pointer"}}
                  onClick={handleRightClick}>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div
                className="d-flex"
                style={{marginTop: "10px", marginLeft: "6px"}}>
                <p> {currentValue ?? 1} &nbsp; </p>
                <p style={{color: "#9DB4D3"}}>
                  of &nbsp;
                  {total}
                </p>
              </div>
            </div>
          </div>
          <div className="swiper headerSwiper">
            {domLoaded && (
              <Swiper
                slidesPerView={total <= 1 ? 1 : 4}
                spaceBetween={30}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                pagination={{
                  type: "fraction",
                }}
                loop={true}
                breakpoints={
                  total <= 1
                    ? {}
                    : {
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        400: {
                          slidesPerView: 2,
                          spaceBetween: 15,
                        },
                        770: {
                          slidesPerView: 3,
                          spaceBetween: 15,
                        },
                        900: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        1000: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },

                        1100: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1400: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },

                        2000: {
                          slidesPerView: 5,
                          spaceBetween: 20,
                        },
                      }
                }
                // navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper-wrapper">
                {bestDeals?.data?.map((item, index) => (
                  <SwiperSlide className="swiper-slide" key={index + 1}>
                    <a
                      href={"market/" + item?.asset_details?.asset_id}
                      key={index}>
                      <h6>
                        {item?.asset_details?.details?.name?.slice(0, 23)}{" "}
                        <span>FN</span>
                      </h6>
                      <div className="d-flex justify-content-center">
                        <Image
                          style={{cursor: "pointer"}}
                          src={
                            item?.asset_details?.details?.icon_url ??
                            item?.asset_details?.details?.icon_url
                          }
                          // sizes="70vw"
                          width={180}
                          height={120}
                          // layout="fill"
                          // objectFit="contain"
                          alt=""
                        />
                      </div>
                      <div className="dis__price">
                        <div className="dis">
                          <>
                            {item?.recommended_price > item?.bot_price ? (
                              <span
                                style={{
                                  fontWeight: 400,
                                  fontSize: 13,
                                  lineHeight: "120%",
                                  color: "#05BB59",
                                }}>
                                {getPercentage(
                                  item?.recommended_price,
                                  item?.bot_price,

                                  item?.fee
                                )}
                                %
                              </span>
                            ) : (
                              <p></p>
                            )}
                          </>
                          <p className="mt-2">
                            $ {calculatePercentage(item?.bot_price, item?.fee)}
                          </p>
                        </div>
                        <div className="pinCode text-end">
                          <span>
                            {item?.asset_details?.float_value == "0"
                              ? "0.000"
                              : item?.asset_details?.float_value == null
                              ? "Null"
                              : item?.asset_details?.float_value.toFixed(3)}
                          </span>
                          <div className="d-flex justify-content-end lock-img">
                            {item?.asset_details?.details
                              ?.market_tradable_restriction > 0 ? (
                              <>
                                <Image
                                  src="/img/lock.svg"
                                  alt=""
                                  style={{marginRight: 4}}
                                  height={15}
                                  width={13}
                                />
                                <p>
                                  {
                                    item?.asset_details?.details
                                      ?.market_tradable_restriction
                                  }
                                  D
                                </p>
                              </>
                            ) : (
                              <div style={{marginTop: 5}}>
                                <Image
                                  src="/img/glock.svg"
                                  alt=""
                                  style={{marginRight: 4}}
                                  height={20}
                                  width={16}
                                />
                              </div>
                            )}
                          </div>
                          {/* <div className="msg">
                            <AiFillCaretUp className="up" />
                            These item is currently trade locked by Steam,you
                            will able to withdraw the item after trade lock
                            expires
                          </div> */}
                        </div>
                      </div>
                      <p className="steam-price">
                        <i className="fa-brands fa-steam-symbol"></i> Steam
                        price: ${item?.recommended_price.toFixed(2)}
                      </p>
                    </a>
                  </SwiperSlide>
                ))}

                <div id="prev" onClick={prevHandler}></div>
                <div
                  id="next"
                  onClick={() => swiperRef.current?.slideNext()}></div>
              </Swiper>
            )}
          </div>
        </div>
      </div>
      <div className="slider-btn-992">
        <div className="sliderLeftOrRightButton">
          <div
            className="leftArrow"
            style={{cursor: "pointer"}}
            onClick={handleLeftClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div
            className="rightArrow"
            style={{cursor: "pointer"}}
            onClick={handleRightClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>

        <div className="fraction d-flex">
          <p> {currentValue ?? 1} &nbsp; </p>
          <p style={{color: "#9DB4D3"}}>
            of &nbsp;
            {total ?? bestDeals?.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestDetails;
