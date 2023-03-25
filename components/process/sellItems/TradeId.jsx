import Link from "next/link";
import React from "react";
import {useSelector} from "react-redux";
import Stopwatch from "./Stopwatch";

function TradeId({onNext, setClose}) {
  const selectedItem = useSelector((state) => state.steamRed.selectedItem);
  const userProfile = useSelector((state) => state.auth.userProfile);
  // console.log('userProfile?.data?.steam_user_info.steam_id', userProfile?.data?.steam_user_info.steam_id)
  return (
    <>
      <div className="modal__title">
        <div className="title">
          <h2>
            <i className="fa-solid fa-arrow-left"></i> Sell (
            {selectedItem?.length})
          </h2>
          {/* <p className="mod__id">Trade ID: 44345959889</p> */}
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="modal__content">
        <div className="modal__text">
          <Stopwatch countTime={600} />
          <p className="mt-2">
            Please deposit items from your Steam account to Dojo account by
            accepting the trades on Steam within 10 mins. After successful
            deposit, the process will continue automatically.
          </p>
        </div>
        <div className="modal__btn mt-5">
          <button className="h_btn" onClick={() => setClose(false)}>
            Cancel
          </button>
          <a
            href={`https://steamcommunity.com/profiles/${userProfile?.data?.steam_user_info.steam_id}/tradeoffers/`}>
            <button className="btn">Accept Trades on Steam</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default TradeId;
