import React from "react";

import { RxDoubleArrowRight } from "react-icons/rx";
import trucks from "./Images/trucks.png";

function AboutUs() {
  return (
    <div className="aboutUs mb-[150px]">
      <div className="aboutUs flex gap-[95px] mb-[40px]">
        <img
          className="w-[980px] h-[440px] object-fill object-right relative ml-[-220px]"
          src={trucks}
          alt=""
        />
        <div className="aboutInfo flex flex-col gap-[40px] px-[80px]">
          <h2 className="font-bold text-[40px]">Про нас</h2>
          <p className="text-[#252733] text-[20px]">
            У ATS ми об'єднуємо досвід та інновації, щоб забезпечити нашим
            клієнтам найвищий стандарт обслуговування в сфері логістики.
            <br />
            <br />
            Ми - команда професіоналів, яка вірить у важливість кожного вантажу
            та робить все можливе, щоб забезпечити його безпечний та своєчасний
            перевіз.
          </p>
          <button className="w-[260px] h-[50px] bg-[#152892] rounded-[10px] text-white font-semibold leading-[20px]">
            Читати більше
          </button>
        </div>
      </div>
      <div className="stats flex justify-center">
        <div className="bg-[#152892] w-[1280px] h-[220px] rounded-[10px] flex flex-row text-white items-center justify-evenly gap-[85px] px-[40px]">
          <div className="stat-item">
            <div className="statArrow flex flex-row items-center gap-[16px] text-5xl">
              <RxDoubleArrowRight className="text-[48px]" />
              <p className="stat-number font-bold">1000+</p>
            </div>
            <p className="stat-label flex ml-[2.8em] text-[24px] font-semibold mt-[16px]">
              Клієнтів
            </p>
          </div>
          <div className="stat-item">
            <div className="statArrow flex flex-row items-center gap-[16px] text-5xl">
              <RxDoubleArrowRight className="text-[48px]" />
              <p className="stat-number font-bold">45</p>
            </div>
            <p className="stat-label flex ml-[2.8em] text-[24px] font-semibold mt-[16px]">
              Працівників
            </p>
          </div>
          <div className="stat-item">
            <div className="statArrow flex flex-row items-center gap-[16px] text-5xl">
              <RxDoubleArrowRight className="text-[48px]" />
              <p className="stat-number font-bold">27</p>
            </div>
            <p className="stat-label flex ml-[2.8em] text-[24px] font-semibold mt-[16px]">
              Вантажівок
            </p>
          </div>
          <div className="stat-item">
            <div className="statArrow flex flex-row items-center gap-[16px] text-5xl">
              <RxDoubleArrowRight className="text-[48px]" />
              <p className="stat-number font-bold">7+</p>
            </div>
            <p className="stat-label flex ml-[2.8em] text-[24px] font-semibold mt-[16px]">
              Років <br/> на ринку
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
