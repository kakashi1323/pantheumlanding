
"use client";

import { memo, useEffect, useState } from "react"
import PageBackground from "./components/PageBackground";
import PageGraphic from "./components/PageGraphic";
import PageContainer from "./components/PageContainer";
import TopBar from "./components/TopBar";
import Introduce from "./components/Introduce";
import Branchs from "./components/Branchs";
import What from "./components/What";
import How from "./components/How";
import Solutions from "./components/Solutions";
import Cards from "./components/Cards";
import GetMoreUpdates from "./components/GetMoreUpdates";
import Footer from "./components/Footer";

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
              <Introduce />
              <Branchs />
              <What />
              <How />
              <Solutions />
              <Cards />
              <GetMoreUpdates />
              <Footer />
            </div>
          </PageGraphic>
        </PageContainer>
      </PageBackground>
    </div>
  )
}

export default memo(LandingPage)