export const Filter = () => (
  <filter
    id="shadow"
    x="130"
    y="130"
    width="55"
    height="55"
    filterUnits="userSpaceOnUse"
    colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix" />
    <feColorMatrix
      in="SourceAlpha"
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      result="hardAlpha"
    />
    <feOffset dy="1" />
    <feGaussianBlur stdDeviation="1" />
    <feComposite in2="hardAlpha" operator="out" />
    <feColorMatrix
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
    />
    <feBlend
      mode="normal"
      in2="BackgroundImageFix"
      result="effect1_dropShadow_14_17"
    />
    <feBlend
      mode="normal"
      in="SourceGraphic"
      in2="effect1_dropShadow_14_17"
      result="shape"
    />
    <feColorMatrix
      in="SourceAlpha"
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      result="hardAlpha"
    />
    <feOffset dy="4" />
    <feGaussianBlur stdDeviation="2" />
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    <feColorMatrix
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0"
    />
    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_14_17" />
  </filter>
)
