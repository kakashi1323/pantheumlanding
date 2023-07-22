import Button from "@/client/components/Button"
import { CONTENT_FULL_SIZE, CaretLeft, HexcellentLogoSVG } from "@/client/constants"
import { goToSection } from "@/client/constants/helpers"
import { memo } from "react"

const TopBar = (props: any) => {

  return <div className="flex w-full h-full flex-col justify-center items-center">
    <div id={"top-bar"}></div>
    <div className="flex w-full flex-row p-6 justify-between" style={{ maxWidth: CONTENT_FULL_SIZE }}>
      <div className="flex flex-row justify-start">
        {HexcellentLogoSVG}
      </div>
      <div className="flex w-fit flex-row justify-end items-center p-1 rounded-full bg-trans-004 backdrop-blur-xl">
        <ul className="flex flex-row mr-4">
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
        {CaretLeft}
        <Button className={"ml-4"}
          onClick={() => { goToSection("contact-us") }}
        >
          CONTACT US
        </Button>
      </div>
    </div>
  </div>
}

export default memo(TopBar)