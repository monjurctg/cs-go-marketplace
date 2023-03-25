import React from "react";
import Text from "../../ui/custom_tag/Text";
import CommonBtn from "../../ui/CommonBtn";
import AuthServices from "../../../services/AuthServices";
import {useRouter} from "next/router";
import ButtonSpinner from "../../ui/ButtonSpinner";

function Market({onNext, clickBtn, loading}) {
  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        Market
      </Text>
      <div className="process-body">
        <div className="text">
          <p className="p mb-5">
            Explore and buy items that have been put on sale by other users on
            our marketplace. You can also view featured seller shops to browse
            their items. Each purchased item will be instantly added to your
            Inventory.
          </p>
        </div>
      </div>
      <div className="process-btn">
        <div className="mpBtn text-center">
          <button
            className="btn btn-padding"
            style={{width: "160px"}}
            onClick={onNext}>
            Got it, next
          </button>
        </div>{" "}
        <CommonBtn width={160} className="" onClick={clickBtn}>
          {loading ? <ButtonSpinner /> : " Skip all steps"}
        </CommonBtn>
      </div>
    </div>
  );
}

export default Market;
