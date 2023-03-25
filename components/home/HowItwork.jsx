import React, {useState} from "react";
import CommonBtn from "../ui/CommonBtn";
import img1 from "../../public/img/pngaaa 1 1.png";
import Image from "next/image";
import AuthServices from "../../services/AuthServices";
import {useRouter} from "next/router";
import ButtonSpinner from "../ui/ButtonSpinner";

function HowItwork() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const steamLogin = async () => {
    setLoading(true);
    const res = await AuthServices.Steamlogin();
    console.log(res, "res");
    if (res.status === 200) {
      setLoading(false);

      router.push(res.data[0]);
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="account">
        {/* <img className="shining" src="img/Ellipse 18.png" alt="" /> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="account_content">
                <div className="account__img">
                  <Image height={900} src={img1} alt="ppp" />
                </div>
                <div className="account__text">
                  <h4>How it works?</h4>
                  <p>
                    Here at Skins Dojo, we offer a simple way to both buy and
                    sell your CS:GO inventory. To start using the platform, hit
                    the button below to quickly register your account via Steam
                    and be ready to explore our diverse variety of skins.
                    <br />
                    <br />
                    Purchases are made through a platform-specific account
                    balance. Select one of our secure payment methods to deposit
                    funds, and you are ready to go! Any unused funds can be
                    withdrawn at any time from your Balance tab. <br />
                    <br />
                    Skins Dojo has been specifically designed to have a simple
                    interface with the most necessary utility at your disposal.
                    If you are a seller, you get your own dedicated shop area.
                    In addition, all users can easily manage their skin
                    inventory in a single space. <br />
                    <br />
                    Once you are inside our Dojo for the first time, we will
                    walk you step-by-step through the essential features of the
                    website - Market, My Inventory and Items on Sale - to make
                    you familiar with our smooth buying and selling experience.
                    It is as easy as rushing a bombsite with your trusted
                    teammates!
                  </p>
                  <CommonBtn
                    onClick={steamLogin}
                    style={{
                      background: "#ffc700",
                      color: "#0e0726",
                      // color: "balck",
                    }}
                    width={245}>
                    {loading ? <ButtonSpinner /> : "Create an account"}
                  </CommonBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItwork;
