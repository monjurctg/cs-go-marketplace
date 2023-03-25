import Image from "next/image";
import React from "react";
import {useState} from "react";
import stripe from "../../../public/images/stripe.svg";
import paypal from "../../../public/images/paypal.svg";
import {useSelector} from "react-redux";
function Deposit({onNext, setClose, isDeposit, setStep, step, isFromBalance}) {
  let balance = 0;
  const [selectedPaymentMethod, setSelectedPAymentMethdo] = useState("");
  const userProfile = useSelector((state) => state.auth.userProfile);
  console.log(step);

  return (
    <>
      <div className="modal__title ">
        <div className="title w-100">
          <div className="mb-3 d-flex g-4">
            <h2 onClick={() => setStep(1)} className="me-2">
              {isFromBalance !== "deposit" && (
                <i className="fa-solid fa-arrow-left"></i>
              )}
            </h2>{" "}
            <h2> {isFromBalance === "withdraw" ? "Withdraw" : "Deposit"}</h2>
          </div>
          <p
            className="mod__id d-flex justify-content-between a  flex-column flex-sm-row"
            style={{
              justifyContent: "center",
            }}>
            Select a {isFromBalance === "Withdrawal " ? "Withdraw" : "Deposit"}{" "}
            Method
            <span className="balance2 mt-2 mt-sm-0 ">
              Your balance{" "}
              <span
                style={{
                  color:
                    userProfile?.data?.steam_user_info?.balance < 1
                      ? "#EB5757"
                      : "",
                }}>
                $
                {parseFloat(
                  userProfile?.data?.steam_user_info?.balance
                ).toFixed(2)}
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className="modal__content">
        <div className="deposit" style={{}}>
          <div className="pay" style={{width: "50%"}}>
            <div
              className="pay__img"
              style={{
                cursor: "pointer",
                width: isFromBalance === "withdraw" ? "200px" : "50%",
                margin: isFromBalance === "withdraw" ? "0 auto" : "0 auto",
                boxShadow:
                  selectedPaymentMethod === "stripe"
                    ? "rgb(255 179 78 / 12%) 0px 16px 32px"
                    : "",
              }}
              onClick={() => setSelectedPAymentMethdo("stripe")}>
              <Image height={120} width={200} src={stripe} alt="" />
            </div>
            <h4>Stripe</h4>
            <span className="pay__tran">Transaction</span>
            {/* <p>
              $500.00 <span>(5% fee)</span>
            </p> */}
          </div>
          {/* <div className="pay"></div> */}
          {/* {isFromBalance !== "withdraw" ? (
            <div className="pay">
              <div
                className="pay__img"
                style={{
                  cursor: "pointer",

                  boxShadow:
                    selectedPaymentMethod === "paypal"
                      ? "rgb(255 179 78 / 12%) 0px 16px 32px"
                      : "",
                }}
                onClick={() => setSelectedPAymentMethdo("paypal")}>
                <Image
                  // height={10he0}
                  height={100}
                  src={paypal}
                  width={180}
                  alt=""
                />
              </div>
              <h4>PayPal</h4>
              <span className="pay__tran">Transaction</span>
             
            </div>
          ) : (
            ""
          )} */}
        </div>
        <div className="modal__btn mt-3">
          <button className="h_btn" onClick={() => setClose(false)}>
            <i className="fa-solid fa-xmark me-2"></i> Cancel
          </button>
          <button
            className="btn"
            style={{
              background: !selectedPaymentMethod ? "#866713" : "",
            }}
            onClick={() =>
              onNext(false, {
                paymentMethod: selectedPaymentMethod,
                from: "from_market_item",
              })
            }>
            <i className="fa-solid fa-arrow-right me-2"></i> Proceed
          </button>
        </div>
      </div>
    </>
  );
}

export default Deposit;
