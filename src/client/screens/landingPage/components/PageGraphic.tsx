import { memo, useMemo } from "react";

// star 9 - 14- 24
const makeStar = (size = "9") => <svg style={{
  fill: "radial-gradient(49.94% 49.94% at 50.22% 50.09%, #FFF 23.91%, #F3F3F3 26.96%, #8C8C8C 54.42%, #414141 76.53%, #121212 92.19%, #000 100%)"
}} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
  <path d="M0.656921 4.80652C0.656921 2.66886 2.38527 0.940552 4.52292 0.940552C6.66058 0.940552 8.38885 2.66886 8.38885 4.80652C8.38885 6.94417 6.66058 8.67249 4.52292 8.67249C2.43075 8.67249 0.656921 6.94417 0.656921 4.80652Z" fill="url(#paint0_radial_8_3780)" />
  <defs>
    <radialGradient id="paint0_radial_8_3780" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.54563 4.80106) rotate(180) scale(3.87006)">
      <stop offset="0.2391" stop-color="white" />
      <stop offset="0.2696" stop-color="#F3F3F3" />
      <stop offset="0.5442" stop-color="#8C8C8C" />
      <stop offset="0.7653" stop-color="#414141" />
      <stop offset="0.9219" stop-color="#121212" />
      <stop offset="1" />
    </radialGradient>
  </defs>
</svg>

const PageGraphic = (props: any) => {

  const { children } = props;

  const stars = useMemo(() => {
    const listStar: Array<any> = []
    let left = 10, top = 10;
    while (top < 4081) {
      while (left < 2500) {
        listStar.push({
          left,
          top,
          size: parseInt((Math.random() * 26).toString()),
          opacity: Math.random() * 0.7,
          anim: Math.random() * 4
        });
        left = left + Math.random() * 350
      }
      left = 0;
      top = top + Math.random() * 200
    }
    return listStar
  }, [])

  return <div className="w-full flex flex-row justify-center items-center relative">
    <div className="w-full min-h-screen bg-transparent h-fit z-50 flex flex-col justify-start">
      {children}
    </div>
    <div className="w-full h-full bg-transparent absolute z-0 top-0 left-0 flex flex-col">
      <div className="w-full h-full relative overflow-hidden">
        <div className="w-full z-20" style={{
          height: 640,
          background: "radial-gradient(50% 50.00% at 50% 50.00%, #0C1A42 0%, #040D27 100%)"
        }}>
          {/* eclipse 1 */}
        </div>
        {/* stars */}
        {stars.map(starInfo => <div className={`absolute z-30 flex justify-center items-center ${starInfo.anim > 3 ? "animate-star3" : starInfo > 2 ? "animate-star2" : "animate-star"}`} style={{
          top: starInfo.top,
          left: starInfo.left,
          opacity: starInfo.opacity,
        }}>
          {makeStar(starInfo.size)}
        </div>)}
      </div>
    </div>
  </div>
}

export default memo(PageGraphic)