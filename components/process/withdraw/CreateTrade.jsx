import React from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import MarketService from "../../../services/MarketService";
import {errorNotification} from "../../../utils/helperFunctions";
import TradeItemCards from "../../TradeItemCards";

function CreateTrade({onNext, setClose, filterSelected}) {
  let data = [];
  const selectedItem = useSelector((state) => state.steamRed.selectedItem);
  console.log("selectedItem in create ", selectedItem);

  const [err, setError] = useState({
    assetId: "",
    message: "",
  });
  // if (filterSelected !== undefined) {
  //   data = filterSelected().length > 0 ? filterSelected() : [];
  // }

  const createTradeSingle = async (assetId) => {
    const res = await MarketService.creadeTrade(assetId);
    // console.log(res, "creade trade res");
    if (res.status == 200) {
      const item = document.getElementById("trade-" + assetId);
      item.style.color = "#05BB59";
    } else {
      errorNotification(res.data.message);
      // console.log(res, "error");
      setError({
        assetId,
        message: "error",
      });
    }
  };
  // console.log(err, "erro");
  const createTradeMuliple = async () => {
    if (data.length > 0) {
      data.map(async (item) => {
        const res = await MarketService.creadeTrade(item.asset_id);
        if (res.status === 200) {
          const invItem = document.getElementById("trade-" + item.asset_id);

          invItem.style.color = "#05BB59";
        } else {
          return;
        }
      });
    }
    // onNext();
  };

  return (
    <>
      <div className="modal__title">
        <div className="title">
          <h2>Withdraw </h2>
          <p>
            To withdraw items, create trades, and accept each of them on Steam
            within 10 mins.
          </p>
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="modal__content">
        <span className="trade">Items in Trade: {selectedItem?.length}</span>
        <div className="container-lg">
          <div className="trade-items mb-5 d-grid align-items-center">
            {selectedItem?.map((item, index) => (
              <TradeItemCards
                key={index}
                createTradeSingle={createTradeSingle}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className="modal__btn">
          <button className="h_btn" onClick={() => setClose(false)}>
            Cancel
          </button>
          <button className="btn" onClick={createTradeMuliple}>
            Create All Trades{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateTrade;
