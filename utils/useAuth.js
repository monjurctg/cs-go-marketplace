import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setOpenModal} from "../redux/actions/authAction";

import AuthServices from "../services/AuthServices";
import {errorNotification, getToken, removeToken} from "./helperFunctions";

export const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const [auth, setauth] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();
    // const checkToken = async (token) => {
    //   const res = await AuthServices.checkToken(token);
    //   // console.log('res', res)
    //   if (res.status === 200) {
    //     setauth(true);
    //   } else {
    //     removeToken();
    //     dispatch(setOpenModal());
    //   }
    // };

    // console.log('auth', auth)

    useEffect(() => {
      const token = getToken();

      if (!token) {
        errorNotification("Please login to continue");
        router.push("/");
        dispatch(setOpenModal());
      } else {
        // console.log('hi')
        // checkToken(token);
      }
    }, [dispatch, router]);

    return auth ? <Component {...props} /> : null;

    // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};
