import React from "react";

import { IconProps } from "./IconProps";

const BulbIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20" fill="none" {...props}>
      <g clipPath="url(#clip0_488_4272)">
        <path
          d="M2.98334 16.609H8.07835C8.32583 16.609 8.51614 16.4123 8.51614 16.1649C8.51614 15.9174 8.32583 15.7207 8.07835 15.7207H2.98334C2.73588 15.7207 2.54553 15.9174 2.54553 16.1649C2.54553 16.4123 2.73588 16.609 2.98334 16.609ZM5.52767 18.9313C6.79034 18.9313 7.81184 18.3221 7.88168 17.4021H3.18003C3.23713 18.3221 4.25868 18.9313 5.52767 18.9313Z"
          fill="url(#paint0_radial_488_4272)"
        />
        <path
          d="M0.122009 5.05478C0.122009 8.10672 2.15875 8.92518 2.50137 14.4707C2.51406 14.7563 2.67904 14.9275 2.98994 14.9275H8.07224C8.38314 14.9275 8.54817 14.7563 8.56084 14.4707C8.90344 8.92518 10.9402 8.10672 10.9402 5.05478C10.9402 2.29472 8.55447 0.0739746 5.52792 0.0739746C2.50772 0.0739746 0.122009 2.29472 0.122009 5.05478Z"
          fill="url(#paint1_radial_488_4272)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_488_4272"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.95669 15.9718) rotate(151.732) scale(5.82576 3.66873)"
        >
          <stop stopColor="#FF9937" />
          <stop offset="0.895" stopColor="#FE6A2E" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_488_4272"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.92653 1.23552) rotate(126.067) scale(15.7915 11.3457)"
        >
          <stop stopColor="#FF9937" />
          <stop offset="0.895" stopColor="#FE6A2E" />
        </radialGradient>
        <clipPath id="clip0_488_4272">
          <rect
            width="11.0529"
            height="19.4346"
            fill="white"
            transform="translate(0.122009 0.0739746)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BulbIcon;
