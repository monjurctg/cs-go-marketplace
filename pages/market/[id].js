import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import InitailProcess from "../../components/process/buySkin/InitialProcess";
import SteamInitailProcess from "../../components/process/streem/InitailProcess";

import Footer from "../../components/ui/Footer";
import DefaultModal from "../../components/ui/modal/DefaultModal";
import SimpleModal from "../../components/ui/modal/SimpleModal";
import Navbar from "../../components/ui/Navbar";
import up from "../../public/img/up.svg";
import down from "../../public/img/down.svg";

import MarketService from "../../services/MarketService";
import {calculatePercentage, getPercentage} from "../../utils/helperFunctions";
import {useSelector} from "react-redux";
import Loader from "../../components/ui/Loader";

function SingleItem() {
  const [defaltModalShow, setDefaultModalShow] = useState(false);
  const [item, setItem] = useState(null);
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [loading, setloading] = useState(true);
  let user = true;

  console.log(
    "item?.asset_details?.float_value",
    item?.asset_details?.float_value
  );
  setTimeout(() => {
    setloading(false);
  }, 1000);

  const router = useRouter();
  const {id} = router.query;
  // console.log('id', id)
  let rangeDecider = (value) => {
    let left = 0;
    if (value <= 0.25) left = 4;
    else if (value <= 0.35) left = 35;
    else if (value <= 0.4) left = 60;
    else if (value <= 0.5) left = 115;
    else if (value <= 0.75) left = 135;
    else if (value <= 0.85) left = 235;
    else if (value <= 0.99) left = 285;
    return left;
  };

  // let getMarketListings = async () => {
  //   if (id) {
  //     let res = await MarketService.singleMarket(id);
  //     console.log(res, "single item");
  //     if (res.status === 200) {
  //       setItem(res.data.data);
  //       setloading(false);
  //     } else {
  //       setloading(false);
  //     }
  //   }
  // };

  useEffect(() => {
    // getMarketListings();
  }, [id]);

  return (
    <>
      <div className="header_area">
        <Navbar isAuth={true} />
        <hr className="mt-3 mb-5" />
      </div>

      <main className="pb-5">
        <section className="discountItems__area">
          <div className="container-lg ">
            <div className="row">
              <div className="col-xl-12">
                {loading ? (
                  <Loader />
                ) : (
                  <div className="row">
                    <div
                      style={{borderColor: " #2C1F59 !important"}}
                      className="col-md-6 pe-5 border-end">
                      <div className="dis__title">
                        <span>
                          <span>Skin</span> man(MW)
                        </span>
                        <h3 style={{style: `${item?.name_color}`}}>name 2</h3>
                        {/* <p>No suicide squad would be complete without it</p> */}
                      </div>
                      <div className="dis__img">
                        {/* <div className="disImg_small">
                      <img
                        src={item?.asset_details?.details?.icon_url}
                        alt=""
                      />
                      <img
                        style={{borderColor: "white"}}
                        src={item?.asset_details?.details?.icon_url}
                        alt=""
                      />
                    </div> */}
                        <div className="disImg_big">
                          <img src="/img/330x192 (1) 1 (3).png" alt="" />
                        </div>
                      </div>
                    </div>
                    <hr className="border" />
                    <div className="col-md-6 ps-4">
                      <div className="dis_content mb-5">
                        <span>Seller</span>
                        <div className="dis_avater d-flex align-items-center">
                          <img
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                            className="me-3"
                            // src={item?.seller_info?.seller_details?.avatar}
                            alt=""
                          />
                          <p>monjur</p>
                        </div>
                      </div>

                      <div className="dis_content mb-5">
                        <span>Float</span>
                        <div
                          className="dis_avater"
                          style={{position: "relative"}}>
                          <p>
                            {/* {" "}
                                {item?.asset_details?.float_value == 0
                                  ? "0.000"
                                  : item?.asset_details?.float_value == null
                                  ? "null"
                                  : parseFloat(
                                      item?.asset_details?.float_value
                                    ).toFixed(3)} */}
                            0.3000
                          </p>
                          <div className="range mt-4 position-relative">
                            <span
                              style={{
                                background: "#05BB59",
                                flexGrow: 0.8,
                              }}
                              data-id={0.25}></span>
                            <span
                              style={{background: "#0D8619", flexGrow: 3}}
                              data-id={0.5}></span>
                            <span
                              style={{
                                background: "#EB5757",
                                flexGrow: 0.5,
                              }}
                              data-id={0.75}></span>
                            <span
                              style={{background: "#AE1414", flexGrow: 6}}
                              data-id={1}></span>
                          </div>
                          <div
                            className="d-flex flex-column position-absolute"
                            style={{
                              top: 26,
                              left: rangeDecider(
                                item?.asset_details?.float_value == 0
                                  ? 0
                                  : item?.asset_details?.float_value == null
                                  ? 0
                                  : parseFloat(
                                      item?.asset_details?.float_value
                                    ).toFixed(3)
                              ),
                            }}>
                            <img
                              src={down.src}
                              style={{height: 25, width: 20}}
                              alt=""
                            />
                            <img
                              src={up.src}
                              style={{height: 25, width: 20}}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="dis_content mb-5">
                        <span>Rarity</span>
                        <div className="dis_avater d-flex align-items-center">
                          <div className="range2 me-3">
                            <span
                              style={{
                                background: "#ffff",
                                flexGrow: 1,
                              }}></span>
                          </div>
                          <p>{2323}</p>
                        </div>
                      </div>
                      <div className="dis_content mb-5">
                        <span>Price</span>
                        <div className="dis_avater">
                          {/* <h4>
                        <del>$949.00</del>
                      </h4> */}
                          <h2 className="d-flex align-items-center">
                            $ 45
                            {/* {calculatePercentage(item?.bot_price, item?.fee)}
                              {item?.recommended_price > item?.bot_price ? (
                                <span>
                                  getPercentage( item?.recommended_price,
                                  item?.bot_price, item?.fee ) %
                                </span>
                              ) : (
                                ""
                              )} */}
                          </h2>
                          <p className="d-flex align-items-center">
                            <i className="me-2 fa-brands fa-steam-symbol"></i>{" "}
                            Steam Price - $34.33
                          </p>
                        </div>
                      </div>
                      {/* <div className="dis_content mb-5">
                    <span>Promo code</span>
                    <div className="dis__input">
                      <img src="/img/vector/Icon.png" alt="" />
                      <input
                        type="text"
                        name="code"
                        id="code"
                        placeholder="Your promo code here"
                      />
                    </div>
                  </div> */}
                      <div
                        className="dis_content flex-wrap  d-flex align-items-center mb-2"
                        style={{gap: 10}}>
                        <button className="in_game_btn sm-btn mt-1">
                          <i className="me-2 fa-brands fa-steam-symbol"></i>{" "}
                          Inspect IN-Game
                        </button>

                        <button
                          className="btn btn-230 sm-btn mt-1"
                          onClick={() => setDefaultModalShow(!defaltModalShow)}>
                          <i className="me-2 fa-solid fa-cart-shopping"></i> Buy
                          this skin
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SimpleModal
        isShow={defaltModalShow}
        setClose={setDefaultModalShow}
        size={"small-modal"}
        body={
          user ? (
            <InitailProcess
              setClose={setDefaultModalShow}
              isFromBalance={"market"}
              isShow={defaltModalShow}
            />
          ) : (
            <SteamInitailProcess
              setClose={setDefaultModalShow}
              isShow={defaltModalShow}
            />
          )
        }
      />

      <Footer />
    </>
  );
}

export default SingleItem;
