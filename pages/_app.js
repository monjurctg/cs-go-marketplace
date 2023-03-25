import axios from "axios";
import Head from "next/head";
import "react-input-range/lib/css/index.css";
import {useRouter} from "next/router";
import Script from "next/script";
import {useMemo, useRef, useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import CompleteProfile from "../components/process/streem/CompleteProfile";
import DefaultModal from "../components/ui/modal/DefaultModal";
import {getUserProfileDataAction} from "../redux/actions/authAction";
import {wrapper} from "../redux/store";
import AuthServices from "../services/AuthServices";

import "../styles/globals.scss";
import {getToken, setToken} from "../utils/helperFunctions";

function MyApp({Component, pageProps}) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  axios.defaults.headers["Accept"] = "application/json";
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  axios.interceptors.request.use((config) => {
    const access_token = getToken();
    // console.log(access_token);

    config.headers.Authorization = access_token ? `Bearer ${access_token}` : "";
    return config;
    // } else {
    //   console.log("No Internet ");
    // }
  });
  const [compleModalShow, setCompleteModalShow] = useState(false);
  const userProfile = useSelector((state) => state.auth.userProfile);
  const router = useRouter();
  const dispatch = useDispatch();
  const tradeUrl = userProfile?.data?.steam_user_info?.trade_url;

  // console.log(userProfile?.data?.steam_user_info?.trade_url, "trade url");
  const checkToken = async (token) => {
    const res = await AuthServices.checkToken(token);

    if (res.status === 200) {
      console.log("hello 200");
      dispatch(getUserProfileDataAction());
    } else {
      setToken("");
      dispatch(getUserProfileDataAction());
    }
  };
  // console.log(compleModalShow, "compleModalShow");

  // const fetchUser = async () => {
  //   if (getToken()) {
  //     const res = await AuthServices.getUser();
  //     if (res.status === 200) {
  //       console.log(res?.data?.data?.steam_user_info.trade_url, "steam");
  //       if (res.data.data.steam_user_info.trade_url) {
  //         setCompleteModalShow(true);
  //       } else {
  //         setCompleteModalShow(true);
  //       }
  //     }
  //   }
  // };
  // console.log(tradeOnModal);
  // if (tradeOnModal === "false") {
  //   console.log("call eve time", compleModalShow);
  //   setCompleteModalShow(false);
  // }

  // useEffect(() => {
  //   console.log("hello");

  //   tradeOnModal = localStorage.getItem("trade_modal_on");

  //   console.log(tradeOnModal, "before condition");
  //   if (tradeOnModal === "true") {
  //     setCompleteModalShow(true);
  //     console.log(tradeOnModal, "before condition if");
  //   } else {
  //     setCompleteModalShow(false);
  //     console.log(tradeOnModal, "before condition else");
  //   }
  // }, [compleModalShow]);
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  console.log(router, "router");

  useMemo(() => {
    if (router === "payment") {
      return;
    }
    if (userProfile?.data.id) {
      if (tradeUrl) {
        setCompleteModalShow(false);
      } else {
        setCompleteModalShow(true);
      }
    }
    // fetchUser();
  }, [tradeUrl, router]);

  // useEffect(() => {
  //   const token = getToken();

  //   if (token) {
  //     checkToken(token);
  //   }
  // }, [router]);
  const onLoad = () => {
    console.log("onLoad works!");
  };

  return (
    <>
      <Head>
        <title>Skins Dojo</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
      <TawkMessengerReact
        propertyId="63ea30634742512879130c3b"
        widgetId="1gp5cq1g6"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js"
        integrity="sha512-rpLlll167T5LJHwp0waJCh3ZRf7pO6IT1+LZOhAyP6phAirwchClbTZV3iqL3BMrVxIYRbzGTpli4rfxsCK6Vw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
        async
      />
      {/* <Script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date()
(function(){
let s1=document.createElement("script");
var s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63d6c9d94742512879104729/1gnvg8var';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</Script> */}
      <Component {...pageProps} />
      <DefaultModal
        setClose={setCompleteModalShow}
        isShow={compleModalShow}
        from="complete profile"
        body={<CompleteProfile setCompleteModalShow={setCompleteModalShow} />}
      />
    </>
  );
}

export default wrapper.withRedux(MyApp);
