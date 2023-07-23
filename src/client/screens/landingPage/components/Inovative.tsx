import { CONTENT_FULL_SIZE, BigCaretRight, MobileCaretRight, RightCaretMini, RightCaretMiniWhite } from "@/client/constants"
import { memo } from "react"

const Inovative = (props: any) => {

  return <div className="flex relative w-full h-full justify-center items-center" style={{ minHeight: 880 }}>
    <div className="flex w-full flex-row p-6 justify-between" style={{ maxWidth: CONTENT_FULL_SIZE }}>
      <div className="flex flex-col">
        <div id={"innovative"}></div>
        <div className="flex text-title-mobile sm:text-title flex-row items-end" style={{ maxWidth: 480 }}>
          Innovative Blockchain
        </div>
        <div className="flex w-full text-title-mobile sm:text-title flex-row items-center" style={{ maxWidth: 600 }}>
          Solutions <span className="sm:hidden mx-4">{MobileCaretRight}</span>
          <span className="hidden sm:block mx-4">{RightCaretMiniWhite}</span> You
        </div>
        <div className="flex w-full mt-4 text-base text-description" style={{ maxWidth: 440 }}>
          We strive to deliver innovative solutions that enable
          our clients to harness the power of blockchain technology and unlock its potential for their business.
        </div>
        <div className="flex w-full mt-6">
          <ul className="flex flex-row mr-4 items-center">
            <li className="text-description hover:text-active-01 hover:underline transition-all">Facebook</li>
            <div className="border-t border-hyphen w-3 h-0 mx-3"></div>
            <li className="text-description hover:text-active-01 hover:underline transition-all">Twitter</li>
            <div className="border-t border-hyphen w-3 h-0 mx-3"></div>
            <li className="text-description hover:text-active-01 hover:underline transition-all">Github</li>
            <div className="border-t border-hyphen w-3 h-0 mx-3"></div>
            <li className="text-description hover:text-active-01 hover:underline transition-all">Telegram</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="sm:hidden absolute" style={{ bottom: "-360px", right: 0 }}>
      <img src={"/images/mobile_coin.png"} />
    </div>
  </div>
}

export default memo(Inovative)