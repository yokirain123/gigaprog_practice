import React from 'react'
import "../App.css";

import arrowDown from "./Images/arrow_down.png";

function Hero() {
  return (
    <div className="Hero bg-hero">
        <div className="text-[#252733]">
          <h1 className="text-[48px] font-bold leading-[64px]">
            Логістика, що рухає Україну вперед.
          </h1>
          <p className="text-[20px] leading-[30px]">
            Відправте ваші вантажі із впевненістю – ми забезпечимо точне та
            ефективне перевезення в межах всієї України.
          </p>
          <button className="w-[433px] h-[50px] bg-[#152892] rounded-[10px] font-semibold text-white">Замовити перевезення</button>
          <img src={arrowDown} alt=""></img>
        </div>
      </div>
  )
}

export default Hero