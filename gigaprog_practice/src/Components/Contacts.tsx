"use client";

import React, { useState } from "react";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

import "./Contacts.css";

import { HiMapPin } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import markerImage from "./Images/marker.png";

function Contacts() {
  const position = { lat: 50.74300705750927, lng: 25.37869373839743 };

  return (
    <div className="mt-[300px] mb-[150px]">
      <h2 className="font-bold text-[40px] text-[#252733] text-center mb-[40px]">
        Контакти
      </h2>

      <div className="contact flex justify-center relative">
        <div className="w-[436px] h-[554px] absolute bg-white z-40 left-[290px] px-[30px] py-[50px] flex flex-col gap-[40px]">
          <div className="adresses flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[8px]">
              <div className="adresa flex flex-row items-center gap-[16px]">
                <HiMapPin className="w-[17px] h-[20px] text-[#152892]" />
                <h3 className="font-semibold text-[24px] leading-[31.2px]">
                  Адреса
                </h3>
              </div>
              <p className="leading-[24px]">м. Луцьк, вул. Рівненська, 27</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="phone flex flex-row items-center gap-[16px]">
                <FaPhone className="w-[17px] h-[20px] text-[#152892]" />
                <h3 className="font-semibold text-[24px] leading-[31.2px]">
                  Телефон
                </h3>
              </div>
              <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="tel: +380960000000"
                >
                  + 38 (096) 000 00 00
                </a>
                <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="tel: +380500000000"
                >
                  + 38 (050) 000 00 00
                </a>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="poshta flex flex-row items-center gap-[16px]">
                <IoMail className="w-[17px] h-[20px] text-[#152892]" />
                <h3 className="font-semibold text-[24px] leading-[31.2px]">
                  Пошта
                </h3>
              </div>
              <a
                  className="hover:text-[#152892] transition-all duration-150"
                  href="mailto:ATS2023@gmail.com"
                >
                  ATS2023@gmail.com
                </a>
            </div>

            <div className="links flex flex-row gap-[25px]">
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
          <div className="flex justify-center">
            <button className="w-[339px] h-[50px] rounded-[10px] bg-[#152892] text-white font-semibold">
              Замовити перевезення
            </button>
          </div>
        </div>
        <p className="absolute font-semibold text-[24px] text-[#0C143F] z-30 top-[26rem] left-[63rem]">
          м. Луцьк, вул. Рівненська, 27
        </p>
        <APIProvider apiKey="AIzaSyAngFvFqVZ_H7GpIUVgigoNiSpMcu9ues0">
          <div className="h-[554px] w-[1280px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Map
              zoom={16}
              center={{ lat: 50.745, lng: 25.374 }}
              mapId={"9feda69b1b808cf6"}
            >
              <AdvancedMarker position={position}>
                <img
                  src={markerImage}
                  className="w-[28.74px] h-[33.33px]"
                  alt=""
                />
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>
      </div>
    </div>
  );
}

export default Contacts;
