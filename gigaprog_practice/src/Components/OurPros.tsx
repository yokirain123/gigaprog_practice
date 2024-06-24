import React, { useState } from "react";

import trucks from "./Images/trucksMany.png"

function OurPros() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
  };

  const getLineColor = () => {
    switch (selectedCard) {
      case "reliability":
        return "#152892"; // Color for Надійність
      case "efficiency":
        return "#152892"; // Color for Ефективність
      case "flexibility":
        return "#152892"; // Color for Гнучкість
      default:
        return "transparent";
    }
  };

  return (
    <div className="ourPros mb-[150px]">
      <h2 className="font-bold text-[40px] text-center text-[#252733]">
        Наші переваги
      </h2>

      <div className="cards flex flex-col items-center gap-[38px] mb-[40px]">
        <ul className="flex flex-row justify-center gap-[40px]">
          <li
            className="relative"
            onClick={() => handleCardClick("reliability")}
          >
            <div
              className={`card w-[400px] h-[200px] rounded-[10px] py-[40px] px-[20px] text-center flex flex-col gap-[16px] cursor-pointer transition-all duration-[400ms] ${
                selectedCard === "reliability"
                  ? "bg-[#152892] text-white"
                  : "bg-white text-[#252733]"
              }`}
            >
              <h3 className="font-semibold text-[24px]">Надійність</h3>
              <p className="leading-[24px]">
                Розраховуйте на нашу команду досвідчених фахівців, яка дбає про
                ваш вантаж як про власний
              </p>
            </div>
            {selectedCard === "reliability" && (
              <div className="line h-[3px] w-full bg-[#152892] transition-colors duration-[300ms] absolute bottom-[-40px] rounded-[33px]"></div>
            )}
          </li>
          <li
            className="relative"
            onClick={() => handleCardClick("efficiency")}
          >
            <div
              className={`card w-[400px] h-[200px] rounded-[10px] py-[40px] px-[20px] text-center flex flex-col gap-[16px] cursor-pointer transition-all duration-[400ms] ${
                selectedCard === "efficiency"
                  ? "bg-[#152892] text-white"
                  : "bg-white text-[#252733]"
              }`}
            >
              <h3 className="font-semibold text-[24px]">Ефективність</h3>
              <p className="leading-[24px]">
                Використовуйте нашу високотехнологічну інфраструктуру для
                швидких та ефективних перевезень
              </p>
            </div>
            {selectedCard === "efficiency" && (
              <div className="line h-[3px] w-full bg-[#152892] transition-colors duration-[300ms] absolute bottom-[-40px] rounded-[33px]"></div>
            )}
          </li>
          <li
            className="relative"
            onClick={() => handleCardClick("flexibility")}
          >
            <div
              className={`card w-[400px] h-[200px] rounded-[10px] py-[40px] px-[20px] text-center flex flex-col gap-[16px] cursor-pointer transition-all duration-[400ms] ${
                selectedCard === "flexibility"
                  ? "bg-[#152892] text-white"
                  : "bg-white text-[#252733]"
              }`}
            >
              <h3 className="font-semibold text-[24px]">Гнучкість</h3>
              <p className="leading-[24px]">
                Ми пропонуємо гнучкі рішення, вміло взаємодіємо з різними
                вимогами та розробляємо індивідуальні стратегії
              </p>
            </div>
            {selectedCard === "flexibility" && (
              <div className="line h-[3px] w-full bg-[#152892] transition-colors duration-[300ms] absolute bottom-[-40px] rounded-[33px]"></div>
            )}
          </li>
        </ul>
        <div className="lineFull w-[1280px] h-[1px] bg-[#A8A8A8]"></div>
      </div>
      <img src={trucks} alt="" />
    </div>
  );
}

export default OurPros;
