import Button from "@/client/components/Button"
import { CONTENT_FULL_SIZE, CaretLeft, CloseIcon, HexcellentLogoMobile, HexcellentLogoSVG, MenuIcon } from "@/client/constants"
import { goToSection } from "@/client/constants/helpers"
import { memo, useState } from "react"

const TopBar = (props: any) => {

  const [openMenu, setOpenMenu] = useState(false);

  return <div className="flex w-full h-full flex-col justify-center items-center">
    <div id={"top-bar"}></div>
    <div className="flex w-full flex-row items-center p-6 justify-between" style={{ maxWidth: CONTENT_FULL_SIZE }}>
      <div className="hidden md:flex flex-row justify-start">
        {HexcellentLogoSVG}
      </div>
      <div className="flex md:hidden flex-row justify-start">
        {HexcellentLogoMobile}
      </div>
      <div className="flex w-fit flex-row justify-end items-center p-1 rounded-full bg-trans-004 backdrop-blur-xl">
        {openMenu ?
          <div className="flex sm:hidden cursor-pointer" id="dropdownMenuButton" data-dropdown-toggle="dropdown-menu"
            onClick={() => setOpenMenu(false)}
          >
            {CloseIcon}</div> : <div className="flex sm:hidden cursor-pointer" id="dropdownMenuButton" data-dropdown-toggle="dropdown-menu"
              onClick={() => setOpenMenu(true)}
            >
            {MenuIcon}
          </div>}
        <ul className="hidden sm:flex flex-row mr-4">
          <li className="mx-3 uppercase text-xs font-semibold text-white cursor-pointer hover:text-active-01 transition-all"
            onClick={() => goToSection("services")}
          >Our Services</li>
          <div className="border-l border-white h-3"></div>
          <li className="mx-3 uppercase text-xs font-semibold text-white cursor-pointer hover:text-active-01 transition-all"
            onClick={() => goToSection("why-choose-us")}>Why Choose Us</li>
          <div className="border-l border-white h-3"></div>
          <li className="mx-3 uppercase text-xs font-semibold text-white cursor-pointer hover:text-active-01 transition-all"
            onClick={() => goToSection("case-study")}>Case Study</li>
          <div className="border-l border-white h-3"></div>
          <li className="mx-3 uppercase text-xs font-semibold text-white cursor-pointer hover:text-active-01 transition-all"
            onClick={() => goToSection("our-team")}>Our Team</li>
        </ul>
        <div className="hidden sm:flex">{CaretLeft}</div>
        <Button className={"ml-4 text-xs sm:text-xs whitespace-nowrap"}
          onClick={() => { goToSection("contact-us") }}
        >
          CONTACT US
        </Button>
      </div>
    </div>
    {<ul className={`flex sm:hidden flex-col w-full overflow-hidden ${openMenu ? "h-auto animate-expand" : "h-0 animate-collapse"}`}>
      <li className="flex justify-center w-full p-6"
        onClick={() => goToSection("services")}
      >
        <div className="top-menu-item-text">Our Services</div>
      </li>
      <div className="w-full flex justify-center">
        <div className="flex bg-white-01 h-0.5 w-5"></div>
      </div>
      <li className="flex justify-center w-full p-6"
        onClick={() => goToSection("why-choose-us")}>
        <div className="top-menu-item-text">Why Choose Us</div>
      </li>
      <div className="w-full flex justify-center">
        <div className="flex bg-white-01 h-0.5 w-5"></div>
      </div>
      <li className="flex justify-center w-full p-6"
        onClick={() => goToSection("case-study")}
      >
        <div className="top-menu-item-text">Case Study</div>
      </li>
      <div className="w-full flex justify-center">
        <div className="flex bg-white-01 h-0.5 w-5"></div>
      </div>
      <li className="flex justify-center w-full p-6"
        onClick={() => goToSection("our-team")}
      >
        <div className="top-menu-item-text">Our Team</div>
      </li>
    </ul>}
  </div >
}

export default memo(TopBar)