import React, { useState } from "react";
import Range from "./Range";
import back from "../public/images/back.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  ddsApiCall,
  itemOnSaleApiCall,
  mdsApiCall,
  sdsApiCall,
  setActiveMobileBar,
} from "../redux/actions/staticBarActions";
import FilterType from "./ui/mobilefilters/FilterType";
import { useRouter } from "next/router";
import { successNotification } from "../utils/helperFunctions";

function FilterSlider() {
  let dispatch = useDispatch();
  const mobileBar = useSelector((state) => state.staticBar.mobileBar);
  // console.log("mobileBar", mobileBar);
  const { pathname } = useRouter();
  const [priceValue, setpriceValue] = useState({
    min: 0,
    max: 0,
  });
  const [exteriorValue, setExteriorValue] = useState([]);
  const [floatValues, setFloatValue] = useState({ min: 0, max: 1 });

  // console.log('exteriorValue', exteriorValue)
  const [rarityValue, setRarityValue] = useState([]);

  // console.log('rarityValue', rarityValue)

  const [tradeValue, setTradeValue] = useState([]);

  let resetFilter = () => {
    // setpriceValue([]);
    if(document.getElementById("min")){
      document.getElementById("min").value = "";
      document.getElementById("max").value = "";
    }
    setExteriorValue([]);
    setRarityValue([]);
    setTradeValue([]);
    setpriceValue({
      min: "",
      max: "",
    });
    setFloatValue({ min: 0, max: 1 });
    dispatch(mdsApiCall());
    dispatch(sdsApiCall());

    dispatch(ddsApiCall());
    dispatch(itemOnSaleApiCall());
    successNotification("Filters Reset Successfully");
  };
  let filterDiv = "";

  switch (mobileBar) {
    case "Filters":
      filterDiv = (
        <FilterType
          exteriorValue={exteriorValue}
          setExteriorValue={setExteriorValue}
          rarityValue={rarityValue}
          setRarityValue={setRarityValue}
          tradeValue={tradeValue}
          setTradeValue={setTradeValue}
          priceValue={priceValue}
          setpriceValue={setpriceValue}
          floatValues={floatValues}
          setFloatValue={setFloatValue}
        />
      );
      break;
    case "Types":
      // code block
      filterDiv = (
        <>
          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              All
            </p>
          </div>
          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Knives
            </p>
          </div>
          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Gloves
            </p>
          </div>
          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Pistols
            </p>
          </div>
          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              SMGs
            </p>
          </div>
          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              MGs
            </p>
          </div>
          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Rifles
            </p>
          </div>

          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Sniper Rifles
            </p>
          </div>

          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Shotguns
            </p>
          </div>

          <div className="condition  mb-4">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Other
            </p>
          </div>
        </>
      );
      break;
    case "Sort by":
      filterDiv = (
        <>
          <div
            className="condition  mb-4"
            onClick={() => {
              if (pathname == "/dojo-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(ddsApiCall({ sort_by: "best_deals" }));
              } else if (pathname == "/steam-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(sdsApiCall({ sort_by: "best_deals" }));
              } else if (pathname == "/items-on-sale") {
                dispatch(itemOnSaleApiCall({ sort_by: "best_deals" }));
              } else {
                dispatch(mdsApiCall({ sort_by: "best_deals" }));
              }

              dispatch(setActiveMobileBar(null));
            }}
          >
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Best deals
            </p>
          </div>
          {pathname !== "/steam-inventory" && (
            <>
              <div
                className="condition  mb-4"
                onClick={(e) => {
                  // setSelectSortBy(" Price: High to low");
                  if (pathname == "/dojo-inventory") {
                    // console.log('datap[l;kl;k;lk')
                    dispatch(ddsApiCall({ sort_by: "price_high_to_low" }));
                  } else if (pathname == "/steam-inventory") {
                    // console.log('datap[l;kl;k;lk')
                    dispatch(sdsApiCall({ sort_by: "price_high_to_low" }));
                  } else if (pathname == "/items-on-sale") {
                    dispatch(
                      itemOnSaleApiCall({ sort_by: "price_high_to_low" })
                    );
                  } else {
                    dispatch(mdsApiCall({ sort_by: "price_high_to_low" }));
                  }
                  dispatch(setActiveMobileBar(null));
                }}
              >
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>

                <p
                  className="p"
                  style={{
                    marginLeft: 45,
                    fontSize: 16,
                    fontWeight: 400,
                    paddingTop: 6,
                  }}
                >
                  Price: High to low
                </p>
              </div>
              <div
                className="condition  mb-4"
                onClick={(e) => {
                  // setSelectSortBy("Price: Low to high");
                  if (pathname == "/dojo-inventory") {
                    // console.log('datap[l;kl;k;lk')
                    dispatch(ddsApiCall({ sort_by: "price_low_to_high" }));
                  } else if (pathname == "/steam-inventory") {
                    // console.log('datap[l;kl;k;lk')
                    dispatch(ddsApiCall({ sort_by: "price_low_to_high" }));
                  } else if (pathname == "/items-on-sale") {
                    dispatch(
                      itemOnSaleApiCall({ sort_by: "price_low_to_high" })
                    );
                  } else {
                    dispatch(mdsApiCall({ sort_by: "price_low_to_high" }));
                  }
                  dispatch(setActiveMobileBar(null));
                }}
              >
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>

                <p
                  className="p"
                  style={{
                    marginLeft: 45,
                    fontSize: 16,
                    fontWeight: 400,
                    paddingTop: 6,
                  }}
                >
                  Price: Low to high
                </p>
              </div>
            </>
          )}

          <div
            className="condition  mb-4"
            onClick={(e) => {
              // setSelectSortBy("Float: High to low");
              if (pathname == "/dojo-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(ddsApiCall({ sort_by: "float_high_to_low" }));
              } else if (pathname == "/steam-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(sdsApiCall({ sort_by: "float_high_to_low" }));
              } else if (pathname == "/items-on-sale") {
                dispatch(itemOnSaleApiCall({ sort_by: "float_high_to_low" }));
              } else {
                dispatch(mdsApiCall({ sort_by: "float_high_to_low" }));
              }
              dispatch(setActiveMobileBar(null));
            }}
          >
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Float: High to low
            </p>
          </div>
          <div
            className="condition  mb-4"
            onClick={(e) => {
              // setSelectSortBy("Float: Low to high");
              if (pathname == "/dojo-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(ddsApiCall({ sort_by: "float_low_to_high" }));
              } else if (pathname == "/steam-inventory") {
                // console.log('datap[l;kl;k;lk')
                dispatch(sdsApiCall({ sort_by: "float_low_to_high" }));
              } else if (pathname == "/items-on-sale") {
                dispatch(itemOnSaleApiCall({ sort_by: "float_low_to_high" }));
              } else {
                dispatch(mdsApiCall({ sort_by: "float_low_to_high" }));
              }
              dispatch(setActiveMobileBar(null));
            }}
          >
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <p
              className="p"
              style={{
                marginLeft: 45,
                fontSize: 16,
                fontWeight: 400,
                paddingTop: 6,
              }}
            >
              Float: Low to high
            </p>
          </div>
        </>
      );
    default:
    // code block
  }
  let filterApi = async (type, value) => {
    // console.log("priceValue", priceValue);
    let data = {};
    // // console.log('tradeValue', tradeValue.length > 0)
    if (priceValue?.min?.length >= 1 && priceValue?.max?.length >= 1) {
      // console.log('priceValue?.min?.length', priceValue?.min?.length)
      data.price = [priceValue.min, priceValue.max];
    }
    if (exteriorValue?.length > 0) {
      data.exterior = exteriorValue;
    }
    if (rarityValue?.length > 0) {
      data.rarity = rarityValue;
    }
    if (tradeValue?.length > 0) {
      data.trade_lock = tradeValue;
    }
    if (floatValues?.min >= 0 && floatValues?.max <= 1) {
      data.float = [floatValues.min.toFixed(2), floatValues.max.toFixed(2)];
    }

    // console.log("datasss", data);
    if (pathname == "/dojo-inventory") {
      // console.log('datap[l;kl;k;lk')
      dispatch(ddsApiCall(data));
    } else if (pathname == "/steam-inventory") {
      // console.log('datap[l;kl;k;lk')
      dispatch(sdsApiCall(data));
    } else if (pathname == "/items-on-sale") {
      dispatch(itemOnSaleApiCall(data));
    } else {
      dispatch(mdsApiCall(data));
    }
    dispatch(setActiveMobileBar(null));
    // document.getElementById("min").value = "";
    // document.getElementById("max").value = "";
    setExteriorValue([]);
    setRarityValue([]);
    setTradeValue([]);
    setpriceValue({
      min: "",
      max: "",
    });
    // console.log('price', price)
  };

  <FilterType />;
  return (
    <div className={mobileBar ? "d-block" : "d-none"}>
      <div className={mobileBar ? " responsive" : ""}>
        <div className="filter d-flex justify-content-between">
          <div className="d-flex" style={{ gap: 10 }}>
            <Image
              src={back}
              alt=""
              onClick={() => dispatch(setActiveMobileBar(null))}
            />
            <label>{mobileBar} </label>
          </div>
          <span onClick={resetFilter}>
            <i className="fa-solid fa-xmark"></i> Reset filters
          </span>
        </div>
        <hr />
        {filterDiv}
        {mobileBar !== "Sort by" && (
          <div
            style={{
              marginTop: 70,
            }}
          >
            <button
              className="btn py-3 mt-4 apply-btn"
              style={{
                width: "106px",
              }}
              onClick={filterApi}
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterSlider;
