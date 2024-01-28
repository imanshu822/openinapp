import React from "react";
import likes from "../assets/likes.svg";
import transactions from "../assets/transactions.svg";
import people from "../assets/people.svg";
import camera from "../assets/camera.svg";

const Card = () => {
  return (
    <div className="flex flex-wrap w-full lg:justify-between items-center gap-6 justify-center lg:gap-0">
      <div className="flex flex-col text-black py-5 bg-white shadow-xl border-2 border-slate-200 sm:w-[170px] md:w-[221.053px] md:h-[140px] rounded-3xl px-6">
        <div className="flex">
          <div className="bg-[#7FCD93] rounded-[50%] px-2 py-2">
            <img src={camera} className="w-[26.4px] h-[24px]" alt="camera" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-lato text-[12px] sm:text-[14px]">Total Revenues</p>
          <h1 className="font-bold text-[16px] md:text-[24px]">$2,129,430</h1>
        </div>
      </div>

      <div className="flex flex-col text-black py-5 bg-white shadow-xl border-2 border-slate-200  sm:w-[170px] md:w-[221.053px] md:h-[140px] rounded-3xl px-6">
        <div className="flex">
          <div className="bg-[#DEBF85] rounded-[50%] px-2 py-2">
            <img
              src={transactions}
              className="w-[26.4px] h-[24px]"
              alt="camera"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-lato text-[11px] sm:text-[14px]">
            Total Transactions
          </p>
          <h1 className="font-bold text-[16px] md:text-[24px]">1520</h1>
        </div>
      </div>

      <div className="flex flex-col text-black py-5 bg-white shadow-xl border-2 border-slate-200  sm:w-[170px] md:w-[221.053px] md:h-[140px] rounded-3xl px-6">
        <div className="flex">
          <div className="bg-[#ECA4A4] rounded-[50%] px-2 py-2">
            <img src={likes} className="w-[26.4px] h-[24px]" alt="camera" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-lato text-[14px]">Total Likes</p>
          <h1 className="font-bold text-[18px] md:text-[24px]">9721</h1>
        </div>
      </div>

      <div className="flex flex-col text-black py-5 bg-white shadow-xl border-2 border-slate-200  sm:w-[170px] md:w-[221.053px] md:h-[140px] rounded-3xl px-6">
        <div className="flex">
          <div className="bg-[#A9B0E5] rounded-[50%] px-2 py-2">
            <img src={people} className="w-[26.4px] h-[24px]" alt="camera" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-lato text-[14px]">Total Users</p>
          <h1 className="font-bold text-[18px] md:text-[24px]">9,721</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
