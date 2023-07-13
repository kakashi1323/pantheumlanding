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
      <div className="flex flex-row justify-between max-w-6xl w-full">
        <div className="flex justify-center items-center py-3">{LogoSVG}</div>
        <ul className="flex flex-row h-full flex-wrap items-center justify-center text-white">
          <li className="cursor-pointer"
            onClick={() => setActiveMenu(MenuKeys.home)}
          >
            <div className="relative w-full h-full py-5 px-4 flex justify-center">
              <a className="mr-4 hover:underline md:mr-6">Home</a>
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
              <a className="mr-4 hover:underline md:mr-6">Resources</a>
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
              <a className="mr-4 hover:underline md:mr-6">Contact Us</a>
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
              <a className="mr-4 hover:underline md:mr-6">Launch App</a>
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
        <div className="flex justify-center items-center py-3"><Button>Apply to Launch</Button></div>
      </div>
    </div>
  )
}

export default memo(TopBar)
