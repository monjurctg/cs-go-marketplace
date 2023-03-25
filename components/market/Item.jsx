import Image from "next/image";
import {useRouter} from "next/router";
import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import dots from "../../public/images/dots.svg";
import lock from "../../public/img/lock.svg";
import {itemOnSaleApiCall} from "../../redux/actions/staticBarActions";
import {setSelectedItem} from "../../redux/actions/steamAction";
import MarketService from "../../services/MarketService";
import {
  calculatePercentage,
  errorNotification,
  successNotification,
} from "../../utils/helperFunctions";
import SellItem from "../process/sellItems/SellItem";
import ChangePrice from "../ui/ChangePrice";
import SimpleModal from "../ui/modal/SimpleModal";
// import up from "../../public/images/up.svg";
// import edit from "../../public/images/edit.svg";
// import disabled from "../../public/images/disable.svg";

function Item({item, module, pageData}) {
  // console.log('item', item)
  const [loading, setLoading] = useState(false);
  const {pathname} = useRouter();
  // console.log('pathname', pathname)
  const [price, setPrice] = useState();
  // console.log('price', price)
  let dispatch = useDispatch();
  const [modalShow, setmodalShow] = useState(false);
  const [selectValue, setselectValue] = useState(1);
  const [custom_price, setCustom_price] = useState(0);

  const changePriceValue = async () => {
    let data = {
      asset_id: item.asset_id,
      price: selectValue === 1 ? price : custom_price,
      // price: custom_price,
    };
    console.log("data", data);
    let res = await MarketService.updatePrice(data);
    console.log("res", res);
    if (res.status === 200) {
      successNotification("Price updated successfully");
      setmodalShow(false);
      setCustom_price();
      setselectValue(1);
      showModal(item.id);
      dispatch(itemOnSaleApiCall());
    } else {
      errorNotification("Something went wrong");
    }
  };

  const Router = useRouter();
  let showModal = (item) => {
    // console.log(
    //   'document.getElementById(item).getAttribute("data-id")',
    //   document.getElementById("show-" + item)
    // );
    if (
      item == document.getElementById("show-" + item).getAttribute("data-id")
    ) {
      let modal = document.getElementById("show-" + item);
      // console.log("modal", modal);

      if (modal.style.opacity == 0) modal.style.opacity = "1";
      else modal.style.opacity = "0";
    }
  };

  let singleUpdate = (
    <>
      <div className="modal__title">
        <div className="title">
          <h2>Update items</h2>
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

      <ChangePrice
        item={item}
        custom_price={custom_price}
        setCustom_price={setCustom_price}
        modalShow={modalShow}
        setselectValue={setselectValue}
        selectValue={selectValue}
        price={price}
        setPrice={setPrice}
        // custom_price
        // isCustom={isCustom}
        // onchangeRecommend={onchangeRecommend}
      />

      <div className="djSell__footerContent">
        <div className="fc__text">
          <p>
            Your item(s) will be listed for sale on our market for {"     "}
            <span style={{color: "#ffc700"}}>
              ${/* ${calculatePercentage(priceD, 5)} */}
              {/* {parseFloat(priceD).toFixed(2)} */}
            </span>
            <br />
            <br />
            If the sale is successful, you will get
            {"    "}
            <span style={{color: "#ffc700"}}>
              ${/* ${parseFloat(priceD).toFixed(2)} */}
            </span>
          </p>
        </div>
        <div className="fc__total">
          <p>Total Selling Price:</p>
          {/* <span>${calculatePercentage(priceD, 5)}</span> */}
        </div>
      </div>
      <p style={{color: "#9db4d3"}} className="mt-3">
        Please note that if you have selected more than one item, they will be
        put on sale separately. Money you will get for each sold item can be
        seen above.
      </p>
      <div className="modal__btn mt-5 text-center">
        <button className="btn-sells" onClick={changePriceValue}>
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Update"
          )}
        </button>
      </div>
    </>
  );

  return (
    <>
      <a className="mrkt_item" style={{cursor: "pointer"}}>
        <h6>
          {item?.asset_details?.details?.name?.slice(0, 20)}{" "}
          <span>
            {item?.asset_details?.details?.market_buy_country_restriction ??
              "FN"}
          </span>
        </h6>
        <div
          className=""
          onClick={() => {
            if (module === "itemOnSale" || module == "/featured/shop/[id]") {
              // console.log('first')
              Router.push(`/market/${item?.asset_details?.asset_id}`);
            } else {
              // console.log('2nd')

              Router.push(`${module}/${item?.asset_details?.asset_id}`);
            }
          }}>
          <Image
            src={
              item?.asset_details?.details?.icon_url ??
              item?.asset_details?.details?.icon_url
            }
            sizes="100vw"
            width={100}
            height={100}
            // layout="fill"
            objectFit="contain"
            alt=""
          />
          {/* <img src={item?.image ?? item?.img} alt="" /> */}
        </div>
        {/*<div className="dis__price">
        <div className="dis">
          <span>{item.discount ?? "12.00%"}</span>
          <p>${item.price}</p>
        </div>
        <div className="pinCode">
          <span>{item.pincode ?? "726372"}</span>
          {/* <p>
            <i className="fa-solid fa-lock lock-img"></i> 3D
          </p> */}
        {/* <div className="d-flex justify-content-end lock-img">
            <Image
              src="/img/lock.svg"
              alt=""
              style={{marginRight: 4}}
              height={15}
              width={13}
            />
            <p>3D</p>
            <div className="msg">
              <AiFillCaretUp className="up" />
              These item is currently trade locked by Steam,you will able to
              withdraw the item after trade lock expires
            </div>
          </div>
          {/*   */}
        {/* </div>
      </div> */}
        <div
          className={`d-flex ${
            item?.asset_details?.float_value !== null
              ? "justify-content-between"
              : "justify-content-end"
          } mb-1 align-items-center`}>
          {item?.asset_details?.float_value !== null ? (
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
                alignSelf: "center",
                marginTop: 5,
                color: " #9DB4D3",
              }}>
              {item?.asset_details?.float_value == 0
                ? "0.000"
                : item?.asset_details?.float_value == null
                ? "null"
                : item?.asset_details?.float_value?.toFixed(3)}
            </span>
          ) : (
            ""
          )}
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
          <div className="d-flex justify-content-end lock-img">
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
        <div className="d-flex justify-content-between position-relative">
          <p
            style={{
              fontWeight: 400,
              fontSize: 20,
              color: "#FFC700",
            }}>
            {/* <i className="fa-brands fa-steam-symbol"></i> */}$
            {calculatePercentage(item?.bot_price, item?.fee)}
          </p>
          <img
            src={dots.src}
            alt=""
            className="dots"
            style={{height: "auto", width: 16, marginBottom: 0}}
            onClick={() => {
              if (pathname != "/featured/shop/[id]") {
                // console.log('first', !pathname == "/featured/shop/[id]")

                showModal(item.id);
              }
            }}
          />
          {pathname != "/featured/shop/[id]" && (
            <div
              className="dots-show"
              id={"show-" + item.id}
              data-id={item?.id}>
              {/* <img src={"images/up.svg"} alt="" /> */}

              <div className="details">
                <div
                  onClick={() => {
                    setmodalShow(true);
                    // onItemSelect(item)
                  }}
                  className="d-flex show-div"
                  style={{
                    gap: 14,
                    alignItems: "center",
                    marginLeft: 7,
                    marginBottom: 0,
                  }}>
                  <img src={"images/edit.svg"} alt="" />
                  <p>Change price</p>
                </div>
                <div
                  className="d-flex show-div"
                  style={{
                    gap: 14,
                    marginLeft: 7,
                    alignItems: "center",
                  }}>
                  <img src={"images/disable.svg"} alt="" />
                  <p
                    onClick={async () => {
                      let res = await MarketService.delist(
                        item?.asset_details?.asset_id
                      );
                      // console.log('res', res)
                      if (res?.status == 200) {
                        // console.log('res', res)
                        dispatch(itemOnSaleApiCall());
                        showModal(item.id);
                        successNotification("Item delisted successfully");
                      }
                    }}>
                    Delist item
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <p className="d-flex align-items-center steam-p">
          <i className="me-2 fa-brands fa-steam-symbol"></i> Steam Price - $
          {parseFloat(item?.recommended_price).toFixed(2)}
        </p>
      </a>
      <SimpleModal
        pageData={pageData}
        setClose={setmodalShow}
        isShow={modalShow}
        body={singleUpdate}
      />
    </>
  );
}

export default Item;
