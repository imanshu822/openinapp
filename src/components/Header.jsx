import React from "react";
import bellimg from "../assets/Vector.svg";
import userimg from "../assets/image 1.png";

const Header = (props) => {
  return (
    <div className="flex justify-between items-center  mt-5 mr-5">
      <h1 className="text-black font-bold text-[21px] sm:text-[24px]">
        Upload CSV
      </h1>
      <div className="flex justify-between items-center gap-3">
        <img src={bellimg} alt="bell" className="w-[18px] h-[20px] mr-[15px]" />
        <p className="text-lg font-bold">{props.name}</p>
        <img src={props.pic} alt="user" className="w-12 h-12 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
