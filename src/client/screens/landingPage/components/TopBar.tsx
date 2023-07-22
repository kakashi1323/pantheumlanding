import Button from "@/client/components/Button"
import { CONTENT_FULL_SIZE, CaretLeft, HexcellentLogoMobile, HexcellentLogoSVG, MenuIcon } from "@/client/constants"
import { goToSection } from "@/client/constants/helpers"
import { memo } from "react"

const TopBar = (props: any) => {

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
        <div className="flex sm:hidden cursor-pointer" id="dropdownMenuButton" data-dropdown-toggle="dropdown-menu">
          {MenuIcon}
        </div>
        <div id="dropdown-menu" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Services</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Why Choose Us</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Case Study</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Team</a>
            </li>
          </ul>
        </div>
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
  </div >
}

export default memo(TopBar)