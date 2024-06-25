import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./Reviews.css";

import avatar1 from "./Images/andrew.png";
import avatar2 from "./Images/doctorwho.png";
import {
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";

export default function Reviews() {
  return (
    <div className="review overflow-hidden relative">
      <h2 className="font-bold text-[40px] text-[#252733] text-center">
        Відгуки
      </h2>

      {/* <img className="background opacity-50 scale-[0.99] absolute top-[-70px]" src={BG} alt="" /> */}

      <div className="reviewsCardsSwiper px-[150px] pt-[40px] pb-[230px]">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper w-[1280px] h-full"
        >
          <SwiperSlide className="bg-white reviewCard max-w-[360px] min-h-[400px] max-h-[400px] rounded-[10px]">
            <div className="flex flex-col items-center px-[40px] pt-[30px] pb-[90px] gap-[30px]">
              <div className="cardInfo flex items-center flex-col">
                <img
                  className="w-[64px] h-[64px] rounded-[50%]"
                  src={avatar1}
                  alt=""
                />
                <h3 className="name font-semibold text-[#252733]">
                  Андрій Литвиненко
                </h3>
                <ul className="stars flex flex-row">
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarHalf className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                </ul>
              </div>
              <p>
                “Співпраця з ATS - це завжди чудовий досвід. Їхні співробітники
                завжди на зв'язку, готові надати необхідну інформацію. Це робить
                наші логістичні виклики легшими.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white reviewCard max-w-[360px] max-h-[400px] rounded-[10px]">
            <div className="flex flex-col items-center px-[40px] pt-[30px] pb-[90px] gap-[30px]">
              <div className="cardInfo flex items-center flex-col">
                <img
                  className="w-[64px] h-[64px] rounded-[50%] object-cover"
                  src={avatar2}
                  alt=""
                />
                <h3 className="name font-semibold text-[#252733]">
                  Павло Кравець
                </h3>
                <ul className="stars flex flex-row">
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                </ul>
              </div>
              <p>
                “Дуже задоволений роботою ATS. Їхні логістичні послуги вражають
                високою якістю та надійністю. Завдяки їх ефективним маршрутам та
                професіональному підходу, наші поставки стали ще швидшими та
                ефективнішими.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white reviewCard max-w-[360px] min-h-[400px] max-h-[400px] rounded-[10px]">
            <div className="flex flex-col items-center px-[40px] pt-[30px] pb-[90px] gap-[30px]">
              <div className="cardInfo flex items-center flex-col">
                <img
                  className="w-[64px] h-[64px] rounded-[50%]"
                  src={avatar1}
                  alt=""
                />
                <h3 className="name font-semibold text-[#252733]">
                  Андрій Литвиненко
                </h3>
                <ul className="stars flex flex-row">
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                </ul>
              </div>
              <p>
                “Співпраця з ATS - це завжди чудовий досвід. Їхні співробітники
                завжди на зв'язку, готові надати необхідну інформацію. Це робить
                наші логістичні виклики легшими.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white reviewCard max-w-[360px] min-h-[400px] max-h-[400px] rounded-[10px]">
            <div className="flex flex-col items-center px-[40px] pt-[30px] pb-[90px] gap-[30px]">
              <div className="cardInfo flex items-center flex-col">
                <img
                  className="w-[64px] h-[64px] rounded-[50%]"
                  src={avatar1}
                  alt=""
                />
                <h3 className="name font-semibold text-[#252733]">
                  Андрій Литвиненко
                </h3>
                <ul className="stars flex flex-row">
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarHalf className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                </ul>
              </div>
              <p>
                “Співпраця з ATS - це завжди чудовий досвід. Їхні співробітники
                завжди на зв'язку, готові надати необхідну інформацію. Це робить
                наші логістичні виклики легшими.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white reviewCard max-w-[360px] min-h-[400px] max-h-[400px] rounded-[10px]">
            <div className="flex flex-col items-center px-[40px] pt-[30px] pb-[90px] gap-[30px]">
              <div className="cardInfo flex items-center flex-col">
                <img
                  className="w-[64px] h-[64px] rounded-[50%] object-cover"
                  src={avatar2}
                  alt=""
                />
                <h3 className="name font-semibold text-[#252733]">
                  Павло Кравець
                </h3>
                <ul className="stars flex flex-row">
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                </ul>
              </div>
              <p>
                “Співпраця з ATS - це завжди чудовий досвід. Їхні співробітники
                завжди на зв'язку, готові надати необхідну інформацію. Це робить
                наші логістичні виклики легшими.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white reviewCard max-w-[360px] min-h-[400px] max-h-[400px] rounded-[10px]">
            <div className="flex flex-col items-center px-[40px] pt-[30px] pb-[90px] gap-[30px]">
              <div className="cardInfo flex items-center flex-col">
                <img
                  className="w-[64px] h-[64px] rounded-[50%]"
                  src={avatar1}
                  alt=""
                />
                <h3 className="name font-semibold text-[#252733]">
                  Андрій Литвиненко
                </h3>
                <ul className="stars flex flex-row">
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarHalf className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                </ul>
              </div>
              <p>
                “Співпраця з ATS - це завжди чудовий досвід. Їхні співробітники
                завжди на зв'язку, готові надати необхідну інформацію. Це робить
                наші логістичні виклики легшими.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white reviewCard max-w-[360px] min-h-[400px] max-h-[400px] rounded-[10px]">
            <div className="flex flex-col items-center px-[40px] pt-[30px] pb-[90px] gap-[30px]">
              <div className="cardInfo flex items-center flex-col">
                <img
                  className="w-[64px] h-[64px] rounded-[50%]"
                  src={avatar1}
                  alt=""
                />
                <h3 className="name font-semibold text-[#252733]">
                  Андрій Литвиненко
                </h3>
                <ul className="stars flex flex-row">
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStar className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarHalf className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                  <li>
                    <IoMdStarOutline className="w-[23px] h-[23px] text-[#152892]" />
                  </li>
                </ul>
              </div>
              <p>
                “Співпраця з ATS - це завжди чудовий досвід. Їхні співробітники
                завжди на зв'язку, готові надати необхідну інформацію. Це робить
                наші логістичні виклики легшими.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
