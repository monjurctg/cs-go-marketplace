import Link from "next/link";
import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import CardDetails from "../../components/process/buySkin/CardDetails";
import InitailProcess from "../../components/process/buySkin/InitialProcess";
import Footer from "../../components/ui/Footer";
import Loader from "../../components/ui/Loader";
import SimpleModal from "../../components/ui/modal/SimpleModal";
import Navbar from "../../components/ui/Navbar";
import TransactionServices from "../../services/transactionServices";
import {balancePercentageReduce} from "../../utils/helperFunctions";
import {withAuth} from "../../utils/useAuth";

const Index = () => {
  const [defaltModalShow, setDefaultModalShow] = useState(false);
  const [depositOrWithdraw, setDepositOrWithdraw] = useState("");
  const [loading, setLoading] = useState(false);
  const [balanceHistoryData, setBalanceHistoryData] = useState([
    {
      date: "1/2/2023",
      type: "Diposit",
      amount: 230,
      payment_method: "paypal",
    },
    {
      date: "1/2/2023",
      type: "Diposit",
      amount: 230,
      payment_method: "paypal",
    },
    {
      date: "3/2/2023",
      type: "withdraw",
      amount: 420,
      payment_method: "stripe",
    },
    {
      date: "1/2/2023",
      type: "Diposit",
      amount: 230,
      payment_method: "paypal",
    },
  ]);
  const userProfile = useSelector((state) => state.auth.userProfile);
  // console.log(userProfile.data.steam_user_info.avatar, "user profile");

  const handleEventClick = (CASE) => {
    setDefaultModalShow(!defaltModalShow);
    setDepositOrWithdraw(CASE);
  };

  const getBalanceTransaction = async () => {
    const data = {
      per_page: "",
      page: "",
    };
    setLoading(true);
    const res = await TransactionServices.getAllTransactionBalance(data);
    if (res?.status == 200) {
      // console.log(res.data.data, "res from balance");
      setLoading(false);
      setBalanceHistoryData(res.data.data);
    } else {
      setLoading(false);
      // console.log(res, "res from balance else block");
    }
  };

  useEffect(() => {
    // getBalanceTransaction();
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <div className="header_area">
          <Navbar isAuth={true} />
          <hr className="mt-3 mb-5" />
        </div>
        <section className="market ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 section__title mb-4">
                <Breadcrumb name={"Balance"} title="Balance" />
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
                  Balance
                </h3>
              </div>
              <div className="col-12 mb-5">
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-md-0">
                    <div className="balance__box">
                      <p>Total Balance</p>
                      <h5>$ 1200</h5>
                      <button
                        className="btn"
                        onClick={() => handleEventClick("deposit")}>
                        <i className="fa-solid fa-arrow-up "></i> Deposit funds
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4">
                    <div className="balance__box">
                      <p>Withdrawable</p>
                      <h5 style={{color: "#FFC700"}}>$1270</h5>

                      <button
                        className="h_btn"
                        onClick={() => handleEventClick("withdraw")}>
                        <i className="fa-solid fa-arrow-down"></i> Withdraw
                        funds
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h3 className="d-flex align-items-center mb-4">
                  Balance History
                </h3>
                <div className="balance_table d-none d-md-block">
                  <table className="w-100">
                    <tbody>
                      <tr>
                        <th>Date</th>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Payment type</th>
                      </tr>
                      {balanceHistoryData.map((balance, index) => (
                        <tr key={index}>
                          <td>{balance.date}</td>
                          <td
                            className={
                              balance.type == "Deposit" ? "dipo" : "wid"
                            }>
                            {balance.type}
                          </td>
                          <td>${balance.amount}</td>
                          <td>{balance.payment_method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="balance_table d-block d-md-none">
                  <table className="w-100 moboTable">
                    {balanceHistoryData.map((balance, index) => (
                      <>
                        <tbody className="mb-4">
                          <tr>
                            <th className="w-100">{balance.date}</th>
                          </tr>
                          <tr>
                            <td className="mobo__td">Transaction</td>
                            <td
                              className={
                                balance.type == "Deposit"
                                  ? "dipo text-end"
                                  : "wid text-end"
                              }>
                              {balance.type}
                            </td>
                          </tr>
                          <tr>
                            <td className="mobo__td">Amount</td>
                            <td>${balance.amount}</td>
                          </tr>
                          <tr>
                            <td className="mobo__td">Payment method</td>
                            <td>{balance.payment_method}</td>
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
        <SimpleModal
          from="card-withdraw"
          isShow={defaltModalShow}
          setClose={setDefaultModalShow}
          isFromBalance={depositOrWithdraw}
          size={"small-modal"}
          body={
            depositOrWithdraw == "withdraw" ? (
              <CardDetails
                setClose={setDefaultModalShow}
                isShow={defaltModalShow}
              />
            ) : (
              <InitailProcess
                isFromBalance={depositOrWithdraw}
                setDepositOrWithdraw={setDepositOrWithdraw}
                setClose={setDefaultModalShow}
                isShow={defaltModalShow}
              />
            )
          }
        />
      </>
    );
  }
};

export default Index;
