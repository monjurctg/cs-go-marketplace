import {filter} from "dom7";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import InputRange from "react-input-range";
import {useDispatch, useSelector} from "react-redux";
import {
  ddsApiCall,
  itemOnSaleApiCall,
  mdsApiCall,
  sdsApiCall,
} from "../../redux/actions/staticBarActions";
import {successNotification} from "../../utils/helperFunctions";
import Range from "../Range";

function SiderBar() {
  const up = <i className="fa-solid fa-chevron-up"> </i>;
  const down = <i className="fa-solid fa-chevron-down"></i>;
  const customClassNames = {
    track: "custom-input-range-track",
    activeTrack: "custom-input-range-track--active",
    slider: "custom-input-range-slider",
    labelContainer: "custom-input-range-label-container",
  };

  // const mdsData = useSelector((state) => state.staticBar.mdsData)
  // console.log('mdsData', mdsData)
  let dispatch = useDispatch();
  const {pathname} = useRouter();

  // console.log("pathname", pathname == "/dojo-inventory");
  const [filters, setfilters] = useState([]);
  const [priceValue, setpriceValue] = useState({
    min: "",
    max: "",
  });

  const [floatValues, setFloatValue] = useState({min: 0, max: 1});
  console.log("floatValues", floatValues);
  const [exteriorValue, setExteriorValue] = useState([]);

  // console.log('exteriorValue', exteriorValue)
  const [rarityValue, setRarityValue] = useState([]);

  // console.log('rarityValue', rarityValue)

  const [tradeValue, setTradeValue] = useState([]);

  // useEffect(() => {
  //   let min = document.getElementById("input-range__label--min");
  //   // console.log("min", min);
  // }, [floatValues]);

  let changeFilter = (data) => {
    // console.log('filters.filter(filter=>filter !== data', filters?.includes(data))
    if (!filters?.includes(data)) {
      setfilters([...filters, data]);
    } else setfilters([...filters.filter((filter) => filter !== data)]);
  };

  let resetFilter = () => {
    if (document.getElementById("min")) {
      document.getElementById("min").value = "";
      document.getElementById("max").value = "";
    }
    // document.getElementById("min").value = "";
    // document.getElementById("max").value = "";
    setfilters([]);
    setExteriorValue([]);
    setRarityValue([]);
    setTradeValue([]);
    setpriceValue({
      min: "",
      max: "",
    });
    setFloatValue({min: 0, max: 1});
    dispatch(mdsApiCall());
    dispatch(ddsApiCall());
    dispatch(itemOnSaleApiCall());
    successNotification("Filters Reset Successfully");
  };

  function handleChange(value) {
    // console.log('value', value)
    setFloatValue(value);
  }
  // console.log('filters', filters)
  let arr = exteriorValue;
  let changeExterior = (data) => {
    if (arr.filter((i) => i == data)?.length > 0) {
      arr = arr.filter((item) => item !== data);
    } else {
      arr.push(data);
      // console.log('arr', arr)
    }
    setExteriorValue([...arr]);
  };
  let rarityArr = rarityValue;

  let changeRarityValue = (data) => {
    if (rarityArr.filter((i) => i == data)?.length > 0) {
      rarityArr = rarityArr.filter((item) => item !== data);
    } else {
      rarityArr.push(data);
    }
    setRarityValue([...rarityArr]);
  };
  let tradeArr = tradeValue;
  let changeTradeValue = (data) => {
    // console.log('data', data)

    // console.log("arr", arr);
    if (tradeArr.filter((i) => i == data)?.length > 0) {
      tradeArr = tradeArr.filter((item) => item !== data);
    } else {
      tradeArr.push(data);
      // console.log("arr", arr);
    }
    setTradeValue([...tradeArr]);
  };
  // console.log('tradeValue', tradeValue)
  let filterApi = async (type, value) => {
    // console.log("priceValue", priceValue);

    let data = {};
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
    // console.log('data', floatValues?.min)

    // console.log("datasss", data);
    if (pathname == "/dojo-inventory") {
      // console.log('datap[l;kl;k;lk')
      dispatch(ddsApiCall(data));
    } else if (pathname == "/items-on-sale") {
      dispatch(itemOnSaleApiCall(data));
    } else if (pathname == "/steam-inventory") {
      dispatch(sdsApiCall(data));
    } else {
      dispatch(mdsApiCall(data));
    }
    // console.log('price', price)
  };

  // console.log('priceValue', priceValue)
  let price = (
    <div
      className={
        filters?.includes("price")
          ? "d-flex justify-content-between align-items-center"
          : "d-none"
      }>
      <input
        type={"number"}
        placeholder="Min"
        className="price-filter"
        // value={priceValue.min}
        id="min"
        onChange={(e) => {
          // if (!e.target.value) {
          //   // console.log('e.target.value', e.target.value)

          //   setpriceValue({ ...priceValue, min: 0 });
          // } else
          setpriceValue({...priceValue, min: e.target.value});
        }}
      />{" "}
      <p style={{marginTop: 16}}>to</p>
      <input
        type={"number"}
        placeholder="Max"
        // value={priceValue.max}
        className="price-filter"
        id="max"
        onChange={(e) => {
          if (!e.target.value) {
            // console.log('e.target.value', e.target.value)

            setpriceValue({...priceValue, max: 0});
          } else setpriceValue({...priceValue, max: e.target.value});
        }}
      />
    </div>
  );

  let exterior = (
    <div className={filters?.includes("exterior") ? "d-block" : "d-none"}>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}
          value={0}
          onChange={(e) => {
            changeExterior(e.target.value);
          }}>
          All
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Factory New"}
            checked={arr.includes("Factory New")}
            onChange={(e) => {
              changeExterior(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Factory New
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Minimal Wear"}
            checked={arr.includes("Minimal Wear")}
            two="exteriorValue"
            onChange={(e) => changeExterior(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Minimal Wear
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={arr.includes("Field-Tested")}
            value={"Field-Tested"}
            onChange={(e) => changeExterior(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Field-Tested
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Well-Worn"}
            checked={arr.includes("Well-Worn")}
            onChange={(e) => changeExterior(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Well-Worn
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Battle-Scarred"}
            checked={arr.includes("Battle-Scarred")}
            onChange={(e) => changeExterior(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Battle-Scarred
        </p>
      </div>
    </div>
  );
  let extra = (
    <div className={filters?.includes("extra") ? "d-block" : "d-none"}>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          StatTrak™
        </p>
      </div>
    </div>
  );
  let rarity = (
    <div className={filters?.includes("rarity") ? "d-block" : "d-none"}>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Consumer Grade"}
            checked={rarityArr.includes("Consumer Grade")}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Consumer Grade
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Industrial Grade"}
            checked={rarityArr.includes("Industrial Grade")}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Industrial Grade
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Mil-Spec Grade"}
            checked={rarityArr.includes("Mil-Spec Grade")}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Mil-Spec Grade
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Restricted"}
            checked={rarityArr.includes("Restricted")}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Restricted
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Classified"}
            checked={rarityArr.includes("Classified")}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Classified
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Convert"}
            checked={rarityArr.includes("Convert")}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Covert
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Contraband"}
            checked={rarityArr.includes("Contraband")}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 50,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Contraband
        </p>
      </div>
    </div>
  );
  let tradeLock = (
    <div className={filters?.includes("tradeLock") ? "d-block" : "d-none"}>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Without Trade Lock"}
            checked={tradeArr.includes("Without Trade Lock")}
            onChange={(e) => changeTradeValue(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 58,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          Without Trade Lock
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={tradeArr.includes("With Trade Lock")}
            value={"With Trade Lock"}
            onChange={(e) => changeTradeValue(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 58,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 7,
          }}>
          With Trade Lock
        </p>
      </div>
    </div>
  );

  let floatValue = (
    <div
      className={filters?.includes("floatValue") ? "d-block mt-4" : "d-none"}>
      {/* <Range min="0.0" max="1.0" onChange={({min, max}) => {

        console.log(min)
        // setFloatValue([min, max]);
      }}  /> */}

      <InputRange
        draggableTrack
        minValue={0}
        maxValue={1}
        step={0.1}
        allowSameValues={true}
        formatLabel={(value) => value.toFixed(2)}
        // classNames={customClassNames}
        // allowOverlap={true}
        // formatLabel={() => ''}
        value={floatValues}
        onChange={handleChange}
      />
    </div>
  );
  return (
    <>
      <div className="mr__filter">
        <div
          className="filter"
          style={{
            padding: filters?.includes("price") && "18px 0px 18px 0px",
          }}>
          <label>
            Filters{" "}
            <span onClick={resetFilter}>
              <i className="fa-solid fa-xmark"></i> Reset filters
            </span>
          </label>
        </div>
        {pathname !== "/steam-inventory" && (
          <div
            className="filter"
            style={{
              padding: filters === "price" && "18px 0px 0px 0px",
            }}>
            <label
              htmlFor="1"
              className="d-flex justify-content-between align-items-center"
              onClick={() => changeFilter("price")}>
              Price{" "}
              <span
              // onClick={() => changeFilter("price")}
              >
                {filters === "price" ? up : down}
              </span>
            </label>
            <div
              className={`price-div ${filters?.includes("price") && "active"}`}>
              {price}
            </div>
          </div>
        )}

        <div
          className="filter"
          style={{
            padding: filters?.includes("exterior") && "18px 0px 0px 0px",
          }}>
          <label
            onClick={() => changeFilter("exterior")}
            htmlFor="3"
            className="d-flex justify-content-between align-items-center">
            Exterior <span>{filters?.includes("exterior") ? up : down}</span>
          </label>
          <div
            className={`price-div ${
              filters?.includes("exterior") && "active mb-"
            }`}>
            {exterior}
          </div>
        </div>
        {/* <div className="filter">
          <input type="radio" name="accordian" id="4" />
          <label
            htmlFor="4"
            className="d-flex justify-content-between align-items-center">
            Stickers{" "}
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </label>
          <div className="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              veritatis soluta natus debitis amet aliquid?.
            </p>
          </div>
        </div> */}
        {/* <div className="filter"
          style={{
            padding: filters?.includes("extra") &&  "18px 0px 0px 0px",
          }}
        >
          <label
            htmlFor="3"
            onClick={() => changeFilter("extra")}
            className="d-flex justify-content-between align-items-center">
            Extra <span>{filters === "extra" ? up : down}</span>
          </label>
          <div
            className={`price-div ${
              filters?.includes("extra") && "active mb-3"
            }`}>
            {extra}
          </div>
        </div> */}
        <div
          className="filter"
          style={{
            padding: filters?.includes("rarity") && "18px 0px 0px 0px",
          }}>
          <label
            htmlFor="3"
            onClick={() => changeFilter("rarity")}
            className="d-flex justify-content-between align-items-center">
            Rarity <span>{filters === "rarity" ? up : down}</span>
          </label>
          <div
            className={`price-div ${
              filters?.includes("rarity") && "active mb-3"
            }`}>
            {rarity}
          </div>
        </div>
        <div
          className="filter"
          style={{
            padding: filters?.includes("tradeLock") && "18px 0px 0px 0px",
          }}>
          <label
            htmlFor="3"
            onClick={() => changeFilter("tradeLock")}
            className="d-flex justify-content-between align-items-center">
            Trade lock <span>{filters === "tradeLock" ? up : down}</span>
          </label>
          <div
            className={`price-div ${
              filters?.includes("tradeLock") && "active mb-3"
            }`}>
            {tradeLock}
          </div>
        </div>

        <div
          className="filter"
          style={{
            padding: filters?.includes("floatValue") && "18px 0px 22px 0px",
          }}>
          <label
            onClick={() => {
              changeFilter("floatValue");

              let min = document.getElementsByClassName(
                "input-range__label--min"
              );
              let max = document.getElementsByClassName(
                "input-range__label--max"
              );
              min[0].style.display = "none";
              max[0].style.display = "none";
              // console.log('min',min[0] )
            }}
            htmlFor="3"
            className="d-flex justify-content-between align-items-center">
            Float value <span>{filters === "floatValue" ? up : down}</span>
          </label>
          <div
            className={`price-div ${
              filters?.includes("floatValue") && "active mb-1"
            }`}>
            {floatValue}
          </div>
        </div>
        <button className="btn py-3 mt-4 apply-btn" onClick={filterApi}>
          Apply
        </button>
      </div>
    </>
  );
}

export default SiderBar;
