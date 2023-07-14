import { GraphicPath1, GraphicPath2, LaunchCardIcon, LightIcon, MarketingCardIcon, ShieldIcon } from "@/client/constants"
import { memo, useEffect, useMemo, useState } from "react"

const How = (props: any) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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

  const handleSizeChange = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange)
    return () => {
      window.removeEventListener("resize", handleSizeChange)
    }
  }, [])

  return (
    <div className="w-full bg-transparent flex flex-row justify-center items-center mt-10 py-8">
      <div className="w-full bg-transparent flex flex-col justify-center lg:justify-start items-center lg:items-start mt-20 px-4" style={{ maxWidth: 1192 }}>
        <div className="flex max-w-xl text-center lg:text-left" style={{
          color: "#FFF",
          fontFamily: "Mulish",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "150%",
        }}>How does Pantheum work?</div>
        <div className="flex max-w-md text-center lg:text-left" style={{
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
            <div key={`g-card-${index}`} className="hidden lg:flex flex-col rounded-2xl px-6 py-8 m-5 transition-all hover:shadow-sm bg-card-03 hover:shadow-sky-300 hover:bg-sky-800" style={{
              border: "1px solid #25335C",
              transform: windowWidth >= 1280 ? card.transform : ""
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
          <div className="grid lg:hidden w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {graphicCards.map((card: any, index: number) => {
              return <div key={index} className={`flex w-full flex-col border rounded-2xl m-0 sm:m-5 bg-card-02 px-6 py-10
              cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 
              border-b-01 hover:border-sky-400
            `}
                style={{
                  backdropFilter: "blur(20px)",
                  minWidth: 252
                }}
              >
                <div className="mt-6 w-full flex justify-center" >
                  <div className="mt-6 w-full flex justify-start" >
                    <div className="flex justify-center items-center w-16 h-16 rounded-xl"
                      style={{ background: card.iconBg }}>
                      {card.icon}
                    </div>
                  </div>
                </div>
                <div className="mt-6 w-full flex" >
                  <div style={{
                    color: "#FFF",
                    fontFamily: "Mulish",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "150%",
                  }}>{card.title}</div>
                </div>
                <div className="mt-6 w-full flex" >
                  <div style={{
                    color: "#8593C5",
                    fontFamily: "Mulish",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "150%",
                  }}>{card.description}</div>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div >
  )
}

export default memo(How)
