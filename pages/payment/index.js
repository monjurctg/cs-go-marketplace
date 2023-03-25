import {useRouter} from "next/router";
import React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Navbar from "../../components/ui/Navbar";
import {setLoginCondition} from "../../redux/actions/authAction";
import PaymentServices from "../../services/PaymentServices";
import TransactionServices from "../../services/transactionServices";
import {
  errorNotification,
  setDevice,
  setToken,
  successNotification,
} from "../../utils/helperFunctions";
import {withAuth} from "../../utils/useAuth";

function Index() {
  const router = useRouter();

  const dispatch = useDispatch();
  const {payment_name, session_id, token} = router.query;

  const stripeSuccess = async (id) => {
    const res = await TransactionServices.getStripeSuccess(id);
    console.log(res, "res from success stripe");
    if (res?.status === 200) {
      successNotification("Transaction successfully done");
      router.push("/balance");
    } else {
      console.log(res, "error res");
      errorNotification(res?.response?.data?.message);
      router.push("/balance");
    }
  };
  const paypalSuccess = async (token) => {
    const res = await TransactionServices.getPaypalSuccess(token);
    console.log(res, "res from success stripe");
    if (res?.status === 200) {
      successNotification("Transaction successfully done");
      router.push("/balance");
    } else {
      errorNotification(res.data.message);
      router.push("/balance");
    }
  };
  if (payment_name && (session_id || token)) {
    console.log(payment_name, session_id, token, "middle route");
    if (payment_name === "stripe") {
      stripeSuccess(session_id);
    } else if (payment_name === "paypal") {
      paypalSuccess(token);
    }
  }

  // console.log('query', query)
  // if (token) {
  //   setToken(token);
  //   setDevice(device);
  //   // router.push("/market");
  //   return <></>;
  // }
  //   const { pid } = router.query
  let temp = async () => {
    // let res = await PaymentServices.paypal({amount: "11"});
    // console.log('res', res)
  };
  useEffect(() => {
    // temp();
  }, [payment_name, token]);

  return (
    <div
      style={{
        border: "1px solid #adb5bd42",
        height: 200,
        width: "50%",
        textAlign: "center",
        margin: "100px auto",
        padding: "20px",
      }}>
      <h5>Please wait until we verify your account</h5>
      <div className="text-center" style={{marginTop: "60px"}}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Index);
