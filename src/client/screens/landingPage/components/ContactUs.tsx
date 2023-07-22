import { CONTENT_FULL_SIZE, ChessLine, PlusIconWhite, RightCaretMini, RightCaretMiniWhite } from "@/client/constants"
import { memo } from "react"

const ContactUs = (props: any) => {

  return (
    <div className="flex w-full flex-col items-center mt-52 relative" style={{
      minHeight: 1309,
      borderRadius: "48px",
      background: "linear-gradient(167deg, #884FFF 0%, rgba(96, 72, 255, 0.00) 45%)"
    }}>
      <div id={"contact-us"}></div>
      <div className="flex w-full flex-col p-4" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center mt-8">
            <div className="flex">{PlusIconWhite}</div>
            <div className="text-white"
              style={{
                fontFamily: "Manrope",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "20px",
                letterSpacing: "3.92px",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col mt-14" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full justify-center">
          <div className="flex w-full text-title-1" style={{ maxWidth: 684 }}>
            Get all your questions
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col mt-1" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full justify-center">
          <div className="flex w-full text-title-1" style={{ maxWidth: 684 }}>
            answered by us.
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row mt-8 justify-center" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full flex-col justify-start items-start" style={{ maxWidth: 684 }}>
          <div className="flex w-full max-w-xs rounded-full px-6 py-3 bg-input-bg backdrop-blur-xl gap-3">
            <input className="text-input border-none w-full bg-transparent" placeholder="First name and last name" />
          </div>
          <div className="flex w-full max-w-xs rounded-full px-6 py-3 bg-input-bg backdrop-blur-xl gap-3 mt-4">
            <input className="text-input border-none w-full bg-transparent" placeholder="Email" />
          </div>
          <div className="flex w-full justify-between max-w-xs rounded-full px-6 py-3 bg-input-bg backdrop-blur-xl gap-3 mt-4">
            <input className="text-input border-none w-full bg-transparent" placeholder="I need help" />
            <select className="text-input border-none bg-transparent" defaultValue={"nft_services"} style={{ color: "#BBB" }}>
              <option value="nft_services text-input">
                NFT Services
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-row justify-center mt-16" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full flex-row justify-start items-center" style={{ maxWidth: 684 }}>
          <div className="text-button px-6 py-3 rounded-full bg-white">
            CONTACT NOW
          </div>
          <div className="mx-4">
            {RightCaretMiniWhite}
          </div>
          <ul className="flex flex-row mr-4 items-center">
            <li className="text-description">Facebook</li>
            <div className="border-t border-hyphen w-3 h-0 mx-3"></div>
            <li className="text-description">Twitter</li>
            <div className="border-t border-hyphen w-3 h-0 mx-3"></div>
            <li className="text-description">Github</li>
            <div className="border-t border-hyphen w-3 h-0 mx-3"></div>
            <li className="text-description">Telegram</li>
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-row justify-center mt-16" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full flex-row justify-start items-center" style={{ maxWidth: 684 }}>
          <div className="text-description" style={{ maxWidth: 420 }}>
            Neque porro quisquam est qui dolorem ipsum quia dolor quam est qui dolorem ipsum quia dolor sitsit amet. Neque porro quisquam est qui dolorem ipsum.
          </div>
        </div>
      </div>

      <div className="flex mt-12 w-full justify-center overflow-hidden relative bg-neutral-black">
        <div>
          {ChessLine}
        </div>
        <div className="absolute flex flex-row justify-center w-full bg-neutral-black py-8" style={{ top: 270, left: 0 }}>
          <div className="flex w-full flex-col items-center px-4" style={{ maxWidth: CONTENT_FULL_SIZE }}>
            <div className="w-full text-center text-description-2" style={{ maxWidth: 520 }}>
              We strive to deliver <span style={{ color: "#884FFF" }}>innovative solutions</span> that enable our clients to <span style={{ color: "#884FFF" }}>harness</span> the power of blockchain technology & <span style={{ color: "#884FFF" }}>unlock</span> its potential for
              their business.
            </div>
            <div className="text-owner w-full text-center text-description-2 mt-8" style={{ maxWidth: 920 }}>
              © 2023 Hexcellent Co . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default memo(ContactUs)