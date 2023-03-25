import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllskin, getAllskinFalse} from "../../../redux/actions/steamAction";
import MarketService from "../../../services/MarketService";
import {
  calculatePercentage,
  successNotification,
} from "../../../utils/helperFunctions";
import {errorNotification} from "../../../utils/helperFunctions";
import DojoSellItem from "./DojoSellItem";

function WithdrawSellItems({onNext}) {
  const [loading, setloading] = useState(false);
  const selectedItem = useSelector((state) => state.steamRed.selectedItem);
  const recommendedPrice = useSelector(
    (state) => state.steamRed.recommendedPrice
  );

  const priceValue = useSelector((state) => state.steamRed.priceValue);
  const step = useSelector((state) => state.steamRed.step);

  const dispatch = useDispatch();

  let priceD = 0;
  for (let i = 0; i < priceValue?.length; i++) {
    priceD += priceValue[i]?.recommended_price;
  }
  // console.log('priceD', priceD)
  useEffect(() => {
    console.log("hello from useeffect get skin");
    dispatch(getAllskinFalse());
  }, [dispatch]);
  let sendData = async () => {
    setloading(true);
    let data = {
      asset_id: selectedItem?.map((i) => i?.asset_id),
      price: priceValue?.map((i) =>
        calculatePercentage(i?.recommended_price, 5)
      ),
      recommendedPrice: recommendedPrice,
    };
    let res = await MarketService.relistOnSale(data);
    //  console.log('res', res)
    if (res.status === 200) {
      dispatch(getAllskin());

      setloading(false);
      let succesValue = 0;
      for (let i = 0; i < res?.data.data?.length; i++) {
        if (res?.data.data[i]?.success === true) {
          succesValue += 1;
        }
        // successNotification(res?.caldata[i]?.message)
      }
      console.log("succesValue", succesValue);
      if (succesValue > 0) {
        successNotification(`${succesValue} Items put on successfully`);
        onNext();
      } else {
        errorNotification("Items couldn't put up for sale");
      }
      // successNotification(res?.data?.message);
    } else {
      setloading(false);
      errorNotification(res?.data?.message || "Something went wrong");
    }
    // console.log('res', res)
  };
  let mobileResponsive = (
    <div>
      <div className="modal__title">
        <div className="title">
          <h2>Sell ({selectedItem?.length} items)</h2>
          {/* <p>
            Items will be deposited from your Steam account to Dojo Bot. After
            the purchase, they will be transferred to the buyer and money will
            be credited to your Balance immediately.
          </p> */}
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="djSell_box mb-4">
        <div className="djPro__img">
          <div className="dj__img">
            <img src="img/330x192 (1) 1 (2).png" alt="" />
          </div>
          <span className="d-block">Factory New (FN)</span>
          <p>Water elemental</p>
        </div>
        <div className="djPro__content">
          <div className="dj__sellOption w-100 mb-4 flex-column flex-md-row align-items-start align-items-md-center">
            <div className="dj__p">
              <p>
                Set price for the item
                <i
                  className="fa-regular fa-circle-question"
                  style={{
                    marginLeft: "5px",
                  }}></i>
              </p>
              <div className="dj__op">
                <span>
                  Custom <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
            </div>
            <div className="dj__p">
              <p>Pre-set price</p>
              <div className="dj__op">
                <span>
                  Recommended $0.10
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="dj__sellOption justify-content-between w-100">
            <div className="dj__p">
              <p>Selling price</p>
              <div className="">
                <span className="sellWant">$0.1</span>
              </div>
            </div>
            <div className="dj__p">
              <p>Fee</p>
              <div className="">
                <span className="sellWant">5%</span>
              </div>
            </div>
            <div className="dj__p">
              <p>You’ll get</p>
              <div className="">
                <span className="sellNeed">$0.09</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="djSell_box mb-4">
        <div className="djPro__img">
          <div className="dj__img">
            <img src="img/330x192 (1) 1 (2).png" alt="" />
          </div>
          <span className="d-block">Factory New (FN)</span>
          <p>Water elemental</p>
        </div>
        <div className="djPro__content">
          <div className="dj__sellOption w-100 mb-4 flex-column flex-md-row">
            <div className="dj__p">
              <p>
                Set price for the item
                <i
                  className="fa-regular fa-circle-question"
                  style={{
                    marginLeft: "5px",
                  }}></i>
              </p>
              <div className="dj__op">
                <span>
                  Custom <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
            </div>
            <div className="dj__p">
              <p>Pre-set price</p>
              <div className="dj__op">
                <span>
                  Recommended $0.10
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="dj__sellOption justify-content-between w-100">
            <div className="dj__p">
              <p>Selling price</p>
              <div className="dj__op">
                <input type="text" name="price" id="price" />
              </div>
            </div>
            <div className="dj__p">
              <p>Fee</p>
              <div className="">
                <span className="sellWant">5%</span>
              </div>
            </div>
            <div className="dj__p">
              <p>You’ll get</p>
              <div className="">
                <span className="sellNeed">$1 549.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="djSell_box mb-4">
        <div className="djPro__img">
          <div className="dj__img">
            <img src="img/330x192 (1) 1 (2).png" alt="" />
          </div>
          <span className="d-block">Factory New (FN)</span>
          <p>Water elemental</p>
        </div>
        <div className="djPro__content">
          <div className="dj__sellOption w-100 mb-4 flex-column flex-md-row">
            <div className="dj__p">
              <p>
                Set price for the item
                <i
                  className="fa-regular fa-circle-question"
                  style={{
                    marginLeft: "5px",
                  }}></i>
              </p>
              <div className="dj__op">
                <span>
                  Custom <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
            </div>
            <div className="dj__p">
              <p>Pre-set price</p>
              <div className="dj__op">
                <span>
                  Recommended $0.10
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="dj__sellOption justify-content-between w-100">
            <div className="dj__p">
              <p>Selling price</p>
              <div className="dj__op">
                <input type="text" name="price" id="price" />
              </div>
            </div>
            <div className="dj__p">
              <p>Fee</p>
              <div className="">
                <span className="sellWant">5%</span>
              </div>
            </div>
            <div className="dj__p">
              <p>You’ll get</p>
              <div className="">
                <span className="sellNeed">$1 549.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="djSell__footerContent">
        <div className="fc__text">
          <p>
            Your item(s) will be listed for sale on our market for
            <span style={{color: "#ffc700"}}>$42.6</span>
            <br />
            <br />
            If the sale is successful, you will get
            <span style={{color: "#ffc700"}}>$42.17</span>
          </p>
        </div>
        <div className="fc__total">
          <p>Total Selling Price:</p>
          <span>$42.61</span>
        </div>
      </div>
      <p style={{color: "#9db4d3"}} className="mt-3">
        If your item is already in Dojo Inventory,it will be put on sale
        automatically,without having to accept a Steam Trade.
      </p>
      <div className="modal__btn mt-5 text-center">
        <button className="btn-sells" onClick={onNext}>
          Sellss
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div className="modal__title">
        <div className="title">
          <h2>Sell ({selectedItem?.length} items)</h2>
          {/* <p>
            Items will be deposited from your Steam account to Dojo Bot. After
            the purchase, they will be transferred to the buyer and money will
            be credited to your Balance immediately.
          </p> */}
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      {selectedItem.map((item, index) => {
        return (
          <DojoSellItem
            key={index}
            index={index}
            item={item}
            // isCustom={isCustom}
            // onchangeRecommend={onchangeRecommend}
          />
        );
      })}

      <div className="djSell__footerContent">
        <div className="fc__text">
          <p>
            Your item(s) will be listed for sale on our market for {"     "}
            <span style={{color: "#ffc700"}}>
              ${calculatePercentage(priceD, 5)}
            </span>
            <br />
            <br />
            If the sale is successful, you will get
            {"    "}
            <span style={{color: "#ffc700"}}>
              ${parseFloat(priceD).toFixed(2)}
            </span>
          </p>
        </div>
        <div className="fc__total">
          <p>Total Selling Price:</p>
          <span>{calculatePercentage(priceD, 5)}</span>
        </div>
      </div>
      <p style={{color: "#9db4d3"}} className="mt-3">
        If your item is alreadt in dojo inventory,it will be put on sale
        automatically,without having to accept a Steam trade.
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
          }}>
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

export default WithdrawSellItems;
