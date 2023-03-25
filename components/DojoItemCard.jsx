import Image from "next/image";
import React from "react";
import dots from "../public/images/dots.svg";
import lock from "../public/img/lock.svg";
function DojoItemCard({item, onSelectItem, selectedItem}) {
  // console.log(item.asset.asset_id);


  return (
    <a
    
      className={`mrkt_item ${
        selectedItem.filter(selected=>selected?.asset_id === item?.asset_id)?.length > 0 ? "item-selected" : ""
      }`}
      style={{
        cursor: "pointer",
      }}
      onClick={() => onSelectItem(item)}
      
      >
      <h6>
        {item?.asset_details?.details.name?.slice(0, 20)}{" "}
        <span>
          {item?.asset_details?.details?.market_buy_country_restriction ?? "FN"}
        </span>
      </h6>
      <div className="">
        <Image
          src={item?.asset_details?.details?.icon_url}
          sizes="100vw"
          width={100}
          height={100}
          // layout="fill"
          // objectFit="contain"
          alt=""
        />
        {/* <img src={item?.image ?? item?.img} alt="" /> */}
      </div>

      <div className="d-flex justify-content-end align-items-center" style={{
        height:30
      }}>
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
            alignSelf: "center",
            marginTop: 5,
            color: " #9DB4D3",
          }}>
           {item?.asset_details?.float_value == "0"
                              ? "0.000"
                              : item?.asset_details?.float_value == null
                              ? ""
                              : item?.asset_details?.float_value?.toFixed(3)}
        </span>
        {/* <div className="d-flex justify-content-between " style={{gap: 7}}>
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
        </div> */}
        {/* <div className="d-flex justify-content-end lock-img">
          {item?.asset_details?.details?.market_tradable_restriction > 0 ? (
            <>
              <Image
                src="/img/lock.svg"
                alt=""
                style={{marginRight: 4}}
                height={15}
                width={13}
              />
              <p>
                {item?.asset_details?.details?.market_tradable_restriction}D
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
        </div> */}
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
        <div className="d-flex justify-content-end align-items-center lock-img">
          {item?.asset_details?.details?.market_tradable_restriction > 0 ? (
            <>
              <Image
                src="/img/lock.svg"
                alt=""
                style={{marginRight: 4}}
                height={15}
                width={13}
              />
              <p>
                {item?.asset_details?.details?.market_tradable_restriction}D
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
      </div>
      <p className="d-flex align-items-center steam-p">
        <i className="me-2 fa-brands fa-steam-symbol"></i> Steam Price - $
        {parseFloat(item?.recommended_price).toFixed(2)}
      </p>
    </a>
  );
}

export default DojoItemCard;
