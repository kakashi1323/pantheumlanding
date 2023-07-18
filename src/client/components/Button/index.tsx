import { memo } from "react"

const Button = (props: any) => {
  const { children, style = {}, className, ...nestedProps } = props

  return <button className={className} style={{
    borderRadius: "2.5rem",
    padding: "16px 24px",
    color: "rgba(19, 18, 21, 1)",
    fontFamily: "Manrope",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "18px",
    letterSpacing: "0.12em",
    textAlign: "left",
    border: "none",
    boxShadow: "0px 4px 24px 0px rgba(169, 83, 255, 0.48)",
    background: "#FFF",
    ...style
  }}
    {...nestedProps}>
    {children}
  </button>
}

export default memo(Button)
