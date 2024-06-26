import React from "react";

import Logo from "./Images/logo.png";
import { FaFacebookF, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="px-[80px] pt-[40px]">
      <div className="footer pb-[40px] border-b-[1px] border-b-[#152892] flex justify-between">
        <img className="w-[182px] h-[71px]" src={Logo} alt="" />
        <div className="footerMenu flex gap-[40px]">
          <div className="menu flex flex-col gap-[24px] w-[250.67px]">
            <h3 className="text-[24px] text-[#152892] font-semibold">Меню</h3>
            <ul className="flex flex-col gap-[16px] text-[#0C143F] leading-[24px]">
              <li>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="@"
                >
                  Головна
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="@"
                >
                  Про нас
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="@"
                >
                  Послуги
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="@"
                >
                  Переваги
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="@"
                >
                  Контакти
                </a>
              </li>
            </ul>
          </div>
          <div className="contacts flex flex-col gap-[24px] w-[250.67px]">
            <h3 className="text-[24px] text-[#152892] font-semibold">
              Контакти
            </h3>
            <ul className="text-[#0C143F] leading-[24px] flex flex-col gap-[16px]">
              <li>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="tel: +380960000000"
                >
                  + 38 (096) 000 00 00
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="tel: +380500000000"
                >
                  + 38 (050) 000 00 00
                </a>
              </li>
              <li>
                <p>м. Київ, вул. Транспортна, 24</p>
              </li>
              <li>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="mailto:ATS2023@gmail.com"
                >
                  ATS2023@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="links flex gap-[24px] flex-col w-[250.67px]">
            <h3 className="text-[24px] text-[#152892] font-semibold">
              Соціальні мережі
            </h3>
            <div className="linksIcons flex flex-row gap-[16px]">
              <a href="facebook.com">
                <FaFacebookF className="w-[24px] h-[24px] text-[#152892] hover:text-[#112075] transition-all duration-300" />
              </a>
              <a href="web.whatsapp.com">
                <FaWhatsapp className="w-[24px] h-[24px] text-[#152892] hover:text-[#112075] transition-all duration-300" />
              </a>
              <a href="https://web.telegram.org/k/">
                <FaTelegramPlane className="w-[24px] h-[24px] text-[#152892] hover:text-[#112075] transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="confidentiality py-[20px] flex justify-between">
        <a
          className="text-[#272727] hover:text-[#152892] transition-all duration-150"
          href="@"
        >
          Політика конфіденційності
        </a>
        <div className="gigaprog flex gap-[5px]">
          <p className="text-[#A8A8A8]">Developed by</p>
          <a
            className="font-semibold text-[#A8A8A8] text-opacity-40 hover:text-opacity-100 transition-all duration-150"
            href="https://gigaprog.com"
          >
            GigaProg
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
