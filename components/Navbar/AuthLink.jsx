import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUnreadNotiLength} from "../../redux/actions/utilsAction";
import blogServices from "../../services/blogService";
import ProfileDropDown from "./ProfileDropDown";

function AuthLink({
  handleNotiDrop,
  unreadNotificationLength,
  notificationDropShow,
  handleDrop,
  logout,
  profileDropShow,
}) {
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [unReadNoti, setUnReadNoti] = useState([]);

  const dispatch = useDispatch();

  // get all data  with async function
  const handleMarkAsRead = async (id) => {
    const res = await blogServices.markAsRead(id);
    if (res.status === 200) {
      notifactions();
    }
  };

  const notifactions = async () => {
    const res = await blogServices.notifcations();
    console.log(res.data, "res.data");
    if (res?.status === 200) {
      setUnReadNoti(res.data.data);

      dispatch(setUnreadNotiLength(res.data.unread_notification_count));
    }
  };

  useEffect(() => {
    notifactions();
  }, []);

  return (
    <>
      <div className="login d-flex justify-content-between align-items-center">
        <div className="login__user">
          <i className="fa-solid fa-wallet" style={{marginRight: 10}}></i>
          <span>
            $
            {parseFloat(userProfile?.data?.steam_user_info?.balance).toFixed(
              1
            ) || "0.00"}
          </span>
        </div>
        <ProfileDropDown
          logout={logout}
          profileDropShow={profileDropShow}
          userProfile={userProfile}
          handleDrop={handleDrop}
        />
        <div className="profile-dropdown">
          <div
            onClick={handleNotiDrop}
            className="login__user  justify-content-between align-items-center d-none d-lg-flex">
            <div className="user ">
              <div className=" position-relative ">
                <i className="fa-regular fa-bell" style={{marginRight: 10}}></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {unreadNotificationLength}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>

              {/* <span className="name">Notifications </span> */}
            </div>
          </div>
          <div
            className={`dropdown-content  ${
              notificationDropShow ? "show-profile-drop" : "hide-profile-drop"
            }`}
            style={{
              width: "400px",
              display: notificationDropShow ? "block" : "none",
              minHeight: "100px",
              border: " 1px solid rgba(34, 34, 34, 0.8196078431)",
            }}>
            {unReadNoti.length > 0 ? (
              unReadNoti.map((noti, index) => (
                <>
                  <div
                    key={index}
                    className="links"
                    style={{
                      border: "1px solid gray",
                      position: "relative",

                      borderRadius: "10px",
                    }}>
                    <p
                      style={{
                        width: "90%",
                        padding: "15px",
                      }}>
                      {noti?.notifications?.notification_data}
                    </p>
                    <p
                      onClick={() => handleMarkAsRead(noti.id)}
                      style={{
                        position: "absolute",
                        top: 10,
                        top: " -10px",
                        right: "10px",
                        padding: "10px",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "indianred",
                      }}>
                      x
                    </p>
                  </div>
                </>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  marginBottom: "20px",
                  alignItems: "center",
                }}>
                <i
                  className="fa-regular fa-bell-slash"
                  style={{marginRight: 10, fontSize: "30px"}}></i>
                <p
                  style={{
                    fontSize: "20px",
                    fontWidth: "600",
                  }}>
                  No new notifications
                </p>
              </div>
            )}

            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
              }}>
              <Link href="/notifications">See all</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLink;
