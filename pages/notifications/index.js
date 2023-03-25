import React, {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import CommonNotification from "../../components/notifications/CommonNotification";
import Footer from "../../components/ui/Footer";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/ui/Navbar";
import Paginition from "../../components/ui/Paginition";
import blogServices from "../../services/blogService";
import {withAuth} from "../../utils/useAuth";

function Index() {
  const [allNotifations, setAllNotifiactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [pageData, setPagaData] = useState({
    per_page: 10,
    page: 1,
    filter: "",
  });
  const dispatch = useDispatch();
  const fetchData = async () => {
    setLoading(true);
    const res = await blogServices.getAllNotifactions(pageData);
    if (res.status === 200) {
      setLoading(false);
      setAllNotifiactions(res?.data);

      console.log(res.data.meta.last_page, "notifications ");
    } else {
      setLoading(false);
      console.log(res);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageData.page]);

  let no_notifications = (
    <>
      <div className="noti__img mb-5">
        <img src="img/image 5.png" alt="" />
      </div>
      <p style={{color: "#9DB4D3"}} className="fs-4 mb-4">
        Seems like you have checked all notifications.{" "}
      </p>
      <button className="btn">Go to Dojo Inventory</button>
    </>
  );
  return (
    <>
      <div className="header_area">
        <Navbar isAuth={true} />
        <hr className="mt-3 mb-5" />
      </div>
      <main
        className="pb-5"
        style={{
          minHeight: "100vh",
        }}>
        <section className="market">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 section__title">
                <Breadcrumb name={"Notifications"} />
              </div>

              <div className="col-12">
                <h1 className="fs-3 d-flex align-items-center mb-4">
                  <img
                    className="me-3"
                    style={{height: "50px", width: "50px"}}
                    src={userProfile?.data?.steam_user_info?.avatar}
                    alt=""
                  />{" "}
                  Notifications
                </h1>
                {loading ? (
                  <Loader />
                ) : allNotifations?.data.length > 0 ? (
                  <div className="gene__content">
                    {allNotifations?.data?.map((noti, index) => (
                      <>
                        <CommonNotification key={index}>
                          <p style={{color: "white"}} className="mb-4">
                            {" "}
                            {noti?.notifications?.notification_data}
                          </p>
                        </CommonNotification>
                      </>
                    ))}

                    {/* <button className="h_btn">
                      <i className="fa-solid fa-xmark"></i> Clear all
                    </button> */}
                  </div>
                ) : (
                  no_notifications
                )}
              </div>
              <Paginition
                setPagaData={setPagaData}
                pageData={pageData}
                pageLength={allNotifations?.meta?.last_page}
              />

              {/* <div className="col-xl-3">
                <p className="d-flex align-items-center justify-content-end mb-4">
                  Disable <span className="modeBtn ms-3"></span>
                </p>
                <p style={{color: "#9DB4D3"}} className="mb-3">
                  Show notifications
                </p>
                <h4 className="d-flex justify-content-between align-items-center fs-6 allDown">
                  All <i className="fa-solid fa-chevron-down"></i>
                </h4>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default withAuth(Index);
