import React from "react";
import "../App.css";

import Logo from "./Images/logo.png";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <header className="App-header py-[15px] px-[80px]">
      <div className="font-golos flex items-center justify-between">
        <div className="partOne flex flex-row items-center gap-[60px]">
          <img className="w-[127px]" src={Logo} alt=""></img>
          <ul className="buttonsList flex flex-row gap-[30px] leading-6">
            <li>
              <a className="" href="@">
                Про нас
              </a>
            </li>
            <li>
              <a className="" href="@">
                Послуги
              </a>
            </li>
            <li>
              <a className="" href="@">
                Переваги
              </a>
            </li>
            <li>
              <a className="" href="@">
                Контакти
              </a>
            </li>
          </ul>
        </div>
        <div className="partTwo flex flex-row items-center gap-[40px]">
          <div className="dropdown flex flex-row items-center">
            <p>UA</p>
            <IoIosArrowDown />
          </div>
          <button className="w-[263px] h-[50px] bg-[#152892] rounded-[10px] font-semibold text-white">
            Сконтактувати
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
