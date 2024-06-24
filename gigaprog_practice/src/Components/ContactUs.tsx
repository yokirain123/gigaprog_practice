import React, { useState } from "react";

import truck from "./Images/truckConctact.png";

function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contactUs relative overflow-hidden flex flex-row lg:gap-[75px] 2xl:gap-0 mb-[150px]">
      <img
        className="w-[1645px] h-[741px] object-scale-down object-left lg:ml-[-220px] 2xl:ml-0"
        src={truck}
        alt=""
      />

      <form className="w-[665px] h-[530px] bg-white rounded-xl text-center flex flex-col gap-[30px] py-[40px] px-[50px] mt-[60px] mr-[250px]">
        <div className="formTitle">
          <h2 className="font-bold text-[48px] text-[#252733] leading-[48px]">
            Зв'язатися з нами
          </h2>
          <p className="text-[#252733]">
            Залишайте заявку і наш менеджер <br /> зв’яжеться з Вами на протязі
            60-ти хвилин
          </p>
        </div>

        <div className="formInput flex gap-[16px] flex-col">
          <div className="inputs flex flex-row gap-[16px]">
            <input
              className="w-[274.5px] h-[44px] rounded-[10px] border-[0.5px] border-[#A8A8A8]"
              type="text"
              placeholder="Ім'я"
              required
            />
            <input
              className="w-[274.5px] h-[44px] rounded-[10px] border-[0.5px] border-[#A8A8A8]"
              type="tel"
              placeholder="Номер телефону"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Коментар"
            className="resize-none	w-[565px] h-[180px] rounded-[10px] border-[0.5px] border-[#A8A8A8] placeholder:text-[#040D1499]"
          ></textarea>
        </div>
        <button
          onClick={handleButtonClick}
          type="button"
          className="w-full py-[14px] rounded-[10px] bg-[#152892] text-white font-semibold"
        >
          Відправити
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-[2px]">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-[560px] h-[350px] mx-auto px-[40px] py-[61.5px] relative text-center flex flex-col gap-[30px]">
            <div className="px-4 py-2 flex items-center flex-col">
              <h3 className="text-[40px] text-[#0C143F] font-bold leading-[48px]">
                Ваша заявка була успішно надіслана!
              </h3>

              <p className="text-[#0C143F] leading-[24px] px-[80px]">
                Наш менеджер зв’яжеться з Вами найближчим часом.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="text-[#152892] text-[32px] absolute right-5 top-0"
            >
              &times;
            </button>
            <div className="px-4 py-2 flex justify-center">
              <button
                onClick={closeModal}
                className="bg-[#152892] w-full text-white px-[20px] py-[14px] rounded-lg"
              >
                На головну
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="figure w-[1626px] h-[280px] bg-[#152892] rounded-b-[180px] rounded-t-[10px] absolute lg:left-[43rem] 2xl:left-[56rem] top-5 -z-10"></div>
    </div>
  );
}

export default ContactUs;
