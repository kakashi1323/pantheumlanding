import { CONTENT_FULL_SIZE, PlusIcon } from "@/client/constants"
import { memo } from "react"

const CaseStudy = (props: any) => {

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex w-full flex-row px-6 justify-between" style={{ maxWidth: CONTENT_FULL_SIZE }}>
        <div className="flex w-full flex-col items-center">
          <div className="flex mt-3 flex-col items-center">
            <div className="flex">{PlusIcon}</div>
            <div className="text-small-title">
              Case Study
            </div>
          </div>
          <div className="flex mt-10 text-title-2 text-center" style={{ maxWidth: 820 }}>
            Explore our case studies to see how we can help you achieve your blockchain goals.
          </div>
        </div>
      </div>
    </div >
  )
}

export default memo(CaseStudy)