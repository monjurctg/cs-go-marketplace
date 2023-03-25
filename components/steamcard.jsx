import Image from "next/image";
import React from "react";
import dots from "../public/images/dots.svg";
import lock from "../public/img/lock.svg";

function SteamItemcard({item, onSelectItem, selected}) {
  // console.log('item', item)
  return (
    <a
      className={`mrkt_item ${
        selected.includes(item?.asset_id) ? "item-selected" : ""
      }`}
      style={{
        cursor: "pointer",
      }}
      onClick={() => onSelectItem(item?.asset_id)}>
      <h6>
        {item?.description?.name?.slice(0, 20)}{" "}
        <span>{item?.description?.market_buy_country_restriction ?? "FN"}</span>
      </h6>
      <div className="bDeals__img">
        <Image
          src={item?.description?.icon_url ?? item?.description?.icon_url}
          sizes="100vw"
          width={100}
          height={100}
          // layout="fill"
          objectFit="contain"
          alt=""
        />
        {/* <img src={item?.image ?? item?.img} alt="" /> */}
      </div>

      <div className="d-flex justify-content-between mb-3 align-items-center">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
            alignSelf: "center",
            marginTop: 5,
            color: " #9DB4D3",
          }}>
          {item?.asset?.float_value
            ? `${item?.asset?.float_value}`.slice(0, 7)
            : "0.00000"}
        </span>

        <div className="d-flex justify-content-end lock-img">
          {item?.description?.market_tradable_restriction > 0 ? (
            <>
              <Image
                src="/img/lock.svg"
                alt=""
                style={{marginRight: 4}}
                height={15}
                width={13}
              />
              <p>{item?.description?.market_tradable_restriction}D</p>
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
      </div>
      <div className="d-flex justify-content-between position-relative">
        {/* <p
          style={{
            fontWeight: 400,
            fontSize: 20,
            color: "#FFC700",
          }}> */}
        {/* <i className="fa-brands fa-steam-symbol"></i>  $*/}
        {/* {item?.description.bot_price} */}
        {/* </p> */}
        {/* <img
          src={dots.src}
          alt=""
          className="dots"
          style={{height: "auto", width: 16, marginBottom: 0}}
        /> */}
      </div>
    </a>
  );
}

export default SteamItemcard;
