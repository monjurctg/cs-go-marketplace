import React from "react";
import DefaultModal from "./modal/DefaultModal";
import SDLogo from "../../public//img/SD Logo 2.png";
import stripe from "../../public/img/stripe.svg";
import paypal from "../../public/images/paypalSmall.svg";
import insta from "../../public/img/instagram.svg";

import fb from "../../public/img/facebook.svg";

import Twitter from "../../public/img/twitter.svg";

import Image from "next/image";
import Link from "next/link";
function Footer({page}) {
  return (
    <>
      <DefaultModal />

      <footer
        className="footer"
        // style={{backgroundImage: `url("/img/bg.png")`}}
      >
        <div className="container">
          {/* <hr className="mb-5" /> */}

          <div className="row" style={{marginTop: "3rem"}}>
            <div className="col-lg-4 col-7 ">
              <div className="footer__content">
                <div className="footer__logo mb-4">
                  <Image
                    src="/img/logo-icon.svg"
                    alt="logo"
                    width={165}
                    height={38}
                  />
                </div>
                <p className="mb-2">
                  Powered by Steam. Not affiliated with Valve Corp.
                </p>
                <span>@2022 Skins Dojo. All rights reserved.</span>
              </div>
            </div>
            <div className="col-lg-2 d-none d-md-block  col-sm-3 mt-sm-4 mt-lg-0">
              <div className="footer__list">
                <h3>Features</h3>
                <ul>
                  <li>
                    <Link
                      style={{color: page == "Market" ? "#ffc700" : ""}}
                      href="/market">
                      Market
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: page == "Steam Inventory" ? "#ffc700" : "",
                      }}
                      href="/steam-inventory">
                      Steam Inventory
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: page == "Dojo Inventory" ? "#ffc700" : "",
                      }}
                      href="/dojo-inventory">
                      Dojo Inventory
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: page == "Items on Sale" ? "#ffc700" : "",
                      }}
                      href="/items-on-sale">
                      Items on Sale
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 d-none d-md-block  col-sm-3 mt-sm-4 mt-lg-0">
              <div className="footer__list">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link href="/terms-services">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: page == "about" ? "#ffc700" : "",
                      }}
                      href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: page == "faq" ? "#ffc700" : "",
                      }}
                      href="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{
                        color: page == "blog" ? "#ffc700" : "",
                      }}
                      href="/blogs">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-5 ">
              <div className="row">
                <div className="col-lg-6 col-sm-3 mt-sm-4 mt-lg-0">
                  <div className="footer__list">
                    <h3>We accept</h3>
                    <div className="payment">
                      <Image src={stripe} alt="" />
                      {/* <Image src={paypal} alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-3 mt-sm-4 mt-lg-0">
                  <div className="footer__list">
                    <h3>Follow us</h3>
                    <div className="payment">
                      <a href="#">
                        <Image src={insta} alt="" />
                      </a>
                      <a href="#">
                        <Image src={Twitter} alt="" />
                      </a>
                      <a href="#">
                        <Image src={fb} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
