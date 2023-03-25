import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getUserProfileDataAction,
  setCloseModal,
  setOpenModal,
} from "../../redux/actions/authAction";
import {FaChevronDown} from "react-icons/fa";

import InitailProcess from "../process/streem/InitailProcess";
import BottomNav from "./BottomNav";
import CommonBtn from "./CommonBtn";
import DefaultModal from "./modal/DefaultModal";

import Image from "next/image";

import {useRouter} from "next/router";
import {SlArrowRight} from "react-icons/sl";
import {removeToken} from "../../utils/helperFunctions";

import ProfileDropDown from "../Navbar/ProfileDropDown";
import AuthLink from "../Navbar/AuthLink";

function Navbar() {
  // handle all state

  const {userProfile, authModal} = useSelector((state) => state.auth);
  const {unreadNotificationLength} = useSelector((state) => state.utils);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [reload, setreload] = useState(true);
  const [profileDropShow, setProfileDropShow] = useState(false);
  const [notificationDropShow, setNotificationDropShow] = useState(false);
  const [unReadNoti, setUnReadNoti] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inventory, setinventory] = useState(false);
  const [subMenu, setSubMenu] = useState("");
  const [inventoryZindex, setInventoryZindex] = useState(-1);

  // discrit variable
  const router = useRouter();
  const dispatch = useDispatch();
  let isAuth =
    typeof localStorage === "object" &&
    localStorage.getItem("cs_go_client_token");
  let modalValue =
    (typeof localStorage === "object" && localStorage.getItem("modal")) || 1;
  const [defaltModalShow, setDefaultModalShow] = useState(authModal);
  // window resize
  function getWindowSize() {
    if (typeof window !== "undefined") {
      let {innerWidth, innerHeight} = window
        ? window
        : {innerWidth: 0, innerHeight: 0};
      return {innerWidth, innerHeight};
    }
  }

  // handle All funtion

  const handleDrop = () => {
    setProfileDropShow(!profileDropShow);
    setinventory(false);
    setNotificationDropShow(false);
  };

  const handleNotiDrop = () => {
    setNotificationDropShow(!notificationDropShow);
    setProfileDropShow(false);
    setinventory(false);
  };

  const handleMyInventory = () => {
    setinventory(!inventory);
    setNotificationDropShow(false);
    setProfileDropShow(false);

    setInventoryZindex(!inventory ? 99999 : -1);
  };

  const logout = () => {
    removeToken();
    router.push("/");
  };

  const handleAuthRoute = (e, route) => {
    console.log(route, e, "route from funtion");
    e.preventDefault();
    if (
      userProfile?.data?.steam_user_info?.username &&
      route === "/steam-inventory"
    ) {
      router.push(route);

      return;
    } else if (
      userProfile?.data?.steam_user_info?.username &&
      route === "/dojo-inventory"
    ) {
      router.push(route);
      return;
    } else if (
      userProfile?.data?.steam_user_info?.username &&
      route === "/items-on-sale"
    ) {
      router.push(route);
      return;
    } else {
      setSidebarOpen(false);
      setSubMenu(false);
      setDefaultModalShow(!defaltModalShow);
    }
  };

  // handle all effect

  useEffect(() => {
    if (window) setreload(false);
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    dispatch(getUserProfileDataAction());
  }, [dispatch]);

  let menu = (
    <div className="mobail-link pt-4">
      <li>
        <Link href="/market">Market</Link>
      </li>
      <li
        className="d-flex justify-content-between"
        onClick={() => setSubMenu("myInventory")}>
        <p>My Inventory</p>
        <p>
          <SlArrowRight />
        </p>
      </li>
      <li>
        <Link href="/">
          <p onClick={(e) => handleAuthRoute(e, "/items-on-sale")}>
            <a style={{cursor: "pointer"}}>Items on Sale</a>
          </p>
        </Link>
      </li>

      <li
        className="d-flex justify-content-between"
        onClick={() => {
          setSubMenu("about");
        }}>
        <p>About</p>

        <p>
          <SlArrowRight />
        </p>
      </li>
    </div>
  );

  const myInventory = (
    <div className="mobail-link pt-4">
      <li>
        <Link href="/">
          <a
            style={{cursor: "pointer"}}
            onClick={(e) => handleAuthRoute(e, "/steam-inventory")}>
            Steam Inventory
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a
            style={{cursor: "pointer"}}
            onClick={(e) => handleAuthRoute(e, "/dojo-inventory")}>
            Dojo Inventory
          </a>
        </Link>
      </li>

      <div className="mt-3 d-flex  align-items-center justify-content-center flex-column position-relative">
        <img src="/images/gun.svg" alt="" />
        <img
          src="/images/yellow.svg"
          style={{
            position: "absolute",
            top: -43,
            height: 175,
          }}
        />
        <li
          style={{
            color: "#675E84",
            // margin "10px",
            paddingTop: "20px",
            fontSize: "13px",
          }}>
          <p>All your items in one place</p>
        </li>
      </div>
    </div>
  );

  const aboutUs = (
    <div className="mobail-link pt-4">
      <li>
        <Link href="#"> Terms of Service</Link>
      </li>
      <li>
        <Link href="#">Privacy Policy</Link>
      </li>

      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/faq">FAQ</Link>
      </li>
      <li>
        <Link href="/blogs">Blog</Link>
      </li>
    </div>
  );

  let mobailSidbar = (
    <>
      <div
        className="mobail-sidebar-container d-lg-none"
        style={{
          width: `${sidebarOpen ? "100%" : "0%"}`,
        }}>
        {/* hello world */}
        <div
          className="mobail-link-wrapper "
          style={{
            display: `${sidebarOpen ? "block" : "none"}`,
          }}>
          {subMenu === "myInventory"
            ? myInventory
            : subMenu === "about"
            ? aboutUs
            : menu}
        </div>
      </div>
    </>
  );

  // console.log(defaltModalShow);
  const nav = reload ? (
    ""
  ) : (
    <>
      {/* <Noti /> */}
      <div className={windowSize?.innerWidth > 970 ? "container-lg " : "px-3"}>
        <div className="row">
          <div className="col-xl-12">
            <nav
              className="navbar navbar-expand-md navigation"
              style={{marginTop: "20px"}}>
              <div className="container-fluid p-0">
                <button
                  className="navbar-toggler menu"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  style={{
                    outline: "none",
                    border: "none",
                  }}
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon">
                    {sidebarOpen && !subMenu ? (
                      <img
                        src="/img/cross.png"
                        alt=""
                        onClick={() => setSidebarOpen(false)}
                      />
                    ) : sidebarOpen &&
                      (subMenu === "myInventory" || subMenu === "about") ? (
                      <img
                        src="/img/leftArrow.png"
                        alt=""
                        onClick={() => setSubMenu(false)}
                      />
                    ) : (
                      <Image
                        src="/img/bars.svg"
                        height={"30px"}
                        width={"30px"}
                        // style={{width: "30px", height: 20}}
                        alt=""
                        onClick={() => setSidebarOpen(true)}
                      />
                    )}
                  </span>
                </button>
                <Link className="navbar-brand" href="/">
                  <div
                    className="haeder_logo"
                    style={{paddingTop: 10, cursor: "pointer"}}>
                    <Image
                      src="/img/logo-icon.svg"
                      alt="logo"
                      width={165}
                      height={38}
                    />
                  </div>
                </Link>
                {!isAuth ? (
                  <button
                    className="navbar-toggler menu"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{padding: 0}}>
                    <span
                      className="navbar-toggler-icon"
                      style={{
                        display: "flex",
                        height: "40px",
                        width: "45px",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "2px solid  #FFC700",
                        // padding: "10px",
                        borderRadius: 4,
                      }}
                      onClick={() => setDefaultModalShow(!defaltModalShow)}>
                      {/* <i className="fa-sharp fa-solid fa-bars"></i> */}
                      <Image
                        src="/img/steam-yellow.svg"
                        alt=""
                        height={20}
                        width={20}
                        style={{
                          color: "#FFC700",
                          // height: 20,
                          // width: 20,
                          objecFit: "contain",
                        }}
                      />
                    </span>
                  </button>
                ) : (
                  <div className="login d-flex d-md-none justify-content-between align-items-center">
                    <ProfileDropDown
                      isMobail={true}
                      logout={logout}
                      userProfile={userProfile}
                      profileDropShow={profileDropShow}
                      handleDrop={handleDrop}
                    />
                  </div>
                )}

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto h_nav">
                    <li>
                      <Link href="/market">Market</Link>
                    </li>
                    <li>
                      <a href="#" onClick={handleMyInventory}>
                        My Inventory
                        <FaChevronDown className="ms-2" />
                        {/* <i className="fa-solid fa-angle-down"></i> */}
                      </a>
                      <ul
                        style={{
                          position: "absolute",
                          top: 53,
                          height: "170px",
                          width: "400px",
                          background: "rgb(33 24 62)",
                          display: "flex",
                          padding: 16,
                          justifyContent: "space-between",
                          borderRadius: "12px",
                          boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.25)",
                          transition: "all 0.5s ease",
                          opacity: inventory ? "1" : "0",
                          alignItems: "center",
                          zIndex: inventoryZindex,
                        }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexDirection: "column",
                            // gap: "30px",
                            fontSize: "16px",
                          }}>
                          <li
                            className="d-flex justify-content-start"
                            style={{gap: 15}}>
                            <span>
                              <img
                                // style={{paddingRight: "20px"}}
                                src="/images/steam.svg"
                                alt=""
                              />
                            </span>
                            <Link href="/">
                              <a
                                style={{cursor: "pointer"}}
                                onClick={(e) =>
                                  handleAuthRoute(e, "/steam-inventory")
                                }>
                                Steam Inventory
                              </a>
                            </Link>
                          </li>
                          <hr />
                          <li
                            className="d-flex justify-content-start"
                            style={{gap: 15}}>
                            <span>
                              <img
                                // style={{paddingRight: "20px"}}
                                src="/images/dojo.svg"
                                alt=""
                              />
                            </span>
                            <Link href="/">
                              <a
                                style={{cursor: "pointer"}}
                                onClick={(e) =>
                                  handleAuthRoute(e, "/dojo-inventory")
                                }>
                                Dojo Inventory
                              </a>
                            </Link>
                          </li>
                          <li
                            style={{
                              color: "#675E84",
                              // margin: "10px",
                              paddingTop: "20px",
                              fontSize: "13px",
                            }}>
                            <p>All your items in one place</p>
                          </li>
                        </div>
                        <div className="position-relative">
                          <img src="/images/gun.svg" alt="" />
                          <img
                            src="/images/yellow.svg"
                            style={{
                              position: "absolute",
                              top: -43,
                              height: 175,
                              right: 0,
                            }}
                          />
                        </div>
                      </ul>
                    </li>
                    <Link href="/">
                      <li onClick={(e) => handleAuthRoute(e, "/items-on-sale")}>
                        <a style={{cursor: "pointer"}}>Items on Sale</a>
                      </li>
                    </Link>
                  </ul>
                  {!isAuth ? (
                    <div className="connect_btn md-4 text-md-center">
                      <CommonBtn
                        className="h_btn"
                        onClick={() => setDefaultModalShow(!defaltModalShow)}>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "12px",
                          }}>
                          <i
                            className="fa-brands fa-steam-symbol"
                            style={{fontSize: 16}}></i>
                          <p>Connect with Steam</p>
                        </p>
                      </CommonBtn>
                    </div>
                  ) : (
                    <AuthLink
                      logout={logout}
                      unreadNotificationLength={unreadNotificationLength}
                      profileDropShow={profileDropShow}
                      handleDrop={handleDrop}
                      notificationDropShow={notificationDropShow}
                      handleNotiDrop={handleNotiDrop}
                    />
                  )}
                </div>
              </div>
            </nav>
            {/* {isBottomNav && (
              <div className="mt-3">
                <BottomNav />
              </div>
            )} */}
          </div>
        </div>
        <DefaultModal
          isShow={defaltModalShow}
          setClose={setDefaultModalShow}
          body={
            <InitailProcess
              setClose={setDefaultModalShow}
              isShow={defaltModalShow}
            />
          }
        />
        {[
          "/steam-inventory",
          "/market",
          "/dojo-inventory",
          "/items-on-sale",
        ].includes(router.route) && <BottomNav />}
      </div>
      {mobailSidbar}
    </>
  );

  return nav;
}

export default Navbar;
