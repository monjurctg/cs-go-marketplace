import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import AuthServices from "../../../services/AuthServices";
import CompleteProfile from "./CompleteProfile";
import ItemOnSale from "./ItemOnSale";

import LoginDisclaimer from "./LoginDisclaimer";
import Market from "./Market";
import MyInventory from "./MyInventory";

const steps = {
  1: LoginDisclaimer,
  2: Market,
  3: MyInventory,
  4: ItemOnSale,
  5: <h1>Loading...</h1>,
};
function InitailProcess({isShow, setClose}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // let modalNow = localStorage.getItem("modal") || 1;
  // let modalClose = localStorage.getItem("modal-close");
  let clickBtn = () => {
    authentication();
    // onNext
  };
  let authentication = async () => {
    setLoading(true);
    let res = await AuthServices.Steamlogin();

    if (res.status === 200) {
      setLoading(false);
      localStorage.setItem("trade_modal_on", true);
      console.log("res) steam log", res);
      // setStep(5);
      setClose(false);
      router.push(res.data[0]);

      // onSkip();
    } else {
      setLoading(false);
      console.log(res, "res ");
    }
    // console.log("res", res);
  };

  const [step, setStep] = useState(1);

  const Step = steps[step];
  const onNext = (data) => {
    console.log(data, "data");
    if (data?.tradeUrl) {
      setClose(false);
      return;
    }
    if (step === 5) {
      setClose(false);
      return;
    }
    if (step <= 5) {
      if (step === 5) {
        router.push("/");
        return;
      } else {
        setStep(step + 1);
      }
    }
  };
  const onSkip = () => {
    if (step <= 4) {
      setStep(5);
    }
  };
  const onCross = () => {
    if (step <= 4) {
      setStep(1);
    }
  };
  useEffect(() => {
    if (!isShow) {
      setStep(1);
      setClose(false);
    }
  }, [isShow, setClose]);
  return (
    <div>
      <Step
        isShow={isShow}
        onNext={onNext}
        setStep={setStep}
        onSkip={onSkip}
        loading={loading}
        setClose={setClose}
        clickBtn={clickBtn}
      />
    </div>
  );
}

export default InitailProcess;
