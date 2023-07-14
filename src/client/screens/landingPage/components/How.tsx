import { GraphicPath1, GraphicPath2, LaunchCardIcon, LightIcon, MarketingCardIcon, ShieldIcon } from "@/client/constants"
import { memo, useMemo } from "react"

const How = (props: any) => {

  const graphicCards = useMemo(() => {
    return [
      {
        icon: LightIcon,
        title: "Concept to Launch",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Uter et massa mi Aliquams",
        iconBg: "linear-gradient(180deg, #72B3FF 0%, #0075FF 97.52%)",
        transform: `translateY(25%)`,
      },
      {
        icon: MarketingCardIcon,
        title: "Marketing & Community",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Uter et massa mi Aliquams",
        iconBg: "linear-gradient(180deg, #FFCF72 0%, #FDAE39 97.52%)",
      },
      {
        icon: ShieldIcon,
        title: "Protecting the interests",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Uter et massa mi Aliquams",
        iconBg: "linear-gradient(180deg, #48E9C2 0%, #00BC8F 97.52%)",
        transform: `translateY(-25%)`
      },
      {
        icon: LaunchCardIcon,
        title: "Launching",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Uter et massa mi Aliquams",
        iconBg: "linear-gradient(180deg, #BB65FF 0%, #A227ED 97.52%)",
        transform: `translateY(-50%)`
      }
    ]
  }, [])

  return (
    <div className="w-full bg-transparent flex flex-row justify-center items-center mt-20 py-8">
      <div className="w-full bg-transparent flex flex-col justify-center lg:justify-start items-center lg:items-start mt-20" style={{ maxWidth: 1160 }}>
        <div className="flex max-w-xl" style={{
          color: "#FFF",
          fontFamily: "Mulish",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "150%",
        }}>How does Pantheum work?</div>
        <div className="flex max-w-md" style={{
          color: "#8593C5",
          fontFamily: "Mulish",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "150%",
        }}>Comprehensive Incubation and diverse ecosystem for any Web3 project to thrive.</div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start w-full mt-8 relative">
          <div className="absolute hidden xl:flex" style={{
            top: "-9px",
            left: "165px"
          }}>
            {GraphicPath1}
          </div>
          <div className="absolute hidden xl:flex" style={{
            top: "229px",
            left: "560px"
          }}>
            {GraphicPath2}
          </div>
          <div className="absolute hidden xl:flex" style={{
            top: "-150px",
            left: "740px"
          }}>
            {GraphicPath1}
          </div>
          {graphicCards.map((card, index) => (
            <div key={`g-card-${index}`} className="flex flex-col rounded-2xl px-6 py-8 m-5" style={{
              border: "1px solid #25335C",
              background: "rgba(44, 57, 97, 0.10)",
              transform: window.innerWidth > 1280 ? card.transform : ""
            }}>
              <div className="flex justify-center items-center w-16 h-16 rounded-xl"
                style={{ background: card.iconBg }}>
                {card.icon}
              </div>
              <div className="mt-6" style={{
                color: "#FFF",
                fontFamily: "Mulish",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%",
                maxWidth: 202
              }}>{card.title}</div>
              <div className="mt-6" style={{
                color: "#8593C5",
                fontFamily: "Mulish",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
                maxWidth: 202
              }}>{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default memo(How)
