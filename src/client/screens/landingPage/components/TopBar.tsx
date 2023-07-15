import Button from "@/client/components/Button"
import { LogoSVG, MenuIcon } from "@/client/constants"
import { memo, useState } from "react"

export const MenuKeys = {
  home: "home",
  resources: "resources",
  contact: "contact",
  launch: "launch",
}

const TopBar = (props: any) => {

  const [activeMenu, setActiveMenu] = useState(MenuKeys.home)
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(prev => !prev)
  }

  return (
    <div className="w-full bg-main-01 flex flex-row justify-center items-center animate-down">
      <div className="flex flex-row flex-wrap justify-between max-w-6xl w-full relative">
        <div className="flex w-full lg:w-auto justify-center items-center py-3">{LogoSVG}</div>
        <div className="absolute flex md:hidden right-2 top-2" data-dropdown-toggle="menu" data-dropdown-trigger="click"
          onClick={handleOpenMenu}
        >
          <Button
            style={{
              padding: 5,
              margin: 0,
              borderRadius: "5px",
              border: "none"
            }}
          >{MenuIcon}</Button>
        </div>
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
          <li className="cursor-pointer flex lg:hidden">
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <Button className="hover:text-yellow-400 hover:transition-all hover:-translate-x-1 hover:shadow-sm hover:shadow-sky-300">
                Apply to Launch
              </Button>
            </div>
          </li>
        </ul>

        <div className="hidden lg:flex justify-center items-center py-3">
          <Button className="hover:text-yellow-400 hover:transition-all hover:-translate-x-1 hover:shadow-sm hover:shadow-sky-300">
            Apply to Launch
          </Button>
        </div>
      </div>

      {openMenu && <div onClick={handleOpenMenu} id="menu" data-dropdown-toggle="menu"
        className="flex overflow-x-auto fixed top-0 left-0 w-screen h-screen flex-row-reverse z-50 bg-blurry mr-1"
      >
        <ul onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }} className="animate-menu min-w-max flex flex-col w-fit overflow-auto items-start justify-start text-white bg-main-01 shadow-lg shadow-blue-300"
          style={{ minWidth: "55%" }}
        >
          <li className={`cursor-pointer whitespace-nowrap w-full ${activeMenu === MenuKeys.home ? "bg-sky-700 font-bold " : ""}`}
            onClick={() => setActiveMenu(MenuKeys.home)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className={`mr-4 hover:underline md:mr-6 ${activeMenu === MenuKeys.home ? "text-active" : "text-white"}`}>Home</a>
            </div>
          </li>
          <li className={`cursor-pointer whitespace-nowrap w-full ${activeMenu === MenuKeys.resources ? "bg-sky-700 font-bold " : ""}`}
            onClick={() => setActiveMenu(MenuKeys.resources)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className={`mr-4 hover:underline md:mr-6 ${activeMenu === MenuKeys.resources ? "text-active" : "text-white"}`}>Resources</a>
            </div>
          </li>
          <li className={`cursor-pointer whitespace-nowrap w-full ${activeMenu === MenuKeys.contact ? "bg-sky-700 font-bold " : ""}`}
            onClick={() => setActiveMenu(MenuKeys.contact)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className={`mr-4 hover:underline md:mr-6 ${activeMenu === MenuKeys.contact ? "text-active" : "text-white"}`}>Contact Us</a>
            </div>
          </li>
          <li className={`cursor-pointer whitespace-nowrap w-full ${activeMenu === MenuKeys.launch ? "bg-sky-700 font-bold " : ""}`}
            onClick={() => setActiveMenu(MenuKeys.launch)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className={`mr-4 hover:underline md:mr-6 ${activeMenu === MenuKeys.launch ? "text-active" : "text-white"}`}>Launch App</a>
            </div>
          </li>
          <div className="w-full border-t border-slate-400" ></div>
          <li className="w-full cursor-pointer whitespace-nowrap">
            <div className="w-full h-full py-5 px-4 flex justify-center">
              <Button className="hover:text-yellow-400 hover:transition-all hover:-translate-x-1 hover:shadow-sm hover:shadow-sky-300">
                Apply to Launch
              </Button>
            </div>
          </li>
        </ul>
      </div>}
    </div >
  )
}

export default memo(TopBar)
