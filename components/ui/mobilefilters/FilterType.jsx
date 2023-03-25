import { useRouter } from "next/router";
import React, { useState } from "react";
import InputRange from "react-input-range";
import { useDispatch } from "react-redux";
import { mdsApiCall } from "../../../redux/actions/staticBarActions";
import Range from "../../Range";

function FilterType({
  exteriorValue,
  setExteriorValue,
  rarityValue,
  setRarityValue,
  tradeValue,
  setTradeValue,
  priceValue,
  setpriceValue,
  floatValues,
  setFloatValue,
}) {
  const up = <i className="fa-solid fa-chevron-up"> </i>;
  const down = <i className="fa-solid fa-chevron-down"></i>;
  const { pathname } = useRouter();
  let dispatch = useDispatch();
  const [filters, setfilters] = useState([]);

  let changeFilter = (data) => {
    // console.log('filters.filter(filter=>filter !== data', filters?.includes(data))
    if (!filters?.includes(data)) {
      setfilters([...filters, data]);
    } else setfilters([...filters.filter((filter) => filter !== data)]);
  };

  // console.log('filters', filters)
  let changeExterior = (data) => {
    let arr = exteriorValue;
    if (arr.filter((i) => i == data)?.length > 0) {
      arr = arr.filter((item) => item !== data);
    } else {
      arr.push(data);
      // console.log('arr', arr)
    }
    setExteriorValue([...arr]);
  };

  let changeRarityValue = (data) => {
    let arr = rarityValue;
    if (arr.filter((i) => i == data)?.length > 0) {
      arr = arr.filter((item) => item !== data);
    } else {
      arr.push(data);
    }
    setRarityValue([...arr]);
  };

  function handleChange(value) {
    // console.log('value', value)
    setFloatValue(value);
  }
  let changeTradeValue = (data) => {
    // console.log('data', data)
    let arr = tradeValue;
    // console.log("arr", arr);
    if (arr.filter((i) => i == data)?.length > 0) {
      arr = arr.filter((item) => item !== data);
    } else {
      arr.push(data);
      // console.log("arr", arr);
    }
    setTradeValue([...arr]);
  };
  // console.log('tradeValue', tradeValue)
  // console.log("filters", filters);
  let price = (
    <div
      className={
        filters?.includes("price")
          ? "d-flex justify-content-between align-items-center"
          : "d-none"
      }
    >
      <input
        type={"number"}
        placeholder="Min"
        id="min"
        className="price-filter"
        // value={priceValue?.min}
        onChange={(e) => {
          if (!e.target.value) {
            // console.log('e.target.value', e.target.value)

            setpriceValue({ ...priceValue, min: 0 });
          } else setpriceValue({ ...priceValue, min: e.target.value });
        }}
      />{" "}
      <p style={{ marginTop: 16 }}>to</p>
      <input
        type={"number"}
        placeholder="Max"
        id="max"
        className="price-filter"
        // value={priceValue?.max}
        onChange={(e) => {
          if (!e.target.value) {
            // console.log('e.target.value', e.target.value)

            setpriceValue({ ...priceValue, max: 0 });
          } else setpriceValue({ ...priceValue, max: e.target.value });
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
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
          value={0}
          onChange={(e) => {
            changeExterior(e.target.value);
          }}
        >
          All
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Factory New"}
            onChange={(e) => {
              changeExterior(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Factory New
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Minimal Wear"}
            two="exteriorValue"
            onChange={(e) => changeExterior(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Minimal Wear
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Field-Tested"}
            onChange={(e) => changeExterior(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Field-Tested
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Well-Worn"}
            onChange={(e) => changeExterior(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Well-Worn
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Battle-Scarred"}
            onChange={(e) => changeExterior(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Battle-Scarred
        </p>
      </div>
    </div>
  );
  // let extra = (
  //   <div className={filters?.includes("extra") ? "d-block" : "d-none"}>
  //     <div className="condition  mb-4">
  //       <label className="checkbox-container">
  //         <input type="checkbox" />
  //         <span className="checkmark"></span>
  //       </label>

  //       <p
  //         className="p"
  //         style={{
  //           marginLeft: 45,
  //           fontSize: 15,
  //           fontWeight: 400,
  //           paddingTop: 7,
  //         }}
  //       >
  //         StatTrak™
  //       </p>
  //     </div>
  //   </div>
  // );
  let rarity = (
    <div className={filters?.includes("rarity") ? "d-block" : "d-none"}>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Consumer Grade"}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Consumer Grade
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Industrial Grade"}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Industrial Grade
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Mil-Spec Grade"}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Mil-Spec Grade
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Restricted"}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Restricted
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Classified"}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Classified
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Convert"}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Covert
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"Contraband"}
            onChange={(e) => {
              changeRarityValue(e.target.value);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 15,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
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
            onChange={(e) => changeTradeValue(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 13,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          Without Trade Lock
        </p>
      </div>
      <div className="condition  mb-4">
        <label className="checkbox-container">
          <input
            type="checkbox"
            value={"With Trade Lock"}
            onChange={(e) => changeTradeValue(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <p
          className="p"
          style={{
            marginLeft: 45,
            fontSize: 13,
            fontWeight: 400,
            paddingTop: 6,
          }}
        >
          With Trade Lock
        </p>
      </div>
    </div>
  );

  let floatValue = (
    <div
      className={filters?.includes("floatValue") ? "d-block mt-2" : "d-none"}
    >
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
    <div>
      {pathname !== "/steam-inventory" && (
        <>
          <div className="filter">
            <label
              htmlFor="1"
              className="d-flex justify-content-between align-items-center"
              onClick={() => changeFilter("price")}
              // onClick={() => changeFilter("price")}
            >
              Price <span>{filters === "price" ? up : down}</span>
            </label>
            <div
              className={`price-div ${filters?.includes("price") && "active"}`}
            >
              {price}
            </div>
          </div>
          <hr />
        </>
      )}

      <div className="filter" onClick={() => changeFilter("exterior")}>
        <label
          htmlFor="3"
          className="d-flex justify-content-between align-items-center"
        >
          Exterior <span>{filters?.includes("exterior") ? up : down}</span>
        </label>
        <div
          className={`price-div ${
            filters?.includes("exterior") && "active mb-"
          }`}
        >
          {exterior}
        </div>
      </div>
      {/* <hr /> */}

      {/* <div className="filter">
<label
  htmlFor="4"
  className="d-flex justify-content-between align-items-center"
>
  Stickers{" "}
  <span>
    <i className="fa-solid fa-chevron-down"></i>
  </span>
</label>
</div> */}
      <hr />

      {/* <div className="filter" onClick={() => changeFilter("extra")}>
        <label
          htmlFor="3"
          className="d-flex justify-content-between align-items-center"
        >
          Extra <span>{filters === "extra" ? up : down}</span>
        </label>
        <div
          className={`price-div ${filters?.includes("extra") && "active mb-3"}`}
        >
          {extra}
        </div>
      </div>
      <hr /> */}

      <div className="filter" onClick={() => changeFilter("rarity")}>
        <label
          htmlFor="3"
          className="d-flex justify-content-between align-items-center"
        >
          Rarity <span>{filters === "rarity" ? up : down}</span>
        </label>
        <div
          className={`price-div ${
            filters?.includes("rarity") && "active mb-3"
          }`}
        >
          {rarity}
        </div>
      </div>
      <hr />

      <div className="filter" onClick={() => changeFilter("tradeLock")}>
        <label
          htmlFor="3"
          className="d-flex justify-content-between align-items-center"
        >
          Trade lock <span>{filters === "tradeLock" ? up : down}</span>
        </label>
        <div
          className={`price-div ${
            filters?.includes("tradeLock") && "active mb-3"
          }`}
        >
          {tradeLock}
        </div>
      </div>
      <hr />

      <div
        className="filter"
        onClick={() => {
          changeFilter("floatValue");
          let min = document.getElementsByClassName("input-range__label--min");
          console.log('min[0]', min[0])
          let max = document.getElementsByClassName("input-range__label--max");
          min[0].style.display = "none";
          max[0].style.display = "none";
        }}
      >
        <label
          htmlFor="3"
          className="d-flex justify-content-between align-items-center  mb-4"
        >
          Float value <span>{filters === "floatValue" ? up : down}</span>
        </label>
        <div
          className={`price-div ${
            filters?.includes("floatValue") && "active mb-5"
          }`}
        >
          {floatValue}
        </div>
      </div>
    </div>
  );
}

export default FilterType;
