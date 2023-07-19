import Button from "@/client/components/Button"
import { CONTENT_FULL_SIZE, LeftCaretMini, LongHyphen, PlusIcon, RightCaretMini } from "@/client/constants"
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
          <div className="flex flex-col justify-center items-center lg:translate-x-12 lg:-translate-y-12"
            style={{
            }}>
            <div className={"cursor-pointer graphic-button border border-graphic-001 w-fit text-center"}>
              <div className="text-graphic text-graphic-001 font-thin ">Innovation</div>
            </div>
            <div className={"cursor-pointer graphic-button border border-graphic-001 mt-10"}>
              <div className="text-graphic text-graphic-001 font-thin ">cutting - edge technology</div>
            </div>
          </div>
        </div>

        <div className="text-title-3 w-full max-w-4xl mt-24 text-center">
          We aim to help our clients stay ahead of the rapidly evolving world of blockchain.
        </div>

        <div className="w-full relative flex flex-col">
          <div className="w-full flex flex-col z-30 mt-36 items-center">
            <div className="flex flex-row items-center my-4">
              <div>{LeftCaretMini}</div>
              <div className={"cursor-pointer graphic-button border border-graphic-001 w-fit flex flex-row items-center text-center mx-6"}>
                <div className="graphic-numbering">01</div>
                <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 40, lineHeight: "48px" }}>NFT Services</div>
              </div>
              <div>{RightCaretMini}</div>
              <div className="text-graphic-2 whitespace-nowrap ml-10">GameFi & Metaverse</div>
            </div>
            <div className="flex flex-row items-center my-4">
              <div>{LeftCaretMini}</div>
              <div className={"cursor-pointer graphic-button border border-graphic-001 w-fit flex flex-row items-center text-center mx-6"}
                style={{
                  background: "linear-gradient(340deg, #A953FF 0%, #6048FF 100%)"
                }}
              >
                <div className="graphic-numbering-active">02</div>
                <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 40, lineHeight: "48px" }}>Crypto Tools & Services</div>
              </div>
              <div>{RightCaretMini}</div>
            </div>
            <div className="flex flex-row items-center my-4">
              <div className="text-graphic-2 whitespace-nowrap mr-10">Security & Auditing</div>
              <div>{LeftCaretMini}</div>
              <div className={"cursor-pointer graphic-button border border-graphic-001 w-fit flex flex-row items-center text-center mx-6"}>
                <div className="graphic-numbering">03</div>
                <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 40, lineHeight: "48px" }}>DeFi Development</div>
              </div>
              <div>{RightCaretMini}</div>
              <div className="text-graphic-2 whitespace-nowrap ml-10">Consulting Services</div>
            </div>
            <div className="flex flex-row items-center my-4">
              <div>{LeftCaretMini}</div>
              <div className={"cursor-pointer graphic-button border border-graphic-001 w-fit flex flex-row items-center text-center mx-6"}>
                <div className="graphic-numbering">04</div>
                <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 40, lineHeight: "48px" }}>Blockchain Development Services</div>
              </div>
              <div>{RightCaretMini}</div>
            </div>
            <div className="flex flex-row items-center my-4">
              <div className="text-graphic-2 whitespace-nowrap mr-10">Crypto Tools & Services</div>
              <div>{LeftCaretMini}</div>
              <div className={"cursor-pointer graphic-button border border-graphic-001 w-fit flex flex-row items-center text-center mx-6"}>
                <div className="graphic-numbering">05</div>
                <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 40, lineHeight: "48px" }}>Crypto Tools & Services</div>
              </div>
              <div>{RightCaretMini}</div>
              <div className="text-graphic-2 whitespace-nowrap ml-10">Blockchain Development Services</div>
            </div>
            <div className="flex flex-row items-center my-4">
              <div className="text-graphic-2 whitespace-nowrap mr-10">DeFi Development</div>
              <div>{LeftCaretMini}</div>
              <div className={"cursor-pointer graphic-button border border-graphic-001 w-fit flex flex-row items-center text-center mx-6"}>
                <div className="graphic-numbering">06</div>
                <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 40, lineHeight: "48px" }}>Consulting Services</div>
              </div>
              <div>{RightCaretMini}</div>
              <div className="text-graphic-2 whitespace-nowrap ml-10">Crypto Tools and Services</div>
            </div>
            <div className="flex flex-row items-center my-4">
              <div>{LeftCaretMini}</div>
              <div className={"cursor-pointer graphic-button border border-graphic-001 w-fit flex flex-row items-center text-center mx-6"}>
                <div className="graphic-numbering">07</div>
                <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 40, lineHeight: "48px" }}>Security and Auditing</div>
              </div>
              <div>{RightCaretMini}</div>
            </div>
          </div>

          <div className="absolute top-100 w-full h-fit flex flex-row flex-end z-20" style={{ width: CONTENT_FULL_SIZE, top: 450 }}>
            <div style={{
              width: "1118.574px",
              height: "317.132px",
              transform: "rotate(162.026deg)",
              flexShrink: "0",
              borderRadius: "1118.574px",
              background: "linear-gradient(212deg, rgba(169, 83, 255, 0.60) 0%, rgba(96, 72, 255, 0.60) 100%)",
              filter: "blur(160px)",
            }}>
              {/* eclipse 1 graphic */}
            </div>
          </div>
          <div className="absolute top-100 text-opacity-100 w-full h-fit flex flex-row flex-end z-20" style={{ width: CONTENT_FULL_SIZE, top: 450 }}>
            <div style={{
              width: "1319.973px",
              height: "340.229px",
              transform: "rotate(40.118deg)",
              flexShrink: 0,
              borderRadius: "1319.973px",
              background: "linear-gradient(226deg, #A953FF 0%, #6048FF 100%)",
              filter: "blur(160px)",
            }}>
              {/* eclipse 2 graphic */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
}

export default memo(Services)