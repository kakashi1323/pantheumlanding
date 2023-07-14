import { memo } from "react";

const PageBackground = (props: any) => {

  const { children } = props;

  return <div className="w-full flex flex-row justify-center items-center bg-main-01">
    {children}
  </div>
}

export default memo(PageBackground)