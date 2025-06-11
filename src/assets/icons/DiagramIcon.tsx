import React from "react";

import { IconProps } from "./IconProps";

const DiagramIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" {...props}>
      <g clipPath="url(#clip0_488_4265)">
        <path
          d="M8.59902 17.0555C10.5977 17.0555 12.4948 16.3195 13.9923 15.0252L8.18027 9.32732C8.03434 9.1814 7.99627 9.05451 7.99627 8.83243V0.558586C3.74514 0.86949 0.337891 4.47343 0.337891 8.79435C0.337891 13.3183 4.08143 17.0555 8.59902 17.0555ZM16.8666 8.78799C16.8666 7.55708 16.562 6.28175 16.0417 5.24118L9.35413 9.07354L14.6839 14.3462C16.0354 12.8932 16.8666 10.8755 16.8666 8.78799ZM8.94168 8.20427L15.5722 4.40364C14.1446 2.08772 11.505 0.622035 8.94168 0.539551V8.20427Z"
          fill="url(#paint0_radial_488_4265)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_488_4265"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.3178 1.8311) rotate(135.022) scale(20.0803 15.1581)"
        >
          <stop stopColor="#FF9937" />
          <stop offset="0.895" stopColor="#FE6A2E" />
        </radialGradient>
        <clipPath id="clip0_488_4265">
          <rect
            width="16.7634"
            height="16.5287"
            fill="white"
            transform="translate(0.33783 0.526855)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DiagramIcon;
