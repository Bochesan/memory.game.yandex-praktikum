export type TSetLeaderboard = {
  data: {
    level: number
    scorePSS: number
  }
  ratingFieldName: string
  teamName: string
}

export type TGetLeaderboard = {
  teamName: string
  ratingFieldName: string
  cursor: number
  limit: number
}

export type TLeaderboardItem = {
  data: {
    avatar: string
    nickname: string
    firstname: string
    level: number
    scorePSS: number
  }
}

export type TLeaderBoardItemProps = {
  place: number
  avatar: string
  nickname: string
  firstname: string
  level: number
  scorePSS: number
}
