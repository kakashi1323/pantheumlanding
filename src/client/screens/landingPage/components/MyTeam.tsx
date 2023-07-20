import { CONTENT_FULL_SIZE, LongHyphen, PlusIcon } from "@/client/constants"
import { memo } from "react"

const MyTeam = (props: any) => {

  return (
    <div className="flex w-full h-full justify-center items-center mt-80">
      <div className="flex w-full flex-col px-4" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full mt-3 items-center" style={{ maxWidth: 920 }}>
            <div className="flex">{PlusIcon}</div>
            <div className="text-small-title">
              Our Team
            </div>
          </div>
        </div>

        <div className="text-title-3 mt-10" style={{ maxWidth: 738 }}>
          We take great pleasure in our ability to collaborate with our clients to produce outstanding results.
        </div>

        <div className="w-full text-description-2 flex-row flex-wrap items-center mt-28 relative" style={{ maxWidth: 738 }}>
          Our team is made up of experienced blockchain developers, designers, marketers, & consultants
          {<div className="align-middle mx-4" style={{
            whiteSpace: "nowrap",
            display: "inline-flex",
            flexWrap: "wrap",
          }}>{LongHyphen}</div>} who are passionate about creating innovative blockchain solutions.
        </div>
      </div>
    </div>
  )
}

export default memo(MyTeam)