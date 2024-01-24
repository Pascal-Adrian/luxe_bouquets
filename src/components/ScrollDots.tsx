interface ScrollDotsProps {
  numberOfDots: number;
  activeDot: number;
  dotSize?: string | number;
  dotColor?: string;
  dotTransitionSpeed?: string;
  activeDotColor?: string;
  dotClassName?: string;
  activeDotClassName?: string;
  dotStyle?: React.CSSProperties;
  activeDotStyle?: React.CSSProperties;
  onClick?: (index: number) => void;
}

function ScrollDots(props: ScrollDotsProps) {
  const dotSize = props.dotSize || "8px";
  const dotTransition =
    "background-color " + (props.dotTransitionSpeed || "0.5s") + " ease-in";

  const dotsStyle = {
    backgroundColor: props.dotColor || "#d2d2d7",
    width: dotSize,
    height: dotSize,
    borderRadius: "50%",
    transition: dotTransition,
    ...props.dotStyle,
  };

  const activeDotStyle = {
    backgroundColor: props.activeDotColor || "#808080",
    width: dotSize,
    height: dotSize,
    borderRadius: "50%",
    transition: dotTransition,
    ...props.activeDotStyle,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: dotSize,
  };

  const handleClick = (index: number) => {
    if (props.onClick) {
      props.onClick(index);
    }
  };

  const divs = [];
  for (let i = 0; i < props.numberOfDots; i++) {
    if (i === props.activeDot) {
      divs.push(
        <div
          key={i}
          className={props.dotClassName + " " + props.activeDotClassName}
          style={{ ...dotsStyle, ...activeDotStyle }}
          onClick={() => handleClick(i)}
        ></div>
      );
    } else {
      divs.push(
        <div
          key={i}
          className={props.dotClassName}
          style={dotsStyle}
          onClick={() => handleClick(i)}
        ></div>
      );
    }
  }

  return <div style={containerStyle}>{divs}</div>;
}

export default ScrollDots;
