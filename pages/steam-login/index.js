import {useRouter} from "next/router";
import React from "react";
import {useDispatch} from "react-redux";
import Navbar from "../../components/ui/Navbar";
import {setLoginCondition} from "../../redux/actions/authAction";
import {setDevice, setToken} from "../../utils/helperFunctions";

function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {token, device} = router.query;
  // console.log('router', token)
  if (token) {
    setToken(token);
    setDevice(device);
    router.push("/market");
    return <></>;
  }
  //   const { pid } = router.query
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

export default Index;
