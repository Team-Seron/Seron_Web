import * as React from "react";
import type { SVGProps } from "react";
const SvgAbout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 398 322"
    {...props}
  >
    <path fill="url(#About_svg__a)" d="M0 0h398v322H0z" />
    <defs>
      <pattern
        id="About_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#About_svg__b" transform="scale(.00251 .0031)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="About_svg__b"
        width={398}
        height={322}
      />
    </defs>
  </svg>
);
export default SvgAbout;