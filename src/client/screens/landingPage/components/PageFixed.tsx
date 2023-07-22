import { scrollUp } from "@/client/constants";
import { goToSection } from "@/client/constants/helpers";
import { memo } from "react";

const PageFixed = (props: any) => {

  const { children } = props;

  return <>
    <div className="hidden md:flex fixed bottom-6 right-6" style={{ zIndex: 80 }}>
      <div className={`flex rounded-full p-4 justify-center items-center cursor-pointer w-14 h-14 transition-all hover:-translate-y-2
       shadow-inner shadow-slate-50
      `}
        onClick={() => goToSection("top-bar")}
        style={{
          background: "rgba(0,0,0,0.16)"
        }}
      >
        {scrollUp}
      </div>
    </div>
  </>
}

export default memo(PageFixed)