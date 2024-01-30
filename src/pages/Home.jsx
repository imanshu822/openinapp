import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import Uploadbox from "../components/Uploadbox";
const Home = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [check, setCheck] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [user, setUser] = useState({});
  const [detailsExist, setDetailsExist] = useState(false);
  const [isBasicSelected, setIsBasicSelected] = useState(false);

  const profileImg = localStorage.getItem("pic");

  const userName = localStorage.getItem("userName");

  console.log(userName);

  const openProfileModal = async () => {
    setIsBasicSelected(true);
    setIsPopupOpen(true);
  };

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
        <div
          className={`relative flex flex-col w-full sm:flex-row justify-between gap-4 lg:gap-6  bg-[#FAFAFB] ${
            isPopupOpen ? "opacity-70" : ""
          }`}
        >
          <SideBar />
          <div className="flex flex-col  w-full gap-2 md:gap-4">
            <Header pic={profileImg} name={userName} />
            <Uploadbox />
          </div>
        </div>

        <ProfileDetails
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
          setUser={setUser}
          setDetailsExist={setDetailsExist}
          isBasicSelected={isBasicSelected}
          setIsBasicSelected={setIsBasicSelected}
        />
      </>
    );
  }
};

export default Home;
