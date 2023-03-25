import Image from "next/image";
import React from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import img1 from "../../../public//img/Icon.png";
import {errorNotification} from "../../../utils/helperFunctions";
function CreditCard({
  onNext,
  setClose,

  setStep,
  isFromBalance,
  dataFrom,
}) {
  console.log(isFromBalance, dataFrom);
  const [amount, setAmount] = useState(0);
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (amount) {
      onNext(false, {amount});
      setError("");
    } else {
      setError("Enter Amount");
    }
  };

  return (
    <>
      <div className="modal__title">
        <div className="title w-100">
          <div className="mb-3 d-flex g-4">
            <h2 onClick={() => setStep(3)} className="me-2">
              {" "}
              <i className="fa-solid fa-arrow-left"></i>
              {"  "}
            </h2>
            <h2>
              {" "}
              {isFromBalance === "withdraw"
                ? "Withdraw"
                : `Deposit  | Credit
            Card Deposit`}
            </h2>
          </div>
          <div className="credit_card  justify-content-between align-items-baseline align-items-lg-baseline ">
            {isFromBalance !== "withdraw" ? (
              <p className="w-50">
                Deposited USD can only be used to purchase items on the Market
              </p>
            ) : (
              ""
            )}

            <span className="balance text-end w-50 mt-2 mt-lg-0">
              Your balance{" "}
              <span style={{fontSize: "18px"}}>
                $ {parseFloat(userProfile?.data?.steam_user_info?.balance)}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="modal__content">
        <div className="deposit d-block">
          <p className="mb-3 dipo">
            {" "}
            {isFromBalance === "withdraw" ? "Withdrawal" : `Deposit`} amount ($1
            - 5000)*
          </p>
          <div
            className="dipo__amount mb-3 d-flex align-items-center"
            style={{border: error ? "1px solid red" : ""}}>
            <div className="upDown">
              <i
                className="fa-solid fa-chevron-up"
                style={{cursor: "pointer"}}></i>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <input
              type="text"
              autoComplete="off"
              name="amount"
              id="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <span
            style={{color: "#ffc700"}}
            className="d-flex align-items-center">
            <Image className="" src={img1} alt="" />{" "}
            <span style={{marginLeft: "15px"}}>
              Payment system commission is 2.9%+
            </span>
          </span>
        </div>
        <div className="modal__btn mt-5">
          <button className="h_btn" onClick={() => setClose(false)}>
            <i className="fa-solid fa-xmark me-2"></i> Cancel
          </button>
          <button className="btn" onClick={handleNext}>
            <i className="fa-solid fa-arrow-right me-2"></i>
            {isFromBalance === "withdraw" ? "Withdraw" : "Deposit"}
          </button>
        </div>
      </div>
    </>
  );
}

export default CreditCard;
