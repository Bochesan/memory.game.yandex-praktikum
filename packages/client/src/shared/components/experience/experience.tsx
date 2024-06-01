import { Defs } from './defs'
import { LevelInfo } from './level-info'

type Props = {
  level?: number
}

export const Experience = ({ level = 100 }: Props) => {
  return (
    <svg
      width="357"
      height="344"
      viewBox="0 0 357 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7071 174.707L187 344V4L17.7071 173.293C17.3166 173.683 17.3166 174.317 17.7071 174.707Z"
        fill="url(#paint0_radial_17_669)"
      />
      <g filter="url(#filter0_if_17_669)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180.476 1.70711C180.866 2.09763 180.866 2.73079 180.476 3.12132L10.7945 172.803C10.4039 173.193 10.4039 173.826 10.7945 174.217L130.976 294.398C131.366 294.789 131.366 295.422 130.976 295.812C130.585 296.203 129.952 296.203 129.561 295.812L8.67314 174.924C7.89209 174.143 7.8921 172.877 8.67314 172.096L179.061 1.70711C179.452 1.31658 180.085 1.31658 180.476 1.70711Z"
          fill="url(#paint1_linear_17_669)"
        />
      </g>
      <g filter="url(#filter1_f_17_669)">
        <path
          d="M5.82843 174.174C4.26633 172.612 4.26633 170.079 5.82843 168.517L42.0466 132.299C43.6087 130.737 46.1413 130.737 47.7034 132.299L49.2059 133.802C50.768 135.364 50.768 137.896 49.2059 139.458L12.9877 175.677C11.4256 177.239 8.89297 177.239 7.33087 175.677L5.82843 174.174Z"
          fill="url(#paint2_linear_17_669)"
          fillOpacity="0.85"
        />
      </g>
      <g filter="url(#filter2_di_17_669)">
        <line
          x1={14}
          y1={174}
          x2={174}
          y2={14}
          strokeLinecap="round"
          stroke="#8DEFEE"
          strokeWidth={3}
          clipPath="url(#clip)"
        />
        <clipPath id="clip">
          <rect
            width="70%"
            height="100%"
            transform={`rotate(-45) scale(${level / 100})`}
            style={{
              transformOrigin: 'left center',
              transformBox: 'view-box',
              transition: 'all .3s easy',
            }}
          />
        </clipPath>
      </g>
      <LevelInfo value={1} />
      <Defs />
    </svg>
  )
}
