import React, {useState} from "react";

import Text from "../../ui/custom_tag/Text";
import CommonBtn from "../../ui/CommonBtn";
import {useEffect} from "react";
import {errorNotification} from "../../../utils/helperFunctions";
import Link from "next/link";

function LoginDisclaimer({onNext, setClose, isShow}) {
  const [is18, setIs18] = useState(false);
  const [trms, setTrams] = useState(false);
  const [pPolicy, setPolicy] = useState(false);

  useEffect(() => {
    if (!isShow) {
      setIs18(false);
      setTrams(false);
      setPolicy(false);
    }
  }, [setClose, isShow]);

  return (
    <div className="process-container">
      <Text fs={25} fw={400} color="#9DB4D3">
        Login disclaimer
      </Text>
      <div className="process-body">
        <div className="condition">
          <label className="checkbox-container">
            <input
              type="checkbox"
              onChange={(e) => setIs18(e.target.checked)}
              checked={is18}
            />
            <span className="checkmark"></span>
          </label>
          <p className="p">I agree that I am 18 years old.</p>
        </div>
        <div className="condition">
          <label className="checkbox-container">
            <input
              type="checkbox"
              onChange={(e) => setTrams(e.target.checked)}
              checked={trms}
            />
            <span className="checkmark"></span>
          </label>

          <p className="p">
            I have accepted the{" "}
            <Link href={"/terms-services"}>
              <span style={{color: "#FFC700", cursor: "pointer"}}>
                Terms of Service{" "}
              </span>
            </Link>
            of company.
          </p>
        </div>
        <div className="condition">
          <label className="checkbox-container">
            <input
              type="checkbox"
              onChange={(e) => setPolicy(e.target.checked)}
              checked={pPolicy}
            />
            <span className="checkmark"></span>
          </label>
          <p className="p">
            I have accepted the{" "}
            <Link href={"/privacy-policy"}>
              <span style={{color: "#FFC700", cursor: "pointer"}}>
                {" "}
                Privacy Policy{" "}
              </span>
            </Link>
            of company.
          </p>
        </div>

        <div className="condition ">
          <div className="checkbox-container ">
            <img src="/img/triangle.png" alt="hello" />
          </div>
          <p className="p" style={{marginLeft: "0px"}}>
            The platform is not in any way associated with or endorsed by Valve
            Corporation.
          </p>
        </div>
      </div>
      <div className="process-btn">
        <CommonBtn
          width={245}
          style={{
            background: "#ffc700",
            color: "black",
          }}
          onClick={() => {
            if (is18 && trms && pPolicy) {
              onNext();
            } else {
              errorNotification("Please accept all conditions");
            }
          }}>
          Check out the Market
        </CommonBtn>
      </div>
    </div>
  );
}

export default LoginDisclaimer;
