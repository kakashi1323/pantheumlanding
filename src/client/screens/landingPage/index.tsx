
"use client";

import { memo, useEffect, useState } from "react"
import PageBackground from "./components/PageBackground";
import PageGraphic from "./components/PageGraphic";
import PageContainer from "./components/PageContainer";
import TopBar from "./components/TopBar"
import Inovative from "./components/Inovative"

const LandingPage = (props: any) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div></div>
  }

  return (
    <div className="w-screen h-screen overflow-auto">
      <PageBackground>
        <PageContainer>
          <PageGraphic>
            <div className="w-full flex flex-col">
              <TopBar />
              <Inovative />
            </div>
          </PageGraphic>
        </PageContainer>
      </PageBackground>
    </div>
  )
}

export default memo(LandingPage)