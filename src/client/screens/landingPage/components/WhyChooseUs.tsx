import { CONTENT_FULL_SIZE, Cisco, Coinbase, Google, Nasa, PlusIcon, RightCaretMini, A, ChessLine, MobileCaretRight } from "@/client/constants"
import { memo } from "react"

const HorizontalLine = <div className="flex my-14 w-full h-0" style={{
  borderTop: "solid 1px linear-gradient(270deg,rgba(167, 80, 255, 0.27) 0%, #A750FF 54.69%, rgba(167, 80, 255, 0.10) 100%)"
}}></div>

const VerticalLine = <div className="flex h-full w-0 mx-14" style={{
  borderLeft: "solid 1px linear-gradient(270deg, rgba(167, 80, 255, 0.00) 0%, #A750FF 53.13%, rgba(167, 80, 255, 0.00) 100%)"
}}></div>


const WhyChooseUs = (props: any) => {

  return <div className="flex w-full h-full flex-col justify-center items-center" style={{ minHeight: 880 }}>
    <div id={"why-choose-us"}></div>
    <div className="flex w-full flex-row p-6 justify-between">
      <div className="flex w-full flex-col mt-44 items-center">
        <div className="flex mt-3 w-full flex-row items-center" style={{ maxWidth: 920 }}>
          <div className="mr-2">{PlusIcon}</div>
          <div className="text-small-title-mobile sm:text-small-title">
            Why Choose Us
          </div>
        </div>

        <div className="flex flex-row w-full flex-wrap justify-center" style={{ maxWidth: CONTENT_FULL_SIZE }}>
          <div className="flex rounded-4xl bg-neutral-800 image-frame-mobile sm:image-frame"></div>
          <div className="flex lg:pl-36 flex-col mt-14">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <div className="hidden lg:flex mr-6">{RightCaretMini}</div>
                <div className="flex lg:hidden mr-4">{MobileCaretRight}</div>
                <div className="text-title-3 whitespace-nowrap">Quality is First</div>
              </div>
              <div className="flex flex-row text-description" style={{ maxWidth: 448 }}>Our team of experts is committed to delivering exceptional, tailored solutions that exceed your expectations.</div>
              <div className="flex flex-row text-description mt-8" style={{ maxWidth: 448 }}>We work closely with you to understand your unique needs and challenges, and ensure that the final product meets the highest standards of quality, verified by third-party testing and auditing.</div>
            </div>

            <div className="flex flex-col mt-24">
              <div className="flex flex-row items-center">
                <div className="text-title-3">Unlocking Affordability</div>
              </div>
              <div className="flex flex-row text-description" style={{ maxWidth: 448 }}>We understand that cost is an important factor when it comes to blockchain development services.</div>
              <div className="flex flex-row text-description mt-8" style={{ maxWidth: 448 }}>That's why we offer competitive pricing starting at just $200, making our services accessible to businesses of all sizes.</div>
            </div>

            <div className="flex flex-col mt-24">
              <div className="flex flex-row items-center">
                <div className="text-title-3">Confidentiality</div>
              </div>
              <div className="flex flex-row text-description" style={{ maxWidth: 448 }}>We take the privacy and security of our clients' projects seriously. We ensure that all project details and identities are kept strictly confidential to protect our clients' interests and maintain their trust.</div>
            </div>

            <div className="flex flex-col mt-24">
              <div className="flex flex-row items-center">
                <div className="text-title-3">Escrow Payment</div>
              </div>
              <div className="flex flex-row text-description" style={{ maxWidth: 448 }}>To ensure a seamless and secure transaction process, we offer the option of using escrow payment services such as Fiverr and Upwork.</div>
              <div className="flex flex-row text-description mt-4" style={{ maxWidth: 448 }}>This allows our clients to have peace of mind and added protection throughout the payment process.</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full flex-wrap items-center mt-40" style={{ maxWidth: CONTENT_FULL_SIZE }}>
          <div className="flex flex-col sm:flex-row items-start lg:items-center text-title-3">
            <div className="flex text-title-3">
              Innovative Blockchain Solutions
            </div>
            <div className="hidden lg:flex mx-4">{RightCaretMini}</div>
            <div className="flex flex-row items-center lg:hidden mx-4">{MobileCaretRight}<div className="flex text-title-3">
              You
            </div></div>
            <div className="hidden lg:flex text-title-3">
              You
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap items-center mt-8">
            <div className={"cursor-pointer rounded-full border border-graphic-001 hover:bg-active-01 transition-all w-fit flex flex-row items-center text-center px-8 py-3"}>
              <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 12, lineHeight: "18px" }}>Contact US</div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center mt-4">
          <div className="flex w-fit relative" style={{ paddingBottom: 270 }}>
            {ChessLine}
            <div className="flex w-full bg-transparent absolute z-20 overflow-hidden justify-center">
              <div className="rounded-full" style={{
                background: "linear-gradient(212deg, rgba(169, 83, 255, 0.60) 0%, rgba(96, 72, 255, 0.60) 100%)",
                filter: "blur(120px)",
                width: "452px",
                height: "432px",
              }}></div>
            </div>
            <div className="flex w-full absolute flex-row justify-center z-30 max-w-100 lg:max-width-full" style={{ top: 420 }}>
              <div className="flex flex-row justify-center flex-wrap w-screen lg:w-full max-w-100 lg:max-width-full-2" style={{
                minHeight: 360,
                background: "linear-gradient(180deg, #131215 0%, #131215 100%)",
              }}
              >
                {Google}
                {Nasa}
                {A}
                {Coinbase}
                {Cisco}
                <div className="flex lg:hidden" style={{
                  width: 230,
                  height: 120
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
}

export default memo(WhyChooseUs)