import { LocationIcon, LogoSVG, MailBoxIcon, PhoneIcon, SocialIcon2, TelegramIcon } from "@/client/constants"
import { memo } from "react"

const Footer = (props: any) => {

  return (
    <div className="w-full flex flex-row justify-center items-center mt-20 bg-main-01">
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start mt-20 pb-10" style={{ maxWidth: 1160 }}>
        <div className="flex flex-col">
          <div>{LogoSVG}</div>
          <div className="mt-5 flex flex-row items-center" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22px",
          }}>
            {LocationIcon}
            <span className="ml-1">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.</span>
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
            <span className="ml-1">19002345</span>
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
            <span className="ml-1">lorem@pantheum.com</span>
          </div>
        </div>
        <div className="flex flex-col lg:ml-40 mt-4 lg:mt-0">
          <div className="text-white" style={{
            fontFamily: "Mulish",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
          }}>Menu</div>
          <div className="mt-8" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}>Home</div>
          <div className="mt-4" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}>Resources</div>
          <div className="mt-4" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}>Contact Us</div>
          <div className="mt-4" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "22px",
          }}>Launch App</div>
        </div>
        <div className="flex flex-col lg:ml-32 mt-4 lg:mt-0">
          <div className="text-white" style={{
            fontFamily: "Mulish",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
          }}>Social Media</div>
          <div className="flex flex-row items-center mt-6">
            <div className="flex w-8 h-8 rounded-full bg-fill-01 justify-center items-center">{TelegramIcon}</div>
            <div className="flex ml-6 w-8 h-8 rounded-full bg-fill-01 justify-center items-center">{SocialIcon2}</div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default memo(Footer)
