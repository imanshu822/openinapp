import React from "react";
import excelImg from "../assets/Microsoft_Office_Excel_(2019–present) 1.png";
import uploadImg from "../assets/Icon.svg";
const Card = () => {
  return (
    <div className="w-[596px] mx-auto mt-[140px] h-[367px] bg-white flex flex-col p-4 gap-4 justify-center items-center  rounded-md">
      <div className="w-full h-4/5 border-dotted border-#EBEBEB border-2 rounded-md ">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src={excelImg} alt="excelImg" />
          <div className="flex mt-[20px]">
            <p>Drop your excel sheet here or </p>{" "}
            <a href="#" className="ml-1 text-blue-700">
              {" "}
              browse
            </a>
          </div>
        </div>
      </div>
      <button
        // className="w-full h-1/5 bg-[#605BFF] border-2 rounded-md text-white"
        className="bg-[#605BFF]  h-1/5 rounded-xl w-full font-bold text-white "
      >
        <div className="flex justify-center gap-2">
          <img src={uploadImg} alt="upload svg" />
          <p>Sign In</p>
        </div>
      </button>
    </div>
  );
};

export default Card;
