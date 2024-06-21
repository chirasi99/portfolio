import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="relative flex items-center justify-center w-full lgl:w-1/2">
      <img
        className="w-[200px] h-[200px] lgl:w-[450px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
  />
      // <div className="absolute bottom-0 w-[310px] h-[280px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner
