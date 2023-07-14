import Button from "@/client/components/Button"
import {
  LogoCapitalSVG, BRounded, ERounded, ArrorWhite,
  MoneyYellowRounded, MoneyPinkRounded, EtheGreenRounded, BPinkRounded
} from "@/client/constants"
import { memo, useState } from "react"

const Introduce = (props: any) => {

  return (
    <div className="w-full bg-transparent flex flex-col justify-center items-center mt-20">
      <div className="flex flex-col flex-wrap justify-between max-w-6xl w-full">
        <div className="w-full flex flex-row justify-center items-center relative">
          <div className="absolute top-0 left-10 hidden lg:flex" style={{
            top: "-30px",
            left: "136px",
            animationDelay: "150ms"
          }}>{BRounded}</div>
          <div className="absolute top-0 right-10 hidden lg:flex" style={{
            top: "-30px",
            right: "136px",
            animationDelay: "180ms"
          }}>{ERounded}</div>
          <div className="flex flex-row justify-center items-center">
            {LogoCapitalSVG}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap justify-between max-w-6xl w-full mt-8">
        <div className="w-full flex flex-row justify-center items-center relative">
          <div className="absolute top-0 left-10 hidden lg:flex delay-75" style={{
            top: "36px",
            animationDelay: "75ms"
          }}>{MoneyPinkRounded}</div>
          <div className="absolute top-0 right-10 hidden lg:flex delay-100" style={{
            top: "36px",
            animationDelay: "100ms"
          }}>{MoneyYellowRounded}</div>
          <div className="flex flex-row justify-center items-center text-white" style={{
            fontFamily: "Mulish",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "150%",
            maxWidth: 780,
            textAlign: "center"
          }}>
            Join us to be a part of the next big thing
            in Blockchain Industry
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap justify-between max-w-6xl w-full mt-4">
        <div className="w-full flex flex-row justify-center items-center relative">
          <div className="absolute top-0 left-14 hidden lg:flex" style={{
            top: "36px"
          }}>{EtheGreenRounded}</div>
          <div className="absolute top-0 right-14 hidden lg:flex
          " style={{
              top: "36px",
            }}>{BPinkRounded}</div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center text-sub" style={{
              fontFamily: "Mulish",
              textAlign: "center",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "150%",
              maxWidth: 650,
            }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla
            </div>
            <div className="mt-10">
              <Button className={"transition-all hover:translate-x-2 hover:shadow-sm hover:shadow-sky-300"} style={{
                background: "linear-gradient(180deg, #B2C6FF 0%, #638AEF 100%)",
                padding: "14.5px 24px 14.5px 32px"
              }}>
                <div className="flex flex-row items-center">
                  <span className="mr-6 text-white">Join Whitelist</span> {ArrorWhite}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Introduce)
