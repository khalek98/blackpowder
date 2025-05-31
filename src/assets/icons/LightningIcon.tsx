import React from "react";

import { IconProps } from "./IconProps";

const LightningIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 16" fill="none" {...props}>
      <g clipPath="url(#clip0_488_4248)">
        <path
          d="M0.524658 8.83755C0.524658 9.06278 0.700439 9.23856 0.958618 9.23856H4.98511L2.85376 15.0229C2.61206 15.6601 3.26575 15.9896 3.68322 15.4733L10.0937 7.45324C10.1981 7.31593 10.2586 7.18959 10.2586 7.04678C10.2586 6.82155 10.0883 6.64026 9.83009 6.64026H5.7981L7.93492 0.86147C8.17663 0.218767 7.52294 -0.110823 7.10546 0.411028L0.694946 8.43103C0.590576 8.56839 0.524658 8.69473 0.524658 8.83755Z"
          fill="url(#paint0_radial_488_4248)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_488_4248"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.34649 1.37079) rotate(122.004) scale(15.7837 10.7096)"
        >
          <stop stopColor="#FF9937" />
          <stop offset="0.895" stopColor="#FE6A2E" />
        </radialGradient>
        <clipPath id="clip0_488_4248">
          <rect
            width="9.95361"
            height="15.694"
            fill="white"
            transform="translate(0.523193 0.152832)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LightningIcon;
