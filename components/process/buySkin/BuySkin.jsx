import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getUserProfileDataAction} from "../../../redux/actions/authAction";
import MarketService from "../../../services/MarketService";
import {errorNotification} from "../../../utils/helperFunctions";
function BuySkin({balance, setStep, setp, onNext, isFromBalance}) {
  // console.log(balance);
  const userProfile = useSelector((state) => state.auth.userProfile);
  const dispatch = useDispatch();

  const [item, setItem] = useState(null);
  const router = useRouter();
  const {id} = router.query;
  // console.log("isadasdasdasd", id);
  const bySkin = async (id) => {
    const res = await MarketService.buySkin(id);
    if (res.status === 200) {
      onNext(false);
    } else {
      errorNotification(res?.response?.data?.message);
    }
  };

  // // console.log("item", items);
  let getMarketListings = async () => {
    if (id) {
      let res = await MarketService.singleMarket(id);
      // console.log("res", res.data.data);
      setItem(res.data.data);
    }
  };

  useEffect(() => {
    getMarketListings();
    dispatch(getUserProfileDataAction());
  }, [id]);
  const productPrice = 949.0;
  return (
    <>
      <div className="modal__title ">
        <div className="title w-100">
          <h2 className="mb-3">You’re buying</h2>
        </div>
      </div>
      <div className="discountItems__area">
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-sm-7 d-flex justfi-content-center  col-12 pe-3">
                <div>
                  <div className="dis__title modal__dis mb-3">
                    <span>{item?.asset_details?.details?.type}</span>
                    <h3>{item?.asset_details?.details?.name}</h3>
                  </div>
                  <div className="dis__img">
                    <div className="disImg_big2">
                      <img
                        src={item?.asset_details?.details?.icon_url}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5  col-12 ps-3">
                <div className="">
                  <div className="dis_content mb-3">
                    <span>Float</span>
                    <div className="dis_avater">
                      <p>
                        {parseFloat(item?.asset_details?.float_value).toFixed(
                          3
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="dis_content mb-3">
                    <span>Price</span>
                    <div className="dis_avater">
                      <h2 className="d-flex   align-items-center">
                        ${item?.bot_price}
                      </h2>
                    </div>
                  </div>
                  <div className="dis_content mb-3">
                    <span>Your balance</span>
                    <div className="dis_avater flex-wrap">
                      <h2
                        style={{
                          color:
                            userProfile?.data?.steam_user_info?.balance <
                            item?.bot_price
                              ? "#EB5757"
                              : "white",
                        }}
                        className="d-flex align-items-center">
                        $
                        {parseFloat(
                          userProfile?.data?.steam_user_info?.balance
                        ).toFixed(2)}
                      </h2>
                      {userProfile?.data?.steam_user_info?.balance <
                        item?.bot_price && (
                        <span style={{color: "#EB5757"}}>
                          <i className="me-2 fa-solid fa-triangle-exclamation"></i>
                          Insufficient funds
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal__btn mt-3 mt-sm-5 d-flex align-items-center justify-content-center flex-column  flex-md-row"
        style={{
          display: isFromBalance === "withdraw" ? "block" : "flex",
        }}>
        <button
          className="h_btn sm-modal-btn mt-3 me-0 me-sm-2 mb-2 mb-sm-0"
          onClick={() => onNext(true, {})}>
          Refill balance
        </button>
        <button
          className="btn mt-3 sm-modal-btn "
          disabled={
            userProfile?.data?.steam_user_info?.balance < item?.bot_price
              ? true
              : false
          }
          onClick={() => bySkin(item?.asset_id)}
          style={{
            background:
              userProfile?.data?.steam_user_info?.balance < item?.bot_price
                ? "#866713"
                : "",
          }}>
          <i className="me-2 fa-solid fa-cart-shopping"></i>
          Buy this skin
        </button>
      </div>
    </>
  );
}

export default BuySkin;
