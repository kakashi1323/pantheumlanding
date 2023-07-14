import { ContractIcon, FarmIcon, LaunchPadIcon, LoremIcon, MarketIcon } from "@/client/constants"
import { memo, useMemo } from "react"

const Cards = (props: any) => {

  const cards = useMemo(() => {
    return [
      {
        icon: LaunchPadIcon,
        title: "Launchpad",
        description: "The smart platform for top-tier projects kick start"
      },
      {
        icon: FarmIcon,
        title: "Farms",
        description: "Yield farmers earn rewards and have higher chance to be whitelisted in the upcoming projects"
      },
      {
        icon: MarketIcon,
        title: "Market Expansion",
        description: "Expand fundamental and buld influence"
      },
      {
        icon: ContractIcon,
        title: "Contract Audit Services",
        description: "Lorem ipsum dolor sit ameteos consectetur adipiscing elit Uter et massa mi. Aliquam in hendre"
      },
      {
        icon: <img src={"/images/SwapIcon.png"} style={{ width: 70, height: 70 }} />,
        title: "Swap",
        description: "Swapping crypto assets across blockchains seamlessly"
      },
      {
        icon: LoremIcon,
        title: "Lorem ipsum is a dolor",
        description: "Lorem ipsum dolor sit ameteos consectetur adipiscing elit Uter et massa mi. Aliquam in hendre"
      }
    ]
  }, [])

  return (
    <div className="w-full bg-transparent flex flex-row justify-center items-center mt-10 py-8">
      <div className="w-full bg-transparent flex flex-col justify-center lg:justify-start items-center lg:items-start mt-20 px-4" style={{ maxWidth: 1192 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((item: any, idx: number) => {
            return <div key={idx} className={`flex flex-col border rounded-2xl m-5 bg-card-02 px-6 py-10
              cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-sky-300 hover:bg-sky-800
              border-b-01 hover:border-sky-400
            `}
              style={{
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="w-full flex justify-center items-center ">
                <div className="flex justify-center w-40 h-40 items-center bg-fill-01 rounded-full">
                  <div className="flex justify-center items-center w-32 h-32 rounded-full bg-fill-02">
                    {item.icon}
                  </div>
                </div>
              </div>
              <div className="w-full text-center pt-6" style={{
                color: "#FFF",
                fontFamily: "Mulish",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%",
              }}>{item.title}</div>
              <div style={{
                color: "#8593C5",
                textAlign: "center",
                fontFamily: "Mulish",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
              }}>{item.description}</div>
            </div>;
          })}
        </div>
      </div>
    </div >
  )
}

export default memo(Cards)
