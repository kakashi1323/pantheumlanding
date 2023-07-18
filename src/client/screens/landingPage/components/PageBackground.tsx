import { memo } from "react";

const PageBackground = (props: any) => {

  const { children } = props;

  return <div className="w-full min-h-screen flex flex-row justify-center items-center bg-main-bg"
  >
    {children}
  </div>
}

export default memo(PageBackground)