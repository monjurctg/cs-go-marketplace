import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllskin,
  getAllskinFalse,
} from "../../../redux/actions/steamAction";
import MarketService from "../../../services/MarketService";
import {
  calculatePercentage,
  getPercentage,
  successNotification,
} from "../../../utils/helperFunctions";
import { errorNotification } from "../../../utils/helperFunctions";

import SellItem from "./SellItem";

function Items({ onNext, setClose }) {
  const [loading, setloading] = useState(false);
  const selectedItem = useSelector((state) => state.steamRed.selectedItem);

  const [discount, setdiscount] = useState(0);
  const [lDiscount, setLdiscount] = useState(false);


  const dispatch = useDispatch();
  const recommendedPrice = useSelector(
    (state) => state.steamRed.recommendedPrice
  );

  const getDiscount = async () => {
    setLdiscount(true);
    let res = await MarketService.getDiscount();
    // console.log('res', res)
    if (res.status === 200) {
      setdiscount(res?.data);
      setLdiscount(false);
    }
    // console.log("res-dis", res);
  };
  // console.log('discount', discount)
  useEffect(() => {
    // console.log("hello from useeffect get skin");
    getDiscount();
    dispatch(getAllskinFalse());
  }, [dispatch]);
  const priceValue = useSelector((state) => state.steamRed.priceValue);
  const step = useSelector((state) => state.steamRed.step);

  let priceD = 0;
  for (let i = 0; i < priceValue?.length; i++) {
    priceD += priceValue[i]?.recommended_price;
  }
  // console.log('priceD', priceD)
  let sendData = async () => {
    setloading(true);
    let data = {
      asset_id: selectedItem?.map((i) => i?.asset?.asset_id),
      price: priceValue?.map((i) =>
        calculatePercentage(i?.recommended_price, 5)
      ),
      recommendedPrice: recommendedPrice,
    };
    let res = await MarketService.putOnSale(data);
    // console.log("res", res);
    if (res.status === 200) {
      setloading(false);
      dispatch(getAllskin());
      // if(res?.data?.length > 0){
      let succesValue = 0;
      for (let i = 0; i < res?.data?.length; i++) {
        if (res?.data[i]?.success === true) {
          succesValue += 1;
        }
        // successNotification(res?.data[i]?.message)
      }
      if (succesValue > 0) {
        successNotification(
          ` Trade offer created successfully for ${succesValue} items`
        );
        onNext();
      } else errorNotification("Trade offer could not be created for any item");
    } else {
      setloading(false);
      errorNotification(res?.data?.message || "Something went wrong");

      setClose(false);
    }
    // console.log('res', res)
  };

  return (
    <>
      <div className="modal__title">
        <div className="title">
          <h2>Sell ({selectedItem?.length} items)</h2>
          <p>
            Items will be deposited from your Steam account to Dojo Bot. After
            the purchase, they will be transferred to the buyer and money will
            be credited to your Balance immediately.
          </p>
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      {selectedItem.map((item, index) => {
        return (
          <SellItem
            key={index}
            index={index}
            item={item}
            lDiscount={lDiscount}
            discount={discount}
            // isCustom={isCustom}
            // onchangeRecommend={onchangeRecommend}
          />
        );
      })}

      <div className="djSell__footerContent">
        <div className="fc__text">
          <p>
            Your item(s) will be listed for sale on our market for {"     "}
            <span style={{ color: "#ffc700" }}>
              ${calculatePercentage(priceD, discount)}
              {/* {parseFloat(priceD).toFixed(2)} */}
            </span>
            <br />
            <br />
            If the sale is successful, you will get
            {"    "}
            <span style={{ color: "#ffc700" }}>
              ${parseFloat(priceD).toFixed(2)}
            </span>
          </p>
        </div>
        <div className="fc__total">
          <p>Total Selling Price:</p>
          <span>${calculatePercentage(priceD, discount)}</span>
        </div>
      </div>
      <p style={{ color: "#9db4d3" }} className="mt-3">
        Please note that if you have selected more than one item, they will be
        put on sale separately. Money you will get for each sold item can be
        seen above.
      </p>
      <div className="modal__btn mt-5 text-center">
        <button
          className="btn-sells"
          onClick={() => {
            if (step == 1 && !loading) {
              sendData();
            } else {
              onNext();
            }
          }}
        >
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Sell"
          )}
        </button>
      </div>
    </>
  );
}

export default Items;
