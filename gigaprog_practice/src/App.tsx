import React from "react";
import "./App.css";
import Logo from "./Images/logo.png";
import { Dropdown } from 'flowbite';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="font-golos">
          <img className="w-[127px]" src={Logo} alt=""></img>
          <ul className="flex flex-row justify-evenly">
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
      </header>
    </div>
  );
}

export default App;
