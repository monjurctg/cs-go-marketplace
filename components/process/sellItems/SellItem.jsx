import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  ddsApiCall,
  setMiddleLoader,
  setRecomPrice,
} from "../../../redux/actions/staticBarActions";
import {
  setPriceValue,
  setRecomendedPrice,
} from "../../../redux/actions/steamAction";
import {SET_MIDDLE_LOADER} from "../../../redux/types";
import MarketService from "../../../services/MarketService";

function SellItem({
  item,
  discount,
  lDiscount,
  pageData,

  // priceValue,
}) {
  // console.log(item, "item from item on sell");
  console.log("lDiscount", lDiscount);

  let dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.steamRed.selectedItem);
  // console.log('selectedItem in Sell item', selectedItem)
  // console.log('sItem', item)

  // console.log("sellitam");
  const [price, setPrice] = useState(0);
  // console.log('price', price)
  const priceValue = useSelector((state) => state.steamRed.priceValue);

  const [show, setshow] = useState(false);
  const [selectValue, setselectValue] = useState(1);
  const [custom_price, setCustom_price] = useState(0);
  const [pLoader, setpLoader] = useState(false);
  // console.log('  priceValue >', priceValue )

  let getRecommnededPrice = async () => {
    let asset_id_arr = selectedItem?.map((i) => i?.asset?.asset_id);
    setpLoader(true);

    let res = await MarketService.recomendedPrice(asset_id_arr);
    // console.log('recommended', res?.data)
    if (res.status === 200) {
      setpLoader(false);
      setPrice(
        res?.data?.data?.filter((i) => i?.asset_id == item?.asset?.asset_id)[0]
          ?.recommended_price
      );

      dispatch(setPriceValue([...res?.data?.data]));
      let recomPrice = res?.data?.data?.map((i) => i?.recommended_price);
      // console.log('recomPrice', recomPrice)
      dispatch(setRecomendedPrice([...recomPrice]));
    }
  };
  useEffect(() => {
    getRecommnededPrice();
  }, []);

  return (
    <div className="djSell_box mb-4">
      <div className="djPro__img">
        <div className="dj__img">
          <img src={item?.description?.icon_url} alt="" />
        </div>
        <span className="d-block">Factory New (FN)</span>
        <p>{item?.description?.name}</p>
      </div>
      <div className="djPro__content">
        <div className="dj__sellOption w-100 mb-4 flex-column flex-md-row align-items-start align-items-md-center">
          <div className="dj__p position-relative">
            <p>
              Set price for the item
              <span
                onMouseEnter={() => setshow(true)}
                onMouseLeave={() => setshow(false)}>
                <i
                  className="fa-regular fa-circle-question"
                  style={{
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}></i>
              </span>
            </p>
            <div className="dj__op">
              <select
                onChange={(e) => {
                  // console.log("e.target.value", e.target.value);
                  if (e.target.value == 2) {
                    let arr = priceValue?.filter(
                      (i) => i?.asset_id !== item?.asset?.asset_id
                    );
                    dispatch(
                      setPriceValue([
                        ...arr,
                        {
                          asset_id: item?.asset?.asset_id,
                          recommended_price: parseInt(0),
                        },
                      ])
                    );
                  } else {
                    // console.log('price', price)
                    let arr = priceValue?.filter(
                      (i) => i?.asset_id !== item?.asset?.asset_id
                    );
                    // console.log('arr', arr)
                    dispatch(
                      setPriceValue([
                        ...arr,
                        {
                          asset_id: item?.asset?.asset_id,
                          recommended_price: price,
                        },
                      ])
                    );
                  }
                  // onchangeRecommend(e, item?.asset_id);
                  setCustom_price(0);
                  // setpriceValue([]);
                  setselectValue(e.target.value);
                }}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  color: "white",
                  outline: "none",
                }}>
                <option
                  style={{
                    background: "black",
                    width: "100%",
                    paddingBottom: "20px",
                  }}
                  value="0">
                  Select price
                </option>
                <option
                  style={{
                    background: "black",
                    width: "100%",
                    paddingBottom: "20px",
                  }}
                  value="1"
                  selected>
                  Recommended
                </option>
                <option
                  style={{
                    background: "black",
                    width: "100%",
                  }}
                  value="2">
                  Custom
                </option>
              </select>
            </div>
            <div
              className="question"
              style={{
                display: show ? "block" : "none",
              }}
              id={"q" + item?.id}>
              <p className="mb-2">Recommended</p>
              <span className="">
                Our system takes into account the market value of an item and
                calculates a suggested price to help you sell the item faster
              </span>
              <p className="my-2">Custom</p>

              <span>You can choose your own price</span>
            </div>
          </div>
          <div className="dj__p">
            <p>Pre-set price</p>
            <div className="dj__op">
              {selectValue == 2 ? (
                <span>Custom price ${custom_price}</span>
              ) : (
                <span>
                  {pLoader ? (
                    <div
                      className="spinner-border text-secondary"
                      role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    `Recommended ${price}`
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="dj__sellOption justify-content-between w-100 align-items-center">
          <div className="dj__p">
            <p>Selling price</p>
            <div className="">
              {selectValue == 1 ? (
                <span className="sellWant">
                  {pLoader ? (
                    <div
                      className="spinner-border text-secondary"
                      role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "$" + `${price}`
                  )}
                </span>
              ) : (
                <input
                  type="number"
                  name="custom_price"
                  id=""
                  value={custom_price}
                  onChange={(e) => {
                    // console.log('priceValue sell', priceValue)

                    let value = [
                      {
                        asset_id: item?.asset?.asset_id,
                        recommended_price: parseInt(e.target.value),
                      },
                    ];
                    if (priceValue?.length > 0) {
                      // conssole.log('first', first)
                      if (
                        priceValue?.filter(
                          (i) => i.asset_id == value[0]?.asset_id
                        )
                      ) {
                        let aaa = priceValue?.filter(
                          (i) => i.asset_id !== value[0]?.asset_id
                        );
                        aaa.push(value[0]);
                        // console.log("aaa", aaa);
                        value = [...aaa];
                      } else {
                        value = [...priceValue, value[0]];
                      }
                    }
                    // console.log('value', value)
                    dispatch(setPriceValue(value));

                    // dispatch(()=>setRecomPrice(value));
                    // console.log("recomPrice inside", recomPrice);
                    // console.log(value);
                    setCustom_price(parseInt(e.target.value));
                  }}
                  style={{
                    border: "1px solid #2c1f59",
                    borderRadius: 8,
                    padding: 12,
                    cursor: "pointer",
                    background: "none",
                    width: 100,
                    color: "white",
                  }}
                />
              )}
            </div>
          </div>
          <div className="dj__p">
            <p>Fee</p>
            <div className="">
              <span className="sellWant">
                {lDiscount ? (
                  <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  `${discount}%`
                )}
              </span>
            </div>
          </div>
          <div className="dj__p">
            <p>You’ll get</p>
            <div className="">
              {selectValue == 1 ? (
                <span className="sellNeed">
                  {pLoader ? (
                    <div
                      className="spinner-border text-secondary"
                      role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "$" + `${price}`
                  )}
                </span>
              ) : (
                <span className="sellNeed">${custom_price}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellItem;
