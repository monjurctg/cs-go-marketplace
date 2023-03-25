import React from "react";
import Text from "../../ui/custom_tag/Text";
import CommonBtn from "../../ui/CommonBtn";
import ButtonSpinner from "../../ui/ButtonSpinner";

function ItemOnSale({onNext, clickBtn, loading}) {
  return (
    <div className="process-container">
      <Text fs={31} fw={400} color="#9DB4D3">
        Items on Sale
      </Text>
      <div className="process-body">
        <div className="text">
          <div className="p mb-5">
            <p className="mb-4">
              Here you can manage all items that you have listed for sale on the
              Market.
            </p>
            <p className="mb-4">
              Click on the three dots at the bottom right corner of a skin card
              to Change price or Delist item. Any item you remove from sale will
              be transferred to your Dojo Inventory.
            </p>
            <p className="mb-4">
              Hit the “Share my shop” button to copy a unique link to your
              Market shop and share with your community to sell the items
              faster.
            </p>
          </div>
        </div>
      </div>
      <div className="process-btn">
        <div className="mpBtn text-center">
          <button className="btn" style={{width: "174px"}} onClick={clickBtn}>
            {loading ? <ButtonSpinner /> : "Got it, close"}
          </button>
        </div>
        {/* <CommonBtn width={174} className="btn" onClick={onNext}>
      
        </CommonBtn> */}
        {/* <CommonBtn width={174} className="" onClick={onSkip}>
          Skip all steps
        </CommonBtn> */}
      </div>
    </div>
  );
}

export default ItemOnSale;
