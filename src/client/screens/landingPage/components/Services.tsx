import Button from "@/client/components/Button"
import { CONTENT_FULL_SIZE, LongHyphen, PlusIcon } from "@/client/constants"
import { memo } from "react"

const Services = (props: any) => {

  return <div className="flex w-full h-full justify-center items-center" style={{ minHeight: 880 }}>
    <div className="flex w-full flex-row p-6 justify-between" style={{ maxWidth: CONTENT_FULL_SIZE }}>
      <div className="flex w-full flex-col mt-44 items-center">
        <div className="flex mt-3 w-full flex-row items-center" style={{ maxWidth: 684 }}>
          <div className="mr-2">{PlusIcon}</div>
          <div className="text-small-title">
            Our Services
          </div>
        </div>

        <div className="w-full mt-10 text-title-2 flex-row flex-wrap items-center px-2 relative">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Whether it's developing custom blockchain applications, building decentralized exchanges, or creating NFT marketplaces.
          {<div className="align-middle" style={{
            whiteSpace: "nowrap",
            display: "inline-flex",
            flexWrap: "wrap",
          }}>{LongHyphen}</div>} We approach every project with a focus on
          <div className="absolute flex flex-col justify-center items-center"
            style={{
              left: "25%",
              bottom: -160
            }}>
            <div className={"graphic-button border border-graphic-001 w-fit text-center"}>
              <div className="text-graphic text-graphic-001 font-thin ">INNOVATION</div>
            </div>
            <div className={"graphic-button border border-graphic-001 mt-10"}>
              <div className="text-graphic text-graphic-001 font-thin ">cutting - edge technology</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default memo(Services)