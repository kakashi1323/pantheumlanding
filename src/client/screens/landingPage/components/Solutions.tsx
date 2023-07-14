import Button from "@/client/components/Button"
import { ArrorColor, PantheumSolutionsGraph } from "@/client/constants"
import { memo } from "react"

const What = (props: any) => {

  return (
    <div className="w-full bg-transparent flex flex-row justify-center items-center mt-20">
      <div className="w-full bg-transparent flex flex-col lg:flex-row justify-center items-center mt-20 px-4" style={{ maxWidth: 1192 }}>
        <div className="flex w-full lg:w-fit lg:flex-1 justify-center items-center">
          {PantheumSolutionsGraph}
        </div>
        <div className="flex w-full lg:w-fit lg:flex-1 text-center lg:text-left flex-col mt-4 lg:pl-24">
          <div className="text-white" style={{
            fontFamily: "Mulish",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "150%",
          }}>Our Solutions</div>
          <div className="flex flex-col justify-center items-center text-left mt-4 lg:mt-0" style={{
            color: "#8593C5",
            fontFamily: "Mulish",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "150%",
          }}>
            <div>Comprehensive Incubation and diverse ecosystem for any Web3 project to thrive</div>
            <div>From product development, marketing, fund-raising to a successful launch.</div>
          </div>
          <div className="flex mt-10 justify-center lg:justify-start">
            <Button className={"transition-all hover:translate-x-2 hover:shadow-sm hover:shadow-sky-300hover:shadow-sm hover:shadow-sky-300"}>
              <div className="flex flex-row items-center">
                <span className="mr-6 ">Get started</span> {ArrorColor("#618DFF")}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default memo(What)
