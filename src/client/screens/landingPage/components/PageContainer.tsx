import { memo } from "react";

const PageContainer = (props: any) => {

  const { children } = props;

  return <div className="w-full h-full flex flex-col justify-center items-start overflow-auto">
    {children}
  </div>
}

export default memo(PageContainer)