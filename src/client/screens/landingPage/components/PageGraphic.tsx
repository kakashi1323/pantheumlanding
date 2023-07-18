import { memo } from "react";

const PageGraphic = (props: any) => {

  const { children } = props;

  return <div className="w-full flex flex-row justify-center items-center relative">
    <div className="w-full min-h-screen bg-transparent h-fit z-50 flex flex-col justify-start">
      {children}
    </div>
    <div className="w-full h-full bg-transparent absolute z-0 top-0 left-0">
      {/**Graphic here */}
      <div className="w-full h-full min-h-screen flex flex-col bg-main-gradient">
      </div>
    </div>
  </div>
}

export default memo(PageGraphic)