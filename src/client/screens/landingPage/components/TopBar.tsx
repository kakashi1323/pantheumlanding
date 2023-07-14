import Button from "@/client/components/Button"
import { LogoSVG } from "@/client/constants"
import { memo, useState } from "react"

export const MenuKeys = {
  home: "home",
  resources: "resources",
  contact: "contact",
  launch: "launch",
}

const TopBar = (props: any) => {

  const [activeMenu, setActiveMenu] = useState(MenuKeys.home)

  return (
    <div className="w-full bg-main-01 flex flex-row justify-center items-center">
      <div className="flex flex-row flex-wrap justify-between max-w-6xl w-full relative">
        <div className="flex lg:hidden justify-center items-center py-3 absolute top-14 md:top-3 right-2">
          <Button className={"hover:text-yellow-400 hover:transition-all hover:-translate-x-1 hover:shadow-sm hover:shadow-sky-300"}>Apply to Launch</Button></div>

        <div className="flex w-full lg:w-auto justify-center items-center py-3">{LogoSVG}</div>

        <ul className="hidden md:flex w-full lg:w-auto flex-row h-full flex-wrap items-center justify-center text-white">
          <li className="cursor-pointer"
            onClick={() => setActiveMenu(MenuKeys.home)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className={`mr-4 hover:underline md:mr-6 ${activeMenu === MenuKeys.home ? "text-active" : "text-white"}`}>Home</a>
              {activeMenu === MenuKeys.home && <div
                className="absolute animate-indicator-change"
                style={{
                  borderBottom: "2px solid #618DFF",
                  width: "100%",
                  bottom: 0
                }}
              ></div>}
            </div>
          </li>
          <li className="cursor-pointer"
            onClick={() => setActiveMenu(MenuKeys.resources)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className={`mr-4 hover:underline md:mr-6 ${activeMenu === MenuKeys.resources ? "text-active" : "text-white"}`}>Resources</a>
              {activeMenu === MenuKeys.resources && <div
                className="absolute animate-indicator-change"
                style={{
                  borderBottom: "2px solid #618DFF",
                  width: "100%",
                  bottom: 0
                }}
              ></div>}
            </div>
          </li>
          <li className="cursor-pointer"
            onClick={() => setActiveMenu(MenuKeys.contact)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className={`mr-4 hover:underline md:mr-6 ${activeMenu === MenuKeys.contact ? "text-active" : "text-white"}`}>Contact Us</a>
              {activeMenu === MenuKeys.contact && <div
                className="absolute animate-indicator-change"
                style={{
                  borderBottom: "2px solid #618DFF",
                  width: "100%",
                  bottom: 0
                }}
              ></div>}
            </div>
          </li>
          <li className="cursor-pointer"
            onClick={() => setActiveMenu(MenuKeys.launch)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className={`mr-4 hover:underline md:mr-6 ${activeMenu === MenuKeys.launch ? "text-active" : "text-white"}`}>Launch App</a>
              {activeMenu === MenuKeys.launch && <div
                className="absolute animate-indicator-change"
                style={{
                  borderBottom: "2px solid #618DFF",
                  width: "100%",
                  bottom: 0
                }}
              ></div>}
            </div>
          </li>
        </ul>

        <div className="hidden lg:flex justify-center items-center py-3"><Button>Apply to Launch</Button></div>
      </div>
    </div>
  )
}

export default memo(TopBar)
