import Image from "next/image";
import {useRouter} from "next/router";
import React from "react";
import {useDispatch} from "react-redux";
import {AiFillCaretUp} from "react-icons/ai";

import dots from "../../public/images/dots.svg";
import lock from "../../public/img/lock.svg";
import {itemOnSaleApiCall} from "../../redux/actions/staticBarActions";
import MarketService from "../../services/MarketService";
import {
  calculatePercentage,
  getPercentage,
  successNotification,
} from "../../utils/helperFunctions";
// import up from "../../public/images/up.svg";
// import edit from "../../public/images/edit.svg";
// import disabled from "../../public/images/disable.svg";

// import {AiFillCaretUp} from "react-icons/ai";

function MarketItem({item, module}) {
  let dispatch = useDispatch();
  // console.log(item?.asset_details?.details?.market_tradable_restriction);
  const Router = useRouter();

  return (
    <a className="mrkt_item position-relative">
      <h6>
        {item?.asset_details?.details?.name?.slice(0, 20)}{" "}
        <span>
          {item?.asset_details?.details?.market_buy_country_restriction ?? "FN"}
        </span>
      </h6>
      <div className="">
        <Image
          style={{cursor: "pointer"}}
          onClick={() => {
            Router.push(`market/${item?.asset_details?.asset_id}`);
          }}
          src={
            item?.asset_details?.details?.icon_url ??
            item?.asset_details?.details?.icon_url
          }
          sizes="100vw"
          width={100}
          height={100}
          // layout="fill"
          // objectFit="contain"
          alt=""
        />
      </div>
      <div className="mb-2">
        <div className="d-flex justify-content-between mb-2">
          {item?.recommended_price > item?.bot_price ? (
            <p
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
            </p>
          ) : (
            <p></p>
          )}

          <p
            style={{
              fontWeight: 400,
              fontSize: 13,
              lineHeight: "120%",

              color: "#9DB4D3",
            }}>
            {item?.asset_details?.float_value
              ? parseFloat(item?.asset_details?.float_value).toFixed(3)
              : "0.000"}
          </p>
        </div>

        <div className="d-flex justify-content-between">
          <p
            style={{
              fontWeight: 400,
              fontSize: 20,
              color: "#FFC700",
            }}>
            {/* <i className="fa-brands fa-steam-symbol"></i> */}$
            {calculatePercentage(item?.bot_price, item?.fee)}
          </p>
          {item?.asset_details?.details?.market_tradable_restriction > 0 ? (
            <div
              className="d-flex align-items-center position-relative"
              style={{gap: 4, cursor: "pointer"}}
              onClick={() => {
                console.log("hi");
                let msg = document.getElementById("msg" + item?.id);

                if (msg.style.opacity == "1") {
                  msg.style.opacity = "0";
                } else msg.style.opacity = "1";
              }}>
              <Image
                src="/img/lock.svg"
                alt=""
                style={{marginRight: 4}}
                height={15}
                width={13}
                className="lock-img"
              />
              <p>
                {item?.asset_details?.details?.market_tradable_restriction}D
              </p>
            </div>
          ) : (
            <div style={{marginTop: 5}} className=" position-relative">
              <Image
                onClick={() => {
                  // console.log("hi");
                  let msg = document.getElementById("msg" + item?.id);

                  if (msg.style.opacity == "1") {
                    msg.style.opacity = "0";
                  } else msg.style.opacity = "1";
                }}
                src="/img/glock.svg"
                alt=""
                style={{marginRight: 4}}
                height={20}
                width={16}
              />
            </div>
          )}
        </div>
      </div>
      <p className="d-flex align-items-center steam-p">
        <i className="me-2 fa-brands fa-steam-symbol"></i> Steam Price - $
        {parseFloat(item?.recommended_price).toFixed(2)}
      </p>
      <AiFillCaretUp className="up" />
      <div
        className={
          item?.asset_details?.details?.market_tradable_restriction > 0
            ? "msg"
            : "d-none"
        }
        id={"msg" + item?.id}>
        These item is currently trade locked by Steam, you will able to withdraw
        the item after trade lock expires
      </div>
      <div
        className={
          item?.asset_details?.details?.market_tradable_restriction < 0
            ? "msgG"
            : "d-none"
        }
        id={"msgG" + item?.id}>
        <AiFillCaretUp className="up" />
        This item is available for withdrawal to your Steam inventory, after
        purchase.
      </div>
    </a>
  );
}

export default MarketItem;
