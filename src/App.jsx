import logo from "./images/logo.svg";
import hamburger from "./images/icon-hamburger.svg";
import illustrationDevices from "./images/illustration-devices.svg";
import iconClose from "./images/icon-close.svg";
import { useState } from "react";
import useClickOutside from "./useClickOutside";

const App = () => {
  const [show, setShow] = useState(false);

  const nav = useClickOutside(() => {
    setShow(false);
  }, show);

  const navBar = () => {
    setShow(!show);
  };

  return (
    <main>
      <div className="overflow-x-hidden transition-all min-h-screen">
        <div className="md:hidden w-full left-0 flex justify-between items-center py-10 px-7">
          <div className="cursor-pointer">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="relative">
            <button onClick={navBar}>
              <img src={show ? iconClose : hamburger} alt="hamburger" />
            </button>
          </div>
        </div>

        <div
          ref={nav}
          className={`${
            show ? "flex" : "hidden"
          } rounded absolute md:hidden w-[85%] h-max z-50 bg-white shadow-shadow justify-center flex-col items-center left-1/2 -translate-x-1/2`}
        >
          <a
            className="uppercase font-bold transition-all hover:text-Grayrish-Blue font-Barlow-Condensed text-Very-Dark-Blue text-lg mt-5"
            href="#"
          >
            Product
          </a>
          <a
            className="uppercase font-bold transition-all hover:text-Grayrish-Blue font-Barlow-Condensed text-Very-Dark-Blue text-lg mt-5"
            href="#"
          >
            Features
          </a>
          <a
            className="uppercase font-bold transition-all hover:text-Grayrish-Blue font-Barlow-Condensed text-Very-Dark-Blue text-lg mt-5"
            href="#"
          >
            Pricing
          </a>
          <a
            className="uppercase font-Barlow-Condensed font-bold tracking-[2px] text-lg text-Grayrish-Blue transition-all hover:text-Dark-Grayrish-Blue w-[85%] text-center mt-5 py-5 border-t-2"
            href="#"
          >
            login
          </a>
        </div>

        <div className="hidden md:flex justify-between items-center md:px-14 py-14 px-28">
          <div className="cursor-pointer">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="flex items-center">
            <a
              className="uppercase transition-all hover:underline hover:underline-offset-1 hover:decoration-2 font-Barlow-Condensed text-lg font-bold text-Very-Dark-Blue"
              href="#"
            >
              Product
            </a>
            <a
              className="uppercase transition-all hover:underline hover:underline-offset-1 hover:decoration-2 font-Barlow-Condensed ml-10 text-lg font-bold text-Very-Dark-Blue"
              href="#"
            >
              Features
            </a>
            <a
              className="uppercase transition-all hover:underline hover:underline-offset-1 hover:decoration-2 font-Barlow-Condensed ml-10 text-lg font-bold text-Very-Dark-Blue"
              href="#"
            >
              Pricing
            </a>
            <div className="w-[6px] h-[6px] ml-10 rounded-full bg-gray-300"></div>
            <a
              className="uppercase transition-all hover:underline hover:underline-offset-1 hover:decoration-2 font-Barlow-Condensed ml-10 text-lg font-bold text-Grayrish-Blue"
              href="#"
            >
              Login
            </a>
          </div>
        </div>

        <img
          className="translate-x-20 lg:hidden w-full mt-16 block scale-[1.3] sm:scale-[1.2] md:scale-[1.1]"
          src={illustrationDevices}
          alt="illustration-devices"
        />

        <div className="w-full lg:flex justify-center flex-row-reverse items-center lg:px-0 mt-32 mb-20 px-10">
          <img
            className="lg:block hidden w-[80%] -mr-[250px]"
            src={illustrationDevices}
            alt=""
          />

          <div className="lg:w-[50%] lg:p-16">
            <div className="flex items-center">
              <p className="w-max px-4 tracking-[2px] py-1 font-semibold font-Barlow-Condensed uppercase text-white rounded-full bg-Very-Dark-Blue">
                New
              </p>
              <p className="uppercase ml-5 tracking-[5px] text-xl text-Grayrish-Blue font-Barlow-Condensed">
                Monograph Dashboard
              </p>
            </div>

            <p className="text-5xl lg:text-6xl font-bold mt-5 text-Very-Dark-Blue uppercase font-Barlow-Condensed">
              Powerful insights into your team
            </p>

            <p className="font-barlow font-medium text-xl mt-5 text-Dark-Grayrish-Blue">
              Project planning and time tracking for agile teams
            </p>

            <div className="flex w-full items-center lg:mt-16 mt-7">
              <a
                href="#"
                className="transition-all w-max py-3 px-6 hover:shadow-shadow2 bg-red tracking-[2px] font-Barlow-Condensed font-semibold rounded-md uppercase text-white"
              >
                Schedule a demo
              </a>
              <p className="w-max uppercase ml-5 tracking-[3px] text-Grayrish-Blue font-Barlow-Condensed">
                to see a live preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
