import { LocationIcon, LogoSVG, MailBoxIcon, PhoneIcon, SocialIcon2, TelegramIcon } from "@/client/constants"
import { memo } from "react"

const Footer = (props: any) => {

  return (
    <div className="w-full flex flex-row justify-center items-center mt-10 bg-main-01" style={{
      borderTop: "1px solid #25335C",
      background: "#0A1330"
    }}>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start mt-20 pb-10 px-4" style={{ maxWidth: 1192 }}>
        <div className="flex flex-col">
          <div className="flex w-full md:w-auto justify-center md:justify-start">{LogoSVG}</div>
          <div className="mt-5 flex flex-row items-center" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22px",
          }}>
            {LocationIcon}
            <span className="ml-1 hover:text-active cursor-pointer">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</span>
          </div>
          <div className="mt-3 flex flex-row items-center" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22px",
          }}>
            {PhoneIcon}
            <span className="ml-1 hover:text-active cursor-pointer">19002345</span>
          </div>
          <div className="mt-3 flex flex-row items-center" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22px",
          }}>
            {MailBoxIcon}
            <span className="ml-1 hover:text-active cursor-pointer">lorem@pantheum.com</span>
          </div>
        </div>
        <div className="flex flex-row md:flex-col md:ml-40 mt-10 md:mt-0">
          <div className="hidden md:flex text-white" style={{
            fontFamily: "Mulish",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
          }}>Menu</div>
          <div className="mx-2 md:mx-0 md:mt-8 text-sub hover:text-active cursor-pointer" style={{
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}>Home</div>
          <div className="mx-2 md:mx-0 md:mt-4 text-sub hover:text-active cursor-pointer" style={{
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}>Resources</div>
          <div className="mx-2 md:mx-0 md:mt-4 text-sub hover:text-active cursor-pointer" style={{
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}>Contact Us</div>
          <div className="mx-2 md:mx-0 md:mt-4 text-sub hover:text-active cursor-pointer" style={{
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}>Launch App</div>
        </div>
        <div className="flex flex-col md:ml-32 mt-4 md:mt-0">
          <div className="text-white" style={{
            fontFamily: "Mulish",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
          }}>Social Media</div>
          <div className="flex flex-row items-center mt-6">
            <div className="flex w-8 h-8 rounded-full bg-fill-01 justify-center items-center transition-all hover:-translate-y-1 hover:bg-active hover:shadow-md hover:shadow-sky-300 hover:text-yellow-500">{TelegramIcon}</div>
            <div className="flex ml-6 w-8 h-8 rounded-full bg-fill-01 justify-center items-center transition-all hover:-translate-y-1 hover:bg-active hover:shadow-md hover:shadow-sky-300 hover:text-yellow-500">{SocialIcon2}</div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default memo(Footer)
