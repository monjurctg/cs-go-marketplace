import React from "react";
import AcceptTradeItemCard from "../../AcceptTradeItemCard";

function AcceptAllTrade({onNext, setClose}) {
  return (
    <div>
      <div className="modal__title">
        <div className="title">
          <h2>
            <i className="fa-solid fa-arrow-left me-1 fs-3"></i> Withdraw{" "}
          </h2>
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
        <span className="trade">Items in Trade: 3</span>
        <div className="market__items mb-5 d-grid align-items-center">
          <AcceptTradeItemCard />
        </div>
        <div className="modal__btn">
          <button className="h_btn" onClick={() => setClose(false)}>
            Cancel
          </button>
          <button className="btn" onClick={onNext}>
            Accept All Trades
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcceptAllTrade;
