import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  setPriceValue,
  setSelectedItem,
  setStep,
} from "../../../redux/actions/steamAction";

import Items from "./Items";
import SellSuccess from "./SellSuccess";
import TradeId from "./TradeId";
import WithdrawSellItems from "./WithdrawSellItems";

const steps = {
  1: Items,
  2: TradeId,
  3: SellSuccess,
};

const withdrawSellSteps = {
  1: WithdrawSellItems,
  2: SellSuccess,
  3: TradeId,
};

function InitailProcess({
  isShow,
  setClose,
  pageData,
  selectedItem,
  setSelected,
  withdrawSell,
}) {
  // console.log('isShow', isShow)
  // const [step, setStep] = useState(1);
  let dispatch = useDispatch();
  const step = useSelector((state) => state.steamRed.step);
  // console.log('step', step)
  const [priceValue, setpriceValue] = useState([]);
  const router = useRouter();
  let Step = "";
  if (withdrawSell) {
    // console.log('withdrawSell yes', withdrawSell)
    Step = withdrawSellSteps[step];
  } else {
    // console.log('withdrawSell 1', withdrawSell)

    Step = steps[step];
  }

  const onNext = (data) => {
    // console.log(data);
    // console.log('step', step)

    dispatch(setStep(step + 1));
    // setStep(step + 1);
  };
  // const onSkip = () => {
  //   if (step <= 4) {
  //     setStep(5);
  //   }
  // };
  // const onCross = () => {
  //   if (step <= 4) {
  //     setStep(1);
  //   }
  // };
  useEffect(() => {
    if (!isShow) {
      // setStep(1);
      dispatch(setStep(1));
      dispatch(setSelectedItem([]));
      dispatch(setPriceValue([]));
      // setClose(false);

      // router.push("/market/uieurie");
    }
  }, [isShow]);
  return (
    <div>
      {isShow && (
        <Step
          onNext={onNext}
          setStep={setStep}
          selectedItem={selectedItem}
          setClose={setClose}
          setpriceValue={setpriceValue}
          priceValue={priceValue}
          paeData={pageData}
        />
      )}
    </div>
  );
}

export default InitailProcess;
