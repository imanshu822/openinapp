import React, { useEffect, useState } from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import google from "../assets/google-icon 1.png";
import apple from "../assets/apple 1.png";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import Vector7 from "../assets/Vector7.svg";
import Ellipse from "../assets/Ellipse111.svg";

const Login = () => {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const profilePic = data.user.photoURL;
        const email = data.user.email;
        setValue(data.user.email);
        localStorage.setItem("email", email);
        localStorage.setItem("pic", profilePic);
        localStorage.setItem("authenticated", true);
        setauthenticated(true);
        navigate("/home");
        setCheck(false);
      })
      .catch((err) => navigate("/"));
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(true);
    }
    setCheck(false);
  }, []);

  console.log(authenticated);
  if (authenticated && !check) {
    return <Navigate replace to="/home" />;
  } else {
    return (
      <div className="flex flex-col sm:flex-row justify-between bg-[#F5F5F5] items-center w-full">
        <div className="flex h-[60px] sm:h-[80px] sm:min-h-screen w-full sm:w-[75%] bg-[#605BFF] clipped">
          <h1 className="text-white font-bold  sm:text-[24px] ml-12 mt-8 clipped-opposite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
            >
              <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />

              <svg
                x="-3"
                y="25"
                xmlns="http://www.w3.org/2000/svg"
                width="87"
                height="30"
                viewBox="0 0 87 30"
                fill="none"
              >
                <path
                  d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646"
                  stroke="#605BFF"
                  stroke-width="6"
                />
              </svg>
            </svg>
          </h1>
          <div className=" flex justify-center items-center ml-[15%]">
            <h1 className=" text-white font-bold text-[2rem] md:text-[3rem] lg:text-[4.5rem] clipped-opposite">
              BASE
            </h1>
          </div>
          <div className="fixed flex justify-center items-center w-full h-fit bottom-0 clipped-opposite mb-12">
            <div className="flex gap-x-6">
              <img src={github} className="w-[34px] h-[34px]" />
              <img src={twitter} className="w-[34px] h-[34px]" />
              <img src={linkedin} className="w-[34px] h-[34px]" />
              <img src={discord} className="w-[34px] h-[34px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-between items-start px-6 gap-2">
              <h2 className="text-[18px] sm:text-[36px] text-black font-bold sm:leading-[43.88px]">
                Sign In
              </h2>
              <p className="text-[16px] font-lato sm:leading-[19.2px] text-black">
                Sign in to your account
              </p>
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <button
                onClick={handleClick}
                className="text-[12px] text-[#858585] w-[160px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 "
              >
                <div className="flex justify-between items-center">
                  <img
                    src={google}
                    alt="google"
                    className="w-[14px] h-[14px]"
                  />
                  Sign in with Google
                </div>
              </button>
              <button className="text-[12px] text-[#858585] w-[150px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 ">
                <div className="flex justify-between items-center">
                  <img src={apple} alt="google" className="w-[14px] h-[14px]" />
                  Sign in with Apple
                </div>
              </button>
            </div>
            <div className="flex bg-white rounded-2xl flex-col items-center mx-auto">
              <form className="flex flex-col text-black px-10 py-6 gap-4">
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Email Address
                  </h1>
                  <input
                    className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Email..."
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Password
                  </h1>
                  <input
                    className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Password..."
                  />
                </div>
                <p className="text-[#346BD4] cursor-pointer">
                  Forgot password?
                </p>
                <button className="bg-[#605BFF] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
                  Sign In
                </button>
              </form>
            </div>
            <p className="text-[#858585] mx-auto">
              Don’t have an account?{" "}
              <span className="text-[#605BFF] cursor-pointer">
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
