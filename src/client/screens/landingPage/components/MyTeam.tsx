import { ArrowLeft, ArrowRight, CONTENT_FULL_SIZE, LongHyphen, PlusIcon } from "@/client/constants"
import { memo } from "react"

const MyTeam = (props: any) => {

  return (
    <div className="flex w-full h-full flex-col justify-center items-center mt-80">
      <div className="flex w-full flex-col px-4" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full mt-3 items-center" style={{ maxWidth: 1120 }}>
            <div className="flex">{PlusIcon}</div>
            <div className="text-small-title">
              Our Team
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center items-center px-4 mt-10" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex flex-col w-full mt-3" style={{ maxWidth: 1120 }}>
          <div className="text-title-4" style={{ maxWidth: 755 }}>
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

      <div className="flex w-full mt-40 overflow-x-auto scroll-smooth scroll-hidden pl-12 flex-row" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex flex-row w-fit" style={{ maxWidth: CONTENT_FULL_SIZE }}>
          <div className="flex relative mx-3 bg-card overflow-hidden border-none rounded-3xl" style={{
            minWidth: "330px",
            width: "330px",
            height: "440px",
          }}>
            {/* <img className="flex w-full h-full rounded-3xl" src="/images/" /> */}
            <div className="absolute w-full h-full flex items-end px-8 py-12">
              <div className="text-title-5">Alex Ho</div>
            </div>
          </div>

          <div className="flex relative mx-3 bg-card overflow-hidden border-none rounded-3xl" style={{
            minWidth: "330px",
            width: "330px",
            height: "440px",
          }}>
            {/* <img className="flex w-full h-full rounded-3xl" src="/images/" /> */}
            <div className="absolute w-full h-full flex items-end px-8 py-12">
              <div className="text-title-5">Anthony Nguyen </div>
            </div>
          </div>

          <div className="flex relative mx-3 bg-card overflow-hidden border-none rounded-3xl" style={{
            minWidth: "330px",
            width: "330px",
            height: "440px",
          }}>
            {/* <img className="flex w-full h-full rounded-3xl" src="/images/" /> */}
            <div className="absolute w-full h-full flex items-end px-8 py-12">
              <div className="text-title-5">Shin Pham</div>
            </div>
          </div>

          <div className="flex relative mx-3 bg-card overflow-hidden border-none rounded-3xl" style={{
            minWidth: "330px",
            width: "330px",
            height: "440px",
          }}>
            {/* <img className="flex w-full h-full rounded-3xl" src="/images/" /> */}
            <div className="absolute w-full h-full flex items-end px-8 py-12">
              <div className="text-title-5">Charlie Ho</div>
            </div>
          </div>

          <div className="flex relative mx-3 bg-card overflow-hidden border-none rounded-3xl" style={{
            minWidth: "330px",
            width: "330px",
            height: "440px",
          }}>
            {/* <img className="flex w-full h-full rounded-3xl" src="/images/" /> */}
            <div className="absolute w-full h-full flex items-end px-8 py-12">
              <div className="text-title-5">Charlie Ho</div>
            </div>
          </div>

          <div className="flex relative mx-3 bg-card overflow-hidden border-none rounded-3xl" style={{
            minWidth: "330px",
            width: "330px",
            height: "440px",
          }}>
            {/* <img className="flex w-full h-full rounded-3xl" src="/images/" /> */}
            <div className="absolute w-full h-full flex items-end px-8 py-12">
              <div className="text-title-5">Charlie Ho</div>
            </div>
          </div>

          <div className="flex relative mx-3 bg-card overflow-hidden border-none rounded-3xl" style={{
            minWidth: "330px",
            width: "330px",
            height: "440px",
          }}>
            {/* <img className="flex w-full h-full rounded-3xl" src="/images/" /> */}
            <div className="absolute w-full h-full flex items-end px-8 py-12">
              <div className="text-title-5">Charlie Ho</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-16 items-center justify-between" style={{ maxWidth: 1120 }}>
        <div className="text-description" style={{ maxWidth: 448 }}>
          They are committed to staying up-to-date with the latest blockchain technologies & trends.
        </div>
        <div className="flex flex-row">
          <div className="mx-4 rounded-full w-10 h-10 bg-neutral-800 cursor-pointer flex items-center justify-center">
            {ArrowLeft}
          </div>
          <div className="mx-4 rounded-full w-10 h-10 bg-white cursor-pointer flex items-center justify-center">
            {ArrowRight}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col mt-52"></div>
    </div>
  )
}

export default memo(MyTeam)