import { memo } from "react"

const How = (props: any) => {

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
        <div className="flex w-full">

        </div>
      </div>
    </div >
  )
}

export default memo(How)
