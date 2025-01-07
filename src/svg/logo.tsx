import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  fill?: string;
  text?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 200,
  height = 60,
  fill = "#3B82F6",
  text = "",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 200 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="10" width="20" height="20" fill={fill} />
    <rect x="35" y="10" width="20" height="20" fill={fill} />
    <circle cx="20" cy="40" r="10" fill={fill} />
    <circle cx="45" cy="40" r="10" fill={fill} />
    <text
      x="75"
      y="40"
      font-family="Arial"
      font-size="32"
      font-weight="bold"
      fill="white"
    >
      {text}
    </text>
  </svg>
);

export default Logo;
