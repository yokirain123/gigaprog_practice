import React from "react";

import truck from "./Images/truckConctact.png";

function ContactUs() {
  return (
    <div className="contaactUs relative">
      <img
        className="w-[1645px] h-[741px] object-scale-down object-left lg:ml-[-220px] 2xl:ml-0"
        src={truck}
        alt=""
      />

      <div className="figure w-[1626px] h-[280px] bg-[#152892] rounded-b-[180px] rounded-t-[10px] absolute left-[55rem] top-5"></div>

      <form className="w-[665px] h-[530px] bg-slate-500 rounded-xl">
        <h2>Зв'язатися з нами</h2>
        <p>
          Залишайте заявку і наш менеджер <br /> зв’яжеться з Вами на протязі
          60-ти хвилин
        </p>

        <div className="formInput flex gap-[16px] flex-col px-[50px]">
          <div className="inputs flex flex-row gap-[16px]">
            <input
              className="w-[274.5px] h-[44px]"
              type="text"
              placeholder="Ім'я"
              required
            />
            <input
              className="w-[274.5px] h-[44px]"
              type="tel"
              placeholder="Номер телефону"
              required
            />
          </div>
          <textarea
            name="message"
            className="resize-none	w-[565px] h-[180px]"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
