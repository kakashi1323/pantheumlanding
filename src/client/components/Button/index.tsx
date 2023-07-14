import { memo } from "react"

const Button = (props: any) => {
  const { children, style = {}, className, ...nestedProps } = props

  return <button className={className} style={{
    borderRadius: "2.5rem",
    padding: "8.5px 24px",
    color: "#618DFF",
    fontFamily: "Mulish",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "150%",
    border: "solid 1px #618DFF",
    background: "linear-gradient(95deg, rgba(239, 243, 255, 0.15) 0%, rgba(125, 158, 243, 0.15) 68.75%)",
    ...style
  }}
    {...nestedProps}>
    {children}
  </button>
}

export default memo(Button)