import Image from "next/image";
import React, {useEffect, useState} from "react";
import pro from "../../public/img/pro.png";
import SumsubWebSdk from "@sumsub/websdk-react";
import AuthServices from "../../services/AuthServices";
import {useSelector} from "react-redux";
import {
  errorNotification,
  successNotification,
} from "../../utils/helperFunctions";
function Profile() {
  const [accessToken, setAccessToken] = useState("");
  const [kycOpen, setkycOpen] = useState(false);
  const userProfile = useSelector((state) => state.auth.userProfile);
  // console.log('userProfile', userProfile?.data?.steam_user_info.is_verified  )
  let getAccessToken = async () => {
    let res = await AuthServices.accessToken();
    // console.log('res', res?.data)
    if (res.status === 200) {
      setAccessToken(res?.data?.access_token);
    }
  };
  // console.log("accessToken", accessToken);
  useEffect(() => {
    if (!userProfile?.data?.steam_user_info?.is_verified) {
      getAccessToken();
    }
  }, []);

  let sendVerification = async () => {
    let res = await AuthServices.authUserVerified();
    if (res.status === 200) {
      console.log("res", res);
      successNotification("Your account has been verified successfully");
    } else {
      console.log("res", res);
      errorNotification("Something went wrong");
    }
  };

  const accessTokenExpirationHandler = () => {
    return new Promise((resolve, reject) => {
      AuthServices.accessToken()

        .then((res) => {
          if (res.status === 200) {
            setAccessToken(res?.data?.access_token);
            resolve(res?.data?.access_token);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  const openKyc = () => {
    setkycOpen(true);
  };
  return (
    <>
      {kycOpen ? (
        <SumsubWebSdk
          accessToken={accessToken}
          updateAccessToken={() => console.log("updateAccessToken")}
          // expirationHandler={() => Promise.resolve(accessToken)}
          // config={{
          //   lang: "ru-RU",
          //   email: applicantEmail,
          //   phone: applicantPhone,
          //   i18n: {
          //     document: {
          //       subTitles: {
          //         IDENTITY: "Upload a document that proves your identity"
          //       }
          //     }
          //   },
          //   onMessage: (type, payload) => {
          //     console.log("WebSDK onMessage", type, payload);
          //   },
          //   uiConf: {
          //     customCssStr:
          //       ":root {\n  --black: #000000;\n   --grey: #F5F5F5;\n  --grey-darker: #B2B2B2;\n  --border-color: #DBDBDB;\n}\n\np {\n  color: var(--black);\n  font-size: 16px;\n  line-height: 24px;\n}\n\nsection {\n  margin: 40px auto;\n}\n\ninput {\n  color: var(--black);\n  font-weight: 600;\n  outline: none;\n}\n\nsection.content {\n  background-color: var(--grey);\n  color: var(--black);\n  padding: 40px 40px 16px;\n  box-shadow: none;\n  border-radius: 6px;\n}\n\nbutton.submit,\nbutton.back {\n  text-transform: capitalize;\n  border-radius: 6px;\n  height: 48px;\n  padding: 0 30px;\n  font-size: 16px;\n  background-image: none !important;\n  transform: none !important;\n  box-shadow: none !important;\n  transition: all 0.2s linear;\n}\n\nbutton.submit {\n  min-width: 132px;\n  background: none;\n  background-color: var(--black);\n}\n\n.round-icon {\n  background-color: var(--black) !important;\n  background-image: none !important;\n}"
          //   },
          //   onError: (error) => {
          //     console.error("WebSDK onError", error);
          //   }
          // }}
          options={{addViewportTag: false, adaptIframeHeight: true}}
          onMessage={(type, payload) => {
            console.log("onMessage", type);
            console.log(
              "payloadreviewAnswer",
              payload?.reviewResult?.reviewAnswer
            );

            console.log("payload ", payload);
            if (
              payload?.reviewStatus == "completed" &&
              payload?.reviewResult?.reviewAnswer == "GREEN"
            ) {
              console.log("first");
              sendVerification();
              // }
            }
          }}
          onError={(data) => console.log("onError", data)}
          expirationHandler={accessTokenExpirationHandler}
          // config={config}
          // options={options}
          // onMessage={messageHandler}
          // onError={errorHandler}
        />
      ) : (
        ""
      )}

      {!kycOpen && (
        <div className="row">
          <div className="col-md-3">
            <div className="settion__icon">
              <Image src={pro} alt="" />
              {/* <div className="upload">
        {/* <i className="fa-solid fa-arrow-up-from-bracket"></i> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-9">
            <div className="setting__status mb-5">
              <div className="setting__name">
                <p>KYC Status</p>
                {!userProfile?.data?.steam_user_info?.is_verified ? (
                  <span
                    onClick={openKyc}
                    style={{
                      cursor: "pointer",
                    }}>
                    Complete Now{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <p
                className="vari"
                style={{
                  color: userProfile?.data?.steam_user_info?.is_verified
                    ? "#00B87C"
                    : "#FF0000",
                }}>
                {userProfile?.data?.steam_user_info?.is_verified ? (
                  <>
                    <i className="fa-solid fa-check-circle"></i> VERIFIED
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-triangle-exclamation"></i> NOT
                    VERIFIED
                  </>
                )}
              </p>
            </div>
            {/* <div className="profile__info">
      <form action="#">
        <label className="d-block mb-2" htmlFor="name">
          Name
        </label>
        <input type="text" name="name" id="name" />

        <label className="d-block mb-2" htmlFor="Email">
          Email
        </label>
        <input type="email" name="Email" id="Email" />

        <label className="d-block mb-2" htmlFor="pass">
          New Password
        </label>
        <input type="password" name="pass" id="pass" />

        <label className="d-block mb-2" htmlFor="pass">
          Repeat New Password
        </label>
        <input type="password" name="pass" id="pass" />

        <button className="btn">
         
          <i className="fa-solid fa-check"></i> Apply changes
        </button>
      </form>
    </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
