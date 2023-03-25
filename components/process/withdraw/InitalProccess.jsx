import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../../redux/actions/steamAction";
import AcceptAllTrade from "./AcceptAllTrade";
import CreateTrade from "./CreateTrade";
import withdrawSuccessfullly from "./withdrawSuccessfullly";

const steps = {
  1: CreateTrade,
  2: AcceptAllTrade,
  3: withdrawSuccessfullly,
};

function InitailProcess({isShow, setClose, setSelected, filterSelected}) {
  const [step, setStep] = useState(1);

  let dispatch = useDispatch()
  const router = useRouter();
  const Step = steps[step];

  const onNext = (data) => {
    // console.log(data);
    setStep(step + 1);
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
      setStep(1);
      dispatch(setSelectedItem([]));
      // setSelected([]);
      // setClose(false);

      // router.push("/market/uieurie");
    }
  }, [isShow]);
  return (
    <div>
      <Step
        onNext={onNext}
        setStep={setStep}
        filterSelected={filterSelected}
        setClose={setClose}
      />
    </div>
  );
}

export default InitailProcess;
