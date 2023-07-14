import Carousel from "@/client/components/Carousel"
import { memo, useMemo, useState } from "react"

const Branchs = (props: any) => {

  const branchs = useMemo(() => {
    return [
      {
        id: 1,
        url: "/images/crypto.png"
      },
      {
        id: 2,
        url: "/images/capital.png"
      },
      {
        id: 3,
        url: "/images/crypto.png"
      },
      {
        id: 4,
        url: "/images/capital.png"
      },
      {
        id: 5,
        url: "/images/crypto.png"
      },
      {
        id: 6,
        url: "/images/capital.png"
      },
      {
        id: 7,
        url: "/images/crypto.png"
      },
      {
        id: 8,
        url: "/images/capital.png"
      },
      {
        id: 9,
        url: "/images/crypto.png"
      },
      {
        id: 10,
        url: "/images/capital.png"
      },
      {
        id: 11,
        url: "/images/crypto.png"
      },
      {
        id: 12,
        url: "/images/capital.png"
      },
      {
        id: 13,
        url: "/images/crypto.png"
      },
      {
        id: 14,
        url: "/images/capital.png"
      },
      {
        id: 15,
        url: "/images/crypto.png"
      },
      {
        id: 16,
        url: "/images/capital.png"
      },
    ]
  }, [])

  return (
    <div className="w-full bg-transparent flex flex-col justify-center items-center mt-20 border-t border-b py-6"
      style={{
        borderColor: "rgba(97, 141, 255, 0.15)",
      }}
    >
      <div className="w-full bg-transparent flex justify-center items-center text-center"
        style={{
          fontFamily: "Mulish",
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "150%",
          background: "linear-gradient(95deg, #B2C6FF 0%, #638AEF 68.75%)",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        }}
      >
        Honored To Be Accompanied With
      </div>
      <div className="w-full mt-8">
        <Carousel
          single={false}
          resources={branchs}
          imageStyle={{
            width: 248
          }}
          renderItem={(item: any) => {
            return (
              <div key={item.id} className="flex justify-center items-center py-6 px-12 mx-4 bg-card-01">
                <img src={item.url} style={{
                  width: 120,
                  height: 28
                }} />
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}

export default memo(Branchs)
