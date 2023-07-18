import { memo } from "react";

const PageBackground = (props: any) => {

  const { children } = props;

  return <div className="w-full min-h-screen flex flex-row justify-center items-center bg-no-repeat bg-auto bg-main-bg"
    style={{
      backgroundImage: "url(/images/graphicBG.png)",
      backgroundSize: "100% auto",
    }}
  >
    {children}
  </div>
}

export default memo(PageBackground)