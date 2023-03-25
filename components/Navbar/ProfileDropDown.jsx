import Link from "next/link";
import React from "react";

function ProfileDropDown({
  handleDrop,
  profileDropShow,
  logout,
  userProfile,
  isMobail,
}) {
  return (
    <div className="profile-dropdown">
      <div
        onClick={handleDrop}
        className="login__user d-flex justify-content-between align-items-center">
        <div className="user">
          <i className="fa-solid fa-user" style={{marginRight: 10}}></i>
          {!isMobail && (
            <>
              <span
                className="name"
                style={{
                  marginRight: 6,
                }}>
                Hi, Monjur
              </span>
              <i
                className={`fa-solid dropdown-icon fa-angle-down   ${
                  profileDropShow ? "dropdown-icon-rotate" : ""
                }`}></i>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          display: profileDropShow ? "block" : "none",
        }}
        className={`dropdown-content ${
          profileDropShow ? "show-profile-drop" : "hide-profile-drop"
        }`}>
        <div className="links">
          <i className="fa-solid fa-wallet"></i>
          <Link href="/balance">Balance</Link>
        </div>
        <div className="links">
          <i className="fa-solid fa-gear"></i>
          <Link href="/account-settings">Account Settings</Link>
        </div>
        <div className="links">
          {/* <i className="fa-solid fa-right-left"></i>
           */}
          <img src="/img/transaction.png" alt="" />
          <Link href="/transaction">Transaction History</Link>
        </div>
        <div className=" n-links d-flex d-lg-none">
          <i className="fa-regular fa-bell"></i>
          <Link href="/notifications">Notifications</Link>
        </div>
        {/* <div className="links">
          <img src="/img/support.png" alt="" />
          <Link href="/support">Support</Link>
        </div> */}

        <div className="links">
          <i className="fa-regular fa-circle-question"></i>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="links">
          <i className="fa-solid fa-note-sticky"></i>
          <Link href="/blogs">Blog</Link>
        </div>

        <div className="links" onClick={logout}>
          <img src="/img/logout.png" alt="" />
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDown;
