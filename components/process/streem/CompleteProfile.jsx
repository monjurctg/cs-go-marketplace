import React, {useState} from "react";
import Text from "../../ui/custom_tag/Text";
import CommonBtn from "../../ui/CommonBtn";

import {Router, useRouter} from "next/router";

import MarketService from "../../../services/MarketService";
import {useDispatch} from "react-redux";

function CompleteProfile({setCompleteModalShow}) {
  const router = useRouter();
  const [trade_url, setTrade_url] = useState();

  // let di

  const dispatch = useDispatch();
  // console.log(userProfile, "userProfile");

  let authentication = async () => {
    let res = await MarketService.updateTradeUrl(trade_url);

    if (res.status === 200) {
      setCompleteModalShow(false);

      // router.push(res.data[0]);
      router.push("/market");
    }
  };

  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        Complete your profile
      </Text>
      <div className="process-body">
        <div className="text">
          <div className="p mb-5">
            <p className="mb-4">
              To be able to receive trade offers on Dojo through Steam, you must
              enter your Trade URL. Please also make sure that Inventory privacy
              settings on your Steam account are set to Public.
            </p>
            <p className="mb-4">
              You can get your Steam Trade URL{" "}
              <a
                target="blank"
                href={
                  "https://steamcommunity.com/profiles/76561199176885191/tradeoffers/privacy"
                }>
                <span style={{color: "#FFC700"}}>here</span>
              </a>
            </p>
            <p style={{color: "#9DB4D3"}}>Trade URL</p>
            <div className="mb-4 complete-input">
              <input
                type="text"
                autoComplete="off"
                placeholder="http://"
                name="trade_url"
                onChange={(e) => setTrade_url(e.target.value)}
              />
            </div>
            <p>
              Optional: you need to have the{" "}
              <span style={{color: "#FFC700"}}>
                Steam Guard Mobile Authenticator
              </span>{" "}
              enabled for at least 15 days. If we send you a trade offer without
              this protection, the trade will be withheld by Steam for 15 days.
            </p>
          </div>
        </div>
      </div>
      <div className="process-btn">
        <CommonBtn width={336} className="btn" onClick={authentication}>
          Save Trade URL and go to Market
        </CommonBtn>
      </div>
    </div>
  );
}

export default CompleteProfile;
