import React from "react";
import dots from "../public/images/dots.svg";
import lock from "../public/img/lock.svg";
function TradeItemCards({item, createTradeSingle}) {
  return (
    <div className="innr">
      <a
        href="#"
        className="mrkt_item"
        style={{
          width: 210,
        }}>
        <h6>
          Water elemental{" "}
          <span>
            {item?.asset_details?.details?.market_buy_country_restriction ??
              "FN"}
          </span>
        </h6>
        <div className="bDeals__img">
          <img src={item?.asset_details?.details?.icon_url} alt="" />
        </div>
        <div className="d-flex justify-content-between mb-3 align-items-center">
          <span
            style={{
              fontWeight: 400,
              fontSize: 16,
              alignSelf: "center",
              color: " #9DB4D3",
            }}>
            {item.pincode ?? "726372"}
          </span>
          <div className="d-flex justify-content-between " style={{gap: 7}}>
            <img
              src={lock.src}
              alt=""
              style={{width: 16, height: "auto", marginBottom: 0}}
            />
            <p
              style={{
                fontWweight: 400,
                fontSize: 20,
                textAlign: "right",
                color: " #9DB4D3",
              }}>
              {item?.asset_details?.details?.market_tradable_restriction}D
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between position-relative">
          <p
            style={{
              fontWeight: 400,
              fontSize: 20,
              color: "#FFC700",
            }}>
            {/* <i className="fa-brands fa-steam-symbol"></i> */}$
            {item?.bot_price}
          </p>
          <img
            src={dots.src}
            alt=""
            className="dots"
            style={{height: "auto", width: 16, marginBottom: 0}}
          />
          {/* <div className="dots-show">
        <img src={up.src} alt=""/>

        <div className="details">
          <div className="d-flex" style={{
                gap: 14,
                alignItems: "center",
                marginLeft:7,
                marginBottom: 15,
          }}>
            <img src={edit.src} alt=""/>
            <p>Change price</p>
          </div>
          <div className="d-flex"  style={{
                gap: 14,
                marginLeft:7,
                alignItems: "center",
          }}>
            <img src={disabled.src} alt=""/>
            <p>Delist item</p>
          </div>
        </div>

      </div> */}
        </div>
      </a>
      <p
        className="take"
        id={"trade-" + item.asset_id}
        onClick={() => createTradeSingle(item.asset_id)}>
        Create Trade
      </p>
      <span className="cancel">Cancel</span>
    </div>
  );
}

export default TradeItemCards;
