import React, { useState } from "react";

const ProfileDetails = ({
  isPopupOpen,
  setIsPopupOpen,
  setUser,
  setDetailsExist,
  isBasicSelected,
  setIsBasicSelected,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");

  const handleNext = () => {
    if (name === "" || email === "" || phone === "") {
      alert("Please fill all the fields");
    } else {
      setIsBasicSelected(!isBasicSelected);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInsta = (e) => {
    setInsta(e.target.value);
  };
  const handleYoutube = (e) => {
    setYoutube(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleBack = () => {
    setIsBasicSelected(true);
  };
  const handleDone = async () => {
    const user = {
      name: name,
      email: email,
      phone: phone,
      insta: insta,
      youtube: youtube,
    };

    setUser(user);
    setDetailsExist(true);
    setIsPopupOpen(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div
      className={`${
        isPopupOpen ? "fixed top-0 left-0 w-full h-full align-middle" : "hidden"
      }`}
    >
      <div className="align-middle justify-center flex h-screen">
        <div className="w-full md:w-1/2 bg-white h-fit rounded-2xl flex flex-col mt-12 md:mt-0 mx-4 md:px-0">
          <div className="flex flex-row w-full justify-between align-middle p-4">
            <p className="p-1 text-black font-semibold text-xl">
              Add New Profile
            </p>
            <p
              className="text-[#999CA0] w-4 h-4 hover:cursor-pointer"
              onClick={closePopup}
            >
              {" "}
              &#10005;
            </p>
          </div>
          <div className="h-[1px] bg-[#D9D9D9]"></div>
          <div className="flex flex-row justify-between px-8 py-4">
            <div className="flex flex-col w-2/5 gap-2">
              <p className="font-semibold text-base underline-offset-8 text-center">
                Basic
              </p>
              <div
                className={`h-1 ${
                  isBasicSelected ? "bg-[#3F84F8]" : "bg-[#D9D9D9]"
                } rounded-[30px] w-full px-8`}
              ></div>
            </div>
            <div className="flex flex-col w-2/5 gap-2">
              <p className="font-semibold text-base text-center">Contact</p>
              <div
                className={`h-1 ${
                  isBasicSelected ? "bg-[#D9D9D9]" : "bg-[#3F84F8]"
                } rounded-[30px] w-full px-8`}
              ></div>
            </div>
          </div>
          <div className={`${isBasicSelected ? "visible" : "hidden"}`}>
            <div className="px-8 py-4">
              <label
                className="text-black font-normal leading-6"
                htmlFor="nameInput"
              >
                Enter Name*
              </label>
              <input
                type="text"
                id="nameInput"
                onChange={handleName}
                className="h-16 w-full text-base mt-2 bg-white rounded-lg px-4 py-2 border-[#F2F2F2] border-solid border-[1px]"
                placeholder="Eg. John Doe"
              />
            </div>
            <div className="px-8">
              <label
                className="text-black font-normal leading-6"
                htmlFor="emailInput"
              >
                Enter Email*
              </label>
              <input
                type="email"
                id="emailInput"
                onChange={handleEmail}
                className="h-16 w-full text-base mt-2 bg-white rounded-lg px-4 py-2 border-[#F2F2F2] border-solid border-[1px]"
                placeholder="Eg. John@xyz.com"
              />
            </div>
            <div className="px-8 py-4">
              <label
                className="text-black font-normal leading-6"
                htmlFor="phoneInput"
              >
                Enter Phone*
              </label>
              <input
                type="phone"
                id="phoneInput"
                onChange={handlePhone}
                className="h-16 w-full text-base mt-2 bg-white rounded-lg px-4 py-2 border-[#F2F2F2] border-solid border-[1px]"
                placeholder="Eg.  9123456789"
              />
            </div>
          </div>
          <div className={`${isBasicSelected ? "hidden" : "visible"}`}>
            <div className="px-8 py-4">
              <label
                className="text-black font-normal leading-6"
                htmlFor="instaInput"
              >
                Instagram Link{" "}
                <span className="text-[#999CA0] font-normal leading-6">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                id="instaInput"
                onChange={handleInsta}
                className="h-16 w-full text-base mt-2 bg-white rounded-lg px-4 py-2 border-[#F2F2F2] border-solid border-[1px]"
                placeholder="Eg. ..instagram.com/username"
              />
            </div>
            <div className="px-8">
              <label
                className="text-black font-normal leading-6"
                htmlFor="youtubeInput"
              >
                Youtube Link{""}
                <span className="text-[#999CA0] font-normal leading-6">
                  (Optional)
                </span>
              </label>
              <input
                type="text"
                id="youtubeInput"
                onChange={handleYoutube}
                className="h-16 w-full text-base mt-2 bg-white rounded-lg px-4 py-2 border-[#F2F2F2] border-solid border-[1px]"
                placeholder="Eg. ..youtube/username"
              />
            </div>
          </div>
          <div className="justify-end w-full flex px-8 flex-row gap-2 mt-4 mb-8">
            <button
              onClick={handleBack}
              className={`${
                isBasicSelected
                  ? "hidden"
                  : "bg-white border-solid w-fit border-[1px] border-[#999CA0] px-5 py-2.5 rounded-lg text-black font-semibold text-sm"
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className={`${
                isBasicSelected
                  ? "bg-[#3E84F8] rounded-lg text-white font-semibold text-sm px-5 py-2.5"
                  : "hidden"
              }`}
            >
              Next
            </button>
            <button
              onClick={handleDone}
              className={`${
                isBasicSelected
                  ? "hidden"
                  : "bg-[#3E84F8] rounded-lg text-white font-semibold text-sm px-5 py-2.5"
              }`}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
