import React from "react";
import "../App.css";

import arrowDown from "./Images/arrow_down.png";

function Hero() {
  return (
    <div className="Hero px-[320px] pb-[60px] pt-[100px] bg-slate-400 mb-[150px]">
      <div className="text-[#252733] text-center flex items-center flex-col">
        <h1 className="text-[48px] font-bold leading-[64px] mb-[16px]">
          Логістика, що рухає Україну <br /> вперед.
        </h1>

        <p className="text-[20px] leading-[30px] mb-[65px]">
          Відправте ваші вантажі із впевненістю – ми забезпечимо точне та <br/>
          ефективне перевезення в межах всієї України.
        </p>

        <button className="w-[433px] h-[50px] bg-[#152892] rounded-[10px] font-semibold text-white mb-[180px]">
          Замовити перевезення
        </button>
        <img src={arrowDown} alt=""></img>
      </div>
    </div>
  );
}

export default Hero;