import axios from "axios";
import Image from "next/image";
import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import { useSelector } from "react-redux";
import profile from "../../public/img/vector/Rectangle 14.png";
import MarketService from "../../services/MarketService";
import { errorNotification, successNotification } from "../../utils/helperFunctions";
function General() {
  const userProfile = useSelector((state) => state.auth.userProfile);
  
  const [tradeUrl, setTradeUrl] = useState(userProfile?.data?.steam_user_info?.trade_url)
  console.log('userProfile', userProfile)

  const [shopUrl, setShopUrl] = useState();
  const [data, setdata] = useState([]);

  const updateTrade = async () => {
    let res = await MarketService.updateTradeUrl(tradeUrl);
    console.log('res', res)
    if (res.status === 200) {
      successNotification("Trade URL updated successfully")
    }else{
      errorNotification("Trade URL update failed")
    }
  }



  function copyURL() {
    var input = document.getElementById("input");
    console.log('input', input)
    input.value = `https://skinsdojo.com/shop/${userProfile?.data?.id}`;
    // document.body.appendChild(input);
    // input.select();
    document.execCommand("copy");
    successNotification("Copied to clipboard")

    // document.body.removeChild(input);
  }

  return (
    <>
      <div className="col-xl-12">
        <div className="gene__content">
          <div className="gene__box mb-4">
            <div className="gene__title">
              <span>Steam Account</span>
              <p>
                <i className="fa-regular fa-circle-check"></i> You have
                successfully connected your Steam account!
              </p>
            </div>
            <div className="gene__text mt-4">
              <p>
              <img src={userProfile?.data?.steam_user_info?.avatar} alt="" style={{
                width: "50px",
                height: "50px",
              }} /> {userProfile?.data?.steam_user_info?.username}
              </p>
              <p className="fw-normal">
                Your Steam items are displayed on Dojo and you can use them in
                trading operations.{" "}
              </p>
            </div>
          </div>
          <div className="gene__box mb-4">
            <div className="gene__title border border-0">
              <span>My Dojo Shop URL</span>
              <span className="fs-6">Shop URL</span>
              <input autoComplete="off" type="text" name="url" id="input" value={`https://skinsdojo.com/shop/${userProfile?.data?.id}`} />
              <span
               onClick={copyURL} 
                style={{color: "#FFC700", cursor: "pointer"}}
                className="fs-6">
                <i className="fa-regular fa-copy"></i> Copy Shop URL
              </span>
            </div>
          </div>
          {/* <div className="gene__box mb-4">
            <div className="gene__title border border-0">
              <span>Steam API Key</span>
              <span className="fs-6">API key</span>
              <input type="password" name="url" id="url" />
              <button className="btn">
                <i className="fa-solid fa-check"></i> Apply
              </button>
            </div>
          </div> */}
          <div className="gene__box mb-4">
            <div className="gene__title border border-0">
              <span>Steam Trade URL</span>
              <p style={{color: "white"}} className="mb-4">
                We require your Steam Trade URL to send you trade offers for
                selling and withdrawing items.
              </p>
              <span className="fs-6">Enter your Trade URL</span>
              <input autoComplete="off" type="text" name="url" id="url" value={tradeUrl}
              onChange={(e) => setTradeUrl(e.target.value)}
              style={{
                fontSize: 14
              }}
              />
              {/* <span
                style={{color: "#FFC700", cursor: "pointer"}}
                className="fs-6">
                <i className="fa-regular fa-copy"></i> Get Trade URL
              </span> */}
              <button className="btn"
              onClick={updateTrade}
              >
                <i className="fa-solid fa-check"></i> Apply
              </button>
            </div>
          </div>
          {/* <div className="gene__box mb-4">
            <div className="gene__title border border-0">
              <span>Secure Access</span>
              <p style={{color: "white"}} className="mb-4">
                Enable two-factor authentication for your account.
              </p>
              <div className="mode">
                <span className="modeBtn"></span>
                <p style={{color: "white"}}>2FA enabled</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default General;
