import { CONTENT_FULL_SIZE, PlusIcon } from "@/client/constants"
import { memo } from "react"

const CaseStudy = (props: any) => {

  return (
    <div className="flex w-full flex-col h-full justify-center items-center">
      <div id={"case-study"}></div>
      <div className="flex w-full flex-row px-6 justify-between" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full flex-col items-center">
          <div className="flex mt-3 flex-col items-center">
            <div className="flex">{PlusIcon}</div>
            <div className="text-small-title-mobile sm:text-small-title">
              Case Study
            </div>
          </div>

          <div className="flex mt-10 text-title-2-mobile lg:text-title-2 text-center" style={{ maxWidth: 820 }}>
            Explore our case studies to see how we can help you achieve your blockchain goals.
          </div>

          <div className="hidden lg:flex w-full mt-40 flex-row">
            <div className="flex flex-1 flex-col justify-center items-center">
              <div className="flex flex-col" style={{ maxWidth: 448 }}>
                <img className="flex w-full rounded-4xl" src={"/images/pancakeswap.png"} style={{ maxWidth: 448 }} />
                <div className="flex mt-8 w-full text-left text-title-3" style={{ maxWidth: 448 }}>Pancakeswap</div>
                <div className="flex mt-1 w-full text-left text-description" style={{ maxWidth: 448 }}>
                  To ensure a seamless and secure transaction process, we offer the option of using escrow payment services. To ensure a seamless and secure transaction process.
                </div>
              </div>

              <div className="flex flex-col mt-32" style={{ maxWidth: 448 }}>
                <img className="flex w-full rounded-4xl" src={"/images/marketplace.png"} style={{ maxWidth: 448 }} />
                <div className="flex mt-8 w-full text-left text-title-3" style={{ maxWidth: 448 }}>Blur Marketplace</div>
                <div className="flex mt-1 w-full text-left text-description" style={{ maxWidth: 448 }}>
                  To ensure a seamless and secure transaction process, we offer the option of using escrow payment services. To ensure a seamless and secure transaction process.
                </div>
              </div>

              <div className="flex mt-52">
                <div className={"cursor-pointer rounded-full border border-graphic-001 w-fit flex flex-row items-center text-center px-8 py-3"}>
                  <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 12, lineHeight: "18px" }}>View more work</div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center items-center transition-all translate-y-64">
              <div className="flex flex-col" style={{ maxWidth: 448 }}>
                <img className="flex w-full rounded-4xl" src={"/images/uniswap.png"} style={{ maxWidth: 448 }} />
                <div className="flex mt-8 w-full text-left text-title-3" style={{ maxWidth: 448 }}>Uniswap V3</div>
                <div className="flex mt-1 w-full text-left text-description" style={{ maxWidth: 448 }}>
                  To ensure a seamless and secure transaction process, we offer the option of using escrow payment services. To ensure a seamless and secure transaction process.
                </div>
              </div>

              <div className="flex flex-col mt-32" style={{ maxWidth: 448 }}>
                <img className="flex w-full rounded-4xl" src={"/images/compound.png"} style={{ maxWidth: 448 }} />
                <div className="flex mt-8 w-full text-left text-title-3" style={{ maxWidth: 448 }}>Compound</div>
                <div className="flex mt-1 w-full text-left text-description" style={{ maxWidth: 448 }}>
                  To ensure a seamless and secure transaction process, we offer the option of using escrow payment services. To ensure a seamless and secure transaction process.
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden w-full mt-40 flex-col justify-center items-center">
            <div className="flex flex-col" style={{ maxWidth: 448 }}>
              <img className="flex w-full rounded-4xl" src={"/images/pancakeswap.png"} style={{ maxWidth: 448 }} />
              <div className="flex mt-8 w-full text-left text-title-3" style={{ maxWidth: 448 }}>Pancakeswap</div>
              <div className="flex mt-1 w-full text-left text-description" style={{ maxWidth: 448 }}>
                To ensure a seamless and secure transaction process, we offer the option of using escrow payment services. To ensure a seamless and secure transaction process.
              </div>
            </div>

            <div className="flex flex-col mt-32" style={{ maxWidth: 448 }}>
              <img className="flex w-full rounded-4xl" src={"/images/uniswap.png"} style={{ maxWidth: 448 }} />
              <div className="flex mt-8 w-full text-left text-title-3" style={{ maxWidth: 448 }}>Uniswap V3</div>
              <div className="flex mt-1 w-full text-left text-description" style={{ maxWidth: 448 }}>
                To ensure a seamless and secure transaction process, we offer the option of using escrow payment services. To ensure a seamless and secure transaction process.
              </div>
            </div>

            <div className="flex flex-col mt-32" style={{ maxWidth: 448 }}>
              <img className="flex w-full rounded-4xl" src={"/images/marketplace.png"} style={{ maxWidth: 448 }} />
              <div className="flex mt-8 w-full text-left text-title-3" style={{ maxWidth: 448 }}>Blur Marketplace</div>
              <div className="flex mt-1 w-full text-left text-description" style={{ maxWidth: 448 }}>
                To ensure a seamless and secure transaction process, we offer the option of using escrow payment services. To ensure a seamless and secure transaction process.
              </div>
            </div>

            <div className="flex flex-col mt-32" style={{ maxWidth: 448 }}>
              <img className="flex w-full rounded-4xl" src={"/images/compound.png"} style={{ maxWidth: 448 }} />
              <div className="flex mt-8 w-full text-left text-title-3" style={{ maxWidth: 448 }}>Compound</div>
              <div className="flex mt-1 w-full text-left text-description" style={{ maxWidth: 448 }}>
                To ensure a seamless and secure transaction process, we offer the option of using escrow payment services. To ensure a seamless and secure transaction process.
              </div>
            </div>

            <div className="flex mt-32 w-full flex-start">
              <div className={"cursor-pointer rounded-full border border-graphic-001 w-fit flex flex-row items-center text-center px-8 py-3"}>
                <div className="text-graphic text-graphic-001 font-thin" style={{ color: "white", fontSize: 12, lineHeight: "18px" }}>View more work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default memo(CaseStudy)