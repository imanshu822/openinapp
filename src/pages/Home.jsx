import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
// import UploadHistory from "../components/UploadHistory";
import DropFileInput from "../components/DropFileInput";
const Home = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [check, setCheck] = useState(true);
  const profileImg = localStorage.getItem("pic");
  const userName = localStorage.getItem("userName");
  console.log(userName);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(true);
    }
    setCheck(false);
  }, []);

  if (!authenticated && !check) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        <div className="relative flex flex-col w-full sm:flex-row justify-between gap-4 lg:gap-6  bg-[#FAFAFB]">
          <SideBar />
          <div className="flex flex-col  w-full gap-2 md:gap-4">
            <Header pic={profileImg} name={userName} />
            <DropFileInput />
          </div>
        </div>
      </>
    );
  }
};

export default Home;
