import Button from "@/client/components/Button"
import { ContractIcon, FarmIcon, LaunchPadIcon, LoremIcon, MarketIcon, Plane1, Plane2, PlaneInput } from "@/client/constants"
import { memo, useMemo } from "react"

const Cards = (props: any) => {

  return (
    <div className="w-full bg-transparent flex flex-row justify-center items-center mt-20 py-8">
      <div className="w-full bg-transparent flex flex-col justify-center items-center px-4" style={{ maxWidth: 1192 }}>
        <div className="w-full bg-transparent flex flex-col justify-center items-center relative" style={{ maxWidth: 774 }}>
          <div className="absolute hidden lg:flex" style={{
            left: "-120px",
            top: "-20px"
          }}>{Plane1}</div>
          <div className="absolute hidden lg:flex" style={{
            right: "-120px",
            top: "120px"
          }}>{Plane2}</div>
          <div className="w-full text-center"
            style={{
              color: "#FFF",
              fontFamily: "Mulish",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "150%",
            }}
          >Get more Updates</div>
          <div className="mt-4 w-full text-center"
            style={{
              maxWidth: 483,
              color: "#8593C5",
              textAlign: "center",
              fontFamily: "Mulish",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "150%",
            }}>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna</div>
          <div className="w-full">
            <div className="w-full bg-white rounded-4xl overflow-hidden relative mt-10">
              <div className="absolute top-1 right-0 h-full flex items-center justify-center transition-all hover:-translate-x-1" style={{ top: 0, right: 1 }}>
                <Button className={"hover:shadow-md hover:shadow-sky-300"} style={{
                  borderRadius: "40px",
                  background: "linear-gradient(180deg, #B2C6FF 0%, #638AEF 100%)",
                }}>
                  <div className="flex flex-row" style={{
                    color: "#FFF",
                    fontFamily: "Mulish",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "150%",
                  }}>
                    <span className="mr-4">Send</span>
                    {PlaneInput}
                  </div>
                </Button>
              </div>
              <input className="w-full h-full pl-7 py-4 pr-36 rounded-4xl"
                placeholder="Enter your mail"
                style={{
                  color: "#ABB7E0",
                  fontFamily: "Mulish",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  paddingTop: "14px",
                  paddingBottom: "14px"
                }}
              />
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default memo(Cards)
