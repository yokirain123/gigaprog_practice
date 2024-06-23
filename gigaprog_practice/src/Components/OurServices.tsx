import React, { useState } from "react";

import { RxDoubleArrowRight } from "react-icons/rx";
import Truck from "./Images/truck_service.png"

const services = [
  {
    buttonLabel: "Доставка вантажів",
    title: "Забезпечення надійної та своєчасної доставки",
    content:
      "Ця послуга включає в себе вивчення оптимальних маршрутів, вибір транспортних засобів та ефективне планування для забезпечення швидкої та безпечної доставки вантажу.",
  },
  {
    buttonLabel: "Експрес-доставка",
    title: "Забезпечення швидкої експрес-доставки",
    content:
      "Експрес-доставка дозволяє швидко і безпечно доставляти вантажі у найкоротші терміни.",
  },
  {
    buttonLabel: "Логістичне планування",
    title: "Забезпечення зручного логістичного планування",
    content:
      "Логістичне планування включає в себе організацію всього процесу доставки, від складання маршрутів до координації всіх учасників ланцюга постачання.",
  },
];

const OurServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="ourServices relative">
      <h2 className="font-bold text-[40px] text-center">Наші послуги</h2>
      <div className="services flex justify-center px-[185px] py-[80px] ml-[200px]">
        <img className="absolute left-0 top-0 z-[-100] w-[536px] h-[605px] object-contain object-left opacity-30" src={Truck} alt="" />
        <img className="absolute right-0 top-0 z-[-100] scale-x-[-1] w-[536px] h-[605px] object-contain object-left opacity-30" src={Truck} alt="" />
        <div className="services-container flex gap-[80px]">
          <div className="services-menu flex flex-col gap-5">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-button active:bg-[#152892] w-[516px] h-[60px] rounded-[10px] font-semibold text-[#252733] text-[24px] flex items-center gap-5 px-[20px] py-[10px] transition-all duration-300 ${
                  selectedService.title === service.title
                    ? "bg-[#152892] text-white"
                    : "bg-white text-[#252733]"
                }`}
                onClick={() => setSelectedService(service)}
              >
                <RxDoubleArrowRight
                  className={`${
                    selectedService.title === service.title
                      ? "text-white"
                      : "text-[#152892]"
                  }`}
                />
                {service.buttonLabel}
              </button>
            ))}
          </div>
          <div className="service-content px-[40px] flex flex-col gap-[20px] transition-all duration-300">
            <h2 className="text-[24px] font-semibold pr-[275px]">
              {selectedService.title}
            </h2>
            <p className="pr-[275px]">{selectedService.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
