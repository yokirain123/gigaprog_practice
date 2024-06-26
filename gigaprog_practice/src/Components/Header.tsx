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
          <ul className="buttonsList flex flex-row gap-[30px] leading-6 text-[#252733]">
            <li>
              <a className="hover:text-[#152892] transition-all duration-150" href="@">
                Про нас
              </a>
            </li>
            <li>
              <a className="hover:text-[#152892] transition-all duration-150" href="@">
                Послуги
              </a>
            </li>
            <li>
              <a className="hover:text-[#152892] transition-all duration-150" href="@">
                Переваги
              </a>
            </li>
            <li>
              <a className="hover:text-[#152892] transition-all duration-150" href="@">
                Контакти
              </a>
            </li>
          </ul>
        </div>
        <div className="partTwo flex flex-row items-center gap-[40px]">
          <select className="dropdown flex flex-row items-center rounded-xl border-none text-[#252733]">
            <option value="">UA</option>
            <option value="1">ENG</option>
            <IoIosArrowDown />
          </select>
          <button className="w-[263px] h-[50px] bg-[#152892] hover:bg-[#112075] transition-all duration-300 rounded-[10px] font-semibold text-white">
            Сконтактувати
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
