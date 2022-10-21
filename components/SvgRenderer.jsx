export default function SvgRenderer(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={props.height}
        viewBox="0 0 24 24"
        width={props.width}
        fill={props.fill}
        alt={props.alt}
      >
        {props.iconCode}
      </svg>
      <style jsx>
        {`
          svg:hover {
            fill: ${props.hoverFill ? props.hoverFill : props.fill};
          }
        `}
      </style>
    </>
  )
}
