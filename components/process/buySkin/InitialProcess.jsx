import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setCardDetailsActive} from "../../../redux/actions/utilsAction";
import TransactionServices from "../../../services/transactionServices";
import BuySkin from "./BuySkin";
import CardDetails from "./CardDetails";
import CreditCard from "./CreditCard";

import Deposit from "./Deposit";
import SuccessPurchased from "./SuccessPurchased";

const steps = {
  1: BuySkin,
  2: SuccessPurchased,

  // deposit from 3
  3: Deposit,
  4: CreditCard,
  5: CardDetails,
};

function InitailProcess({
  isShow,
  setClose,
  isFromBalance,
  setDepositOrWithdraw,
}) {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [dataFrom, setDataFrom] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [isDeposit, setIsDeposit] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const Step = steps[step];
  const [balance, setBalance] = useState(0);

  const getPaypalLink = async (balance) => {
    const res = await TransactionServices.getPaypalLink({amount: balance});
    // console.log(res.data.url, "url");
    if (res?.status == 200) {
      setAmount("");
      setPaymentMethod("");
      router.push(res.data.url);
      setClose(false);
    }
  };
  const getStripeLink = async (balance) => {
    const res = await TransactionServices.getStripeLink({amount: balance});
    // console.log(res, "stripe link");
    if (res?.status == 200) {
      setAmount("");
      setPaymentMethod("");
      router.push(res.data.url);
      setClose(false);
    }
  };
  // console.log(step);

  // useEffect(() => {
  //   if (step == 4 && amount) {
  //     console.log(amount);
  //     if (paymentMethod === "paypal") {
  //       getPaypalLink();
  //     } else if (paymentMethod === "stripe") {
  //       getStripeLink();
  //     }
  //     // return;
  //   }
  // }, [step, amount]);
  useEffect(() => {
    if (!isShow) {
      setAmount("");
      setPaymentMethod("");
      setDataFrom("");
      if (isFromBalance === "withdraw") {
        setDepositOrWithdraw("");
      }
      setStep(1);
      return;
    }

    if (isFromBalance) {
      if (isFromBalance === "deposit") {
        setStep(3);
        return;
      }
      if (isFromBalance === "withdraw") {
        dispatch(setCardDetailsActive());
        setStep(5);
        return;
      }

      if (amount) {
        setStep(5);
        return;
      }
      if (isFromBalance === "market") {
        setStep(1);
        return;
      }
    } else {
      setStep(1);
      return;
    }
  }, [isShow, isFromBalance, amount, dispatch]);

  const onNext = (isDeposit, data) => {
    // console.log(data, "data");
    // if initial process come  from  balance or choose option for deposit then
    // step will be start from 3

    if (isDeposit || isFromBalance === "withdraw") {
      setIsDeposit(isDeposit);
      setStep(3);
      return;
    }
    // set payment mathod
    if (data?.paymentMethod) {
      setPaymentMethod(data?.paymentMethod);
    }

    if (data?.from) {
      setDataFrom(data?.from);
    }

    //  take 2 option  one for deposit another for withdraw
    // if deposit then its for paypal or stripe
    if (data?.amount) {
      // console.log(data);
      setAmount(data?.amount);
      if (
        step == 4 &&
        (isFromBalance === "deposit" || isFromBalance == "market")
      ) {
        if (paymentMethod === "paypal") {
          getPaypalLink(data?.amount);
        } else if (paymentMethod === "stripe") {
          getStripeLink(data?.amount);
        } else {
          // setStep(step + 1);
          // setStep(1);
          return;
        }
        // return;
      }
    }

    //

    // if (isFromBalance == "deposit" && step < 4) {
    //   setTransactionType("deposit");
    //   setStep(step + 1);
    //   return;
    // }

    if (data?.confirm) {
      setBalance(data?.balance);
      setStep(1);
      return;
    }

    if (isFromBalance == "withdraw" && step <= 5) {
      setStep(step + 1);
      return;
      // setClose(false);
      // return;
    }
    if (step < 4) {
      setStep(step + 1);
      return;
    } else {
      setClose(false);
      return;
    }
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

  return (
    <div>
      <Step
        balance={balance}
        amount={amount}
        step={step}
        dataFrom={dataFrom}
        isFromBalance={isFromBalance}
        onNext={onNext}
        setStep={setStep}
        setClose={setClose}
      />
    </div>
  );
}

export default InitailProcess;
