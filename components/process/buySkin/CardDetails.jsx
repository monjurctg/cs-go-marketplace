import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import PaymentServices from "../../../services/PaymentServices";
import {
  balancePercentageReduce,
  successNotification,
} from "../../../utils/helperFunctions";
import ButtonSpinner from "../../ui/ButtonSpinner";
import img1 from "../../../public//img/Icon.png";

function CardDetails({setClose, isShow}) {
  const userProfile = useSelector((state) => state.auth.userProfile);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    type: "",
    message: "",
  });

  const [withdrawInput, setWithdrawInput] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    amount: "",
    account_holder_name: "",
    routing_number: "",
    account_number: "",
    address_city: "",
    address_line1: "",
    address_postal_code: "",
    address_state: "",
    address_country_code: "",
  });
  const errorType = {
    first_name: "first_name",
    last_name: "last_name",
    phone: "phone",
    email: "email",
    amount: "amount",
    account_holder_name: "account_holder_name",
    routing_number: "routing_number",
    account_number: "account_number",
    address_city: "address_city",
    address_line1: "address_line1",
    address_postal_code: "address_postal_code",
    address_state: "address_state",
  };

  const clearState = () => {
    setWithdrawInput({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      amount: "",
      account_holder_name: "",
      routing_number: "",
      account_number: "",
      address_city: "",
      address_line1: "",
      address_postal_code: "",
      address_state: "",
    });
  };

  useEffect(() => {
    if (!isShow) {
      clearState();
    }
  }, [isShow]);

  let withdrawAble = parseFloat(
    balancePercentageReduce(userProfile?.data?.steam_user_info?.balance, 5)
  );

  const handleInputChange = (e) => {
    setWithdrawInput({
      ...withdrawInput,
      [e.target.name]: e.target.value,
    });
  };

  const fetchCountries = async () => {
    const res = await PaymentServices.countries();
    if (res.status === 200) {
      setCountries(res.data.data);
    }

    // console.log(res, "countries");
  };

  console.log(countries[0], "countries state");
  useEffect(() => {
    fetchCountries();
  }, []);

  // handle error
  const handleError = () => {
    if (!withdrawInput.first_name.trim()) {
      setError({type: errorType.first_name, message: "First name  required"});
      return "error";
    } else if (!withdrawInput.last_name.trim()) {
      setError({type: errorType.last_name, message: "Last name is required"});
      return "error";
    } else if (!withdrawInput.email.trim()) {
      setError({type: errorType.email, message: "Email is required"});
      return "error";
    } else if (!withdrawInput.phone.trim()) {
      setError({type: errorType.phone, message: "Phone number  is required"});
      return "error";
    } else if (!withdrawInput.amount.trim()) {
      setError({type: errorType.amount, message: "Last name  is required"});
      return "error";
    } else if (!withdrawInput.account_holder_name) {
      setError({
        type: errorType.account_holder_name,
        message: "Account holder name  is required",
      });
      return "error";
    } else if (!withdrawInput.routing_number.trim()) {
      setError({
        type: errorType.routing_number,
        message: "Routing number  is required",
      });
      return "error";
    } else if (!withdrawInput.account_number.trim()) {
      setError({
        type: errorType.account_number,
        message: "Account number  is required",
      });
      return "error";
    } else if (!withdrawInput.address_city.trim()) {
      setError({
        type: errorType.address_city,
        message: "City name  is required",
      });
      return "error";
    } else if (!withdrawInput.address_line1.trim()) {
      setError({
        type: errorType.address_line1,
        message: "Line1  is required",
      });
      return "error";
    } else if (!withdrawInput.address_postal_code.trim()) {
      setError({
        type: errorType.address_postal_code,
        message: "Postal code is required",
      });
      return "error";
    } else if (!withdrawInput.address_state.trim()) {
      setError({
        type: errorType.address_postal_code,
        message: "State is required",
      });
      return "error";
    } else {
      if (withdrawInput.amount.trim()) {
        if (withdrawAble < withdrawInput.amount) {
          setError({type: errorType.amount, message: "Not Enough Balance"});
          return "error";
        }
      }

      return "no error";
    }
  };
  // handle submit
  const handleSubmit = async () => {
    const isError = handleError();

    if (isError === "no error") {
      console.log("object");
      const res = await PaymentServices.withdraw(withdrawInput);
      setLoading(true);
      if (res?.status === 200) {
        console.log(res.data);
        setLoading(false);
        successNotification(res.data.message);
        setClose(false);
        clearState();
      } else {
        setLoading(false);
        setError({type: "", message: res?.response?.data?.message});
      }
    }
    // setClose(false);
  };
  return (
    <div className="card-details">
      <div className="modal__title ">
        <div className="title w-100">
          <h2 className="mb-2">
            {/* <i className="fa-solid fa-arrow-left "></i>{" "} */}
            Withdraw | Add Bank Details
          </h2>
          <span
            style={{color: "#ffc700"}}
            className="d-flex mb-3 align-items-center">
            <Image className="" src={img1} alt="" />{" "}
            <span style={{marginLeft: "15px"}}>
              Payment system commission is 0.25%+
            </span>
          </span>
          <p className="mod__id   d-flex justify-content-between align-items-center">
            <span
              style={{color: "#ffc700"}}
              className="d-flex align-items-center">
              <i className="fa-regular fa-user me-2"></i> Personal Information
            </span>
            <span className="balance2">
              Your balance{" "}
              <span>
                {" "}
                $
                {parseFloat(
                  userProfile?.data?.steam_user_info?.balance
                ).toFixed(2)}
              </span>
            </span>
          </p>
        </div>
      </div>

      <div className="modal__content mb-3">
        <div
          style={{gap: "15px"}}
          className="d-flex align-items-sm-center align-items-start flex-column flex-sm-row">
          <div className="l flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">First Name</p>
            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border:
                  error.type == errorType.first_name ? "1px solid red" : "",
              }}>
              <input
                onChange={handleInputChange}
                onFocus={() => setError({type: "", message: ""})}
                type="text"
                autoComplete="off"
                name="first_name"
                value={withdrawInput.first_name}
                id="lName"
                placeholder="Jenny"
              />
            </div>
          </div>
          <div className="r flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">Last Name</p>
            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border:
                  error.type == errorType.last_name ? "1px solid red" : "",
              }}>
              <input
                type="text"
                onFocus={() => setError({type: "", message: ""})}
                onChange={handleInputChange}
                autoComplete="off"
                name="last_name"
                value={withdrawInput.last_name}
                id="lName"
                placeholder=" Rosen"
              />
            </div>
          </div>
        </div>

        <div
          style={{gap: "15px"}}
          className="d-flex align-items-sm-center align-items-start flex-column flex-sm-row">
          <div className="l flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">Email</p>
            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border: error.type == errorType.email ? "1px solid red" : "",
              }}>
              <input
                onChange={handleInputChange}
                autoComplete="off"
                onFocus={() => setError({type: "", message: ""})}
                type="text"
                value={withdrawInput.email}
                name="email"
                id="lName"
                placeholder="jenny@bestcookieco.com"
              />
            </div>
          </div>
          <div className="r flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">Phone</p>
            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border: error.type == errorType.phone ? "1px solid red" : "",
              }}>
              <input
                type="text"
                name="phone"
                autoComplete="off"
                onFocus={() => setError({type: "", message: ""})}
                value={withdrawInput.phone}
                onChange={handleInputChange}
                id="lName"
                placeholder="8888675309"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bank Information */}
      <div className="modal__title">
        <div className="title w-100">
          <p className="mod__id d-flex justify-content-between align-items-center">
            <span
              style={{color: "#ffc700"}}
              className="d-flex align-items-center">
              <i className="fa-solid fa-window-maximize me-2"></i> Bank
              Information
            </span>
          </p>
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="modal__content mb-3">
        <div
          style={{gap: "15px"}}
          className="d-flex align-items-sm-center align-items-start flex-column flex-sm-row">
          <div className="l flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">Amount</p>
            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border: error.type == errorType.amount ? "1px solid red" : "",
              }}>
              <input
                type="number"
                autoComplete="off"
                onFocus={() => setError({type: "", message: ""})}
                onChange={handleInputChange}
                name="amount"
                id="lName"
                value={withdrawInput.amount}
                placeholder="100"
              />
            </div>
          </div>
          <div className="r flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">Account Holder Name</p>
            <div className="dipo__amount mb-3 d-flex align-items-center">
              <input
                type="text"
                autoComplete="off"
                onFocus={() => setError({type: "", message: ""})}
                onChange={handleInputChange}
                name="account_holder_name"
                id="lName"
                value={withdrawInput.account_holder_name}
                placeholder="Jenny Rosen"
              />
            </div>
          </div>
        </div>
        <div
          style={{gap: "15px"}}
          className="d-flex align-items-sm-center align-items-start flex-column flex-sm-row">
          <div className="l flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">Routing Number</p>
            <div className="dipo__amount mb-3 d-flex align-items-center">
              <input
                type="number"
                autoComplete="off"
                name="routing_number"
                onFocus={() => setError({type: "", message: ""})}
                onChange={handleInputChange}
                value={withdrawInput.routing_number}
                id="lName"
                placeholder="10000000000"
              />
            </div>
          </div>
          <div className="r flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">Account Number</p>
            <div className="dipo__amount mb-3 d-flex align-items-center">
              <input
                type="number"
                name="account_number"
                id="lName"
                autoComplete="off"
                onFocus={() => setError({type: "", message: ""})}
                onChange={handleInputChange}
                value={withdrawInput.account_number}
                placeholder="000123456789"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Adress */}
      <div className="modal__title">
        <div className="title w-100">
          <p className="mod__id d-flex justify-content-between align-items-center">
            <span
              style={{color: "#ffc700"}}
              className="d-flex align-items-center">
              <i className="fa-solid fa-window-maximize me-2"></i> Address
            </span>
          </p>
        </div>
        <span className="off">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <div className="modal__content mb-3">
        <div
          style={{gap: "15px"}}
          className="d-flex align-items-sm-center align-items-start flex-column flex-sm-row">
          <div className="r flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">
              <span className="dipo">Country</span>
              <span className="dipo"> (ISO Code)</span>
            </p>
            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border:
                  error.type == errorType.address_country_code
                    ? "1px solid red"
                    : "",
              }}>
              <select
                onChange={(e) =>
                  setWithdrawInput({
                    ...withdrawInput,
                    address_country_code: e.target.value,
                  })
                }
                className="country-select"
                style={{
                  background: "#0e0726",

                  color:
                    withdrawInput.address_country_code ===
                    ("Select Country Alpha Code" || " ")
                      ? "gray"
                      : "white",
                  outline: "none",
                  border: "none",
                  width: "100%",
                }}>
                <option>Select country iso code</option>
                {countries.map((alphaCode, index) => {
                  return (
                    <option
                      key={index}
                      value={alphaCode}
                      className="country-option">
                      {alphaCode}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="r flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">City</p>
            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border:
                  error.type == errorType.address_city ? "1px solid red" : "",
              }}>
              <input
                onChange={handleInputChange}
                type="text"
                autoComplete="off"
                onFocus={() => setError({type: "", message: ""})}
                name="address_city"
                id="lName"
                value={withdrawInput.address_city}
                placeholder="New York"
              />
            </div>
          </div>
        </div>
        <div className=" r flex-fill w-100 w-sm-50">
          <p className="mb-3 dipo">Address</p>
          <div
            className="dipo__amount mb-3 d-flex align-items-center"
            style={{
              border:
                error.type == errorType.address_line1 ? "1px solid red" : "",
            }}>
            <input
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
              name="address_line1"
              onFocus={() => setError({type: "", message: ""})}
              value={withdrawInput.address_line1}
              id="lName"
              placeholder="1234 Main Street"
            />
          </div>
        </div>
        <div
          style={{gap: "15px"}}
          className="d-flex align-items-sm-center align-items-start flex-column flex-sm-row">
          <div className="l flex-fill w-100 w-sm-50">
            <p className="mb-3 dipo">Postal Code</p>
            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border:
                  error.type == errorType.address_postal_code
                    ? "1px solid red"
                    : "",
              }}>
              <input
                type="number"
                autoComplete="off"
                aria-autocomplete="off"
                onChange={handleInputChange}
                onFocus={() => setError({type: "", message: ""})}
                name="address_postal_code"
                id="lName"
                value={withdrawInput.address_postal_code}
                placeholder="10001"
              />
            </div>
          </div>
          <div className="l flex-fill g-2 w-100 w-sm-50">
            <p className="mb-3 dipo">
              <span className="dipo">State</span>
              <span className="dipo"> (Alpha Code)</span>
            </p>

            <div
              className="dipo__amount mb-3 d-flex align-items-center"
              style={{
                border:
                  error.type == errorType.address_state ? "1px solid red" : "",
              }}>
              <input
                onChange={handleInputChange}
                type="text"
                autoComplete="off"
                onFocus={() => setError({type: "", message: ""})}
                name="address_state"
                id="lName"
                value={withdrawInput.address_state}
                placeholder="NY"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-danger">{error.message ? error.message : ""}</p>
        </div>
        <div className="modal__btn mt-3">
          <button className="h_btn" onClick={() => setClose(false)}>
            <i className="fa-solid fa-xmark me-2"></i> Cancel
          </button>
          <button className="btn" onClick={handleSubmit}>
            {loading ? (
              <ButtonSpinner />
            ) : (
              <>
                <i className="fa-solid fa-check me-2"></i>Confirm
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
