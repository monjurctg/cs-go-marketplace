import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import Footer from "../../components/ui/Footer";
import Loader from "../../components/ui/Loader";
import Navbar from "../../components/ui/Navbar";
import TransactionServices from "../../services/transactionServices";
import {withAuth} from "../../utils/useAuth";

const Index = () => {
  const [data, setData] = useState({});
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [loading, setLoading] = useState(true);

  const fetchTransactionHistory = async () => {
    try {
      const res = await TransactionServices.getAllTransactionHistory();
      if (res.status === 200) {
        setData(res.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactionHistory();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="header_area">
        <Navbar isAuth={true} />
        <hr className="mt-3 mb-5" />
      </div>
      <section className="market ">
        <div className="container-lg">
          <div className="row">
            <div className="col-xl-12 section__title mb-4">
              <Breadcrumb name={"Transaction History"} title="Balance" />
              <h3 className="d-flex align-items-center">
                <div className="inventory__icon me-3">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                    src={userProfile?.data?.steam_user_info?.avatar}
                    alt=""
                  />
                </div>
                Transaction History
              </h3>
            </div>
            <div className="col-12 mb-5">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-md-0">
                  <div
                    className="balance__box"
                    style={{
                      height: "170px",
                      width: "300px",
                    }}>
                    <div className="d-flex ">
                      <div
                        className="d-flex  justify-content-center align-items-center"
                        style={{
                          height: "30px",

                          width: "30px",
                          borderRadius: "50%",
                          background: "#FFC700",
                        }}>
                        <img src="/img/icone.png" alt="" />
                      </div>
                      <p
                        style={{
                          color: "#FFC700",
                          fontSize: "16px",
                          marginLeft: "10px",
                        }}>
                        Currently listed items
                      </p>
                    </div>
                    <div className="d-flex mt-4 justify-content-between ">
                      <div className="left">
                        <h3>{data.currentlyListedItems}</h3>
                        <p>Items listed</p>
                      </div>
                      <div className="right">
                        <h3>
                          $
                          {parseFloat(data.currentlyListedItemsTotal).toFixed(
                            2
                          )}
                        </h3>
                        <p>Total</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-md-0">
                  <div
                    className="balance__box"
                    style={{
                      height: "170px",
                      width: "300px",
                    }}>
                    <div className="d-flex ">
                      <div
                        className="d-flex  justify-content-center align-items-center"
                        style={{
                          height: "30px",

                          width: "30px",
                          borderRadius: "50%",
                          background: "#FFC700",
                        }}>
                        <img src="/img/cart.png" alt="" />
                      </div>
                      <p
                        style={{
                          color: "#FFC700",
                          fontSize: "16px",
                          marginLeft: "10px",
                        }}>
                        Purchases
                      </p>
                    </div>
                    <div className="d-flex mt-4 justify-content-between ">
                      <div className="left">
                        <h3>{data.purchasedItems}</h3>
                        <p>Purchased items</p>
                      </div>
                      <div className="right">
                        <h3>
                          ${parseFloat(data.purchasedItemsTotal).toFixed(2)}
                        </h3>
                        <p>Total</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-md-0">
                  <div
                    className="balance__box"
                    style={{
                      height: "170px",
                      width: "300px",
                    }}>
                    <div className="d-flex ">
                      <div
                        className="d-flex  justify-content-center align-items-center"
                        style={{
                          height: "30px",

                          width: "30px",
                          borderRadius: "50%",
                          background: "#FFC700",
                        }}>
                        <img src="/img/cart.png" alt="" />
                      </div>
                      <p
                        style={{
                          color: "#FFC700",
                          fontSize: "16px",
                          marginLeft: "10px",
                        }}>
                        Sales
                      </p>
                    </div>
                    <div className="d-flex mt-4 justify-content-between ">
                      <div className="left">
                        <h3>{data.soldItems} </h3>
                        <p>Items sold</p>
                      </div>
                      <div className="right">
                        <h3>${parseFloat(data.soldItemsTotal).toFixed(2)}</h3>
                        <p>Total</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h3 className="d-flex align-items-center mb-4">
                Transaction History
              </h3>
              <div className="balance_table d-none d-md-block">
                <table className="w-100">
                  <tbody>
                    <tr>
                      <th>Date</th>
                      <th>Operation</th>
                      <th>Item</th>
                      <th>Amount</th>
                    </tr>
                    {data?.transactionHistory?.map((th, i) => (
                      <>
                        <tr>
                          <td>{th?.date}</td>
                          <td
                            className={
                              th?.operation === "Buy" ? "dipo" : "wid"
                            }>
                            {th?.operation}
                          </td>
                          <td>{th?.item_name}</td>
                          <td>${th?.amount}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="balance_table d-block d-md-none">
                <table className="w-100 moboTable">
                  {data?.transactionHistory?.map((th, i) => (
                    <>
                      <tbody className="mb-4">
                        <tr>
                          <th className="w-100">{th?.date}</th>
                        </tr>
                        <tr>
                          <td className="mobo__td w-50">Operation</td>
                          <td className="dipo text-end w-50">
                            {th?.operation}
                          </td>
                        </tr>
                        <tr>
                          <td className="mobo__td w-50">Item</td>
                          <td className="dipo text-end w-50">
                            {th?.item_name}
                          </td>
                        </tr>
                        <tr>
                          <td className="mobo__td">Amount</td>
                          <td className="text-end">${th?.amount}</td>
                        </tr>
                      </tbody>
                    </>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
