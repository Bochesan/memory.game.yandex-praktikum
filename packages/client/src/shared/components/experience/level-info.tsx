import { SVGProps } from 'react'

type Props = SVGProps<SVGGElement> & {
  value?: number
  level?: number
  maxLevel?: number
  currentScore?: number
}

const offset = 4
const width = 160
const height = 8

export const LevelInfo = ({
  value = 0,
  level = 1,
  currentScore = 0,
  maxLevel = 100,
  ...props
}: Props) => (
  <g viewBox="0 0 200 200" transform="translate(45,175)" {...props}>
    <rect stroke="#0097D3" width={width} height={height} />
    <rect
      fill="#08C8DF"
      width={(width - offset) * (value / 100)}
      height={height - offset}
      x={offset / 2}
      y={offset / 2}
    />
    <text x="20%" y="-20%" fill="#A0ECEA" fontSize={18} fontFamily="Alegreya">
      <tspan>Уровень</tspan>
    </text>
    <text x="48%" y="3%" fill="#47D0F2" fontSize={24} fontFamily="Alegreya">
      <tspan>EXP</tspan>
    </text>
    <text x="23%" y="-5%" fill="#fff" fontSize={74} fontFamily="Alegreya">
      <tspan>{level}</tspan>
    </text>

    <text
      transform="translate(80,30)"
      fill="#fff"
      fontSize={18}
      fontFamily="Alegreya">
      <tspan x="0" dx="0" text-anchor="middle">
        {currentScore}
      </tspan>
      <tspan x="0" dx="10" text-anchor="middle">
        /
      </tspan>
      <tspan x="0" dx="30" text-anchor="middle" fill="#949492">
        {maxLevel}
      </tspan>
    </text>
  </g>
)
