import { LeaderBoardItemType } from './types'

class LeaderBoardList {
  // requestData = (cb: () => void, errorCb = () => {}) => {
  //   return fetch(url, { method: 'GET' })
  //     .then(response => response.json())
  //     .then(cb)
  //     .catch(errorCb)
  // }

  requestData = (cb: (data: LeaderBoardItemType[]) => void) => {
    const data = [
      {
        place: 1,
        avatar: 'ava.jpeg',
        nickname: 'FaryaAndWoIyo',
        firstname: 'Иван',
        score: 9845,
      },
      {
        place: 2,
        avatar: 'ava.jpeg',
        nickname: 'Gorilla',
        firstname: 'Василий',
        score: 9245,
      },
      {
        place: 3,
        avatar: 'ava.jpeg',
        nickname: 'OskarAizek',
        firstname: 'Джейсон',
        score: 8645,
      },
      {
        place: 4,
        avatar: 'ava.jpeg',
        nickname: 'Andriano_Chill',
        firstname: 'Василий',
        score: 8235,
      },
      {
        place: 5,
        avatar: 'ava.jpeg',
        nickname: 'Mark_Eolberg_9',
        firstname: 'Мей',
        score: 7976,
      },
      {
        place: 6,
        avatar: 'ava.jpeg',
        nickname: 'KostaKatch',
        firstname: 'Александр',
        score: 7566,
      },
      {
        place: 7,
        avatar: 'ava.jpeg',
        nickname: 'Zena',
        firstname: 'Антон',
        score: 7124,
      },
      {
        place: 8,
        avatar: 'ava.jpeg',
        nickname: 'KingKong',
        firstname: 'Катя',
        score: 6343,
      },
      {
        place: 9,
        avatar: 'ava.jpeg',
        nickname: 'Spilber345',
        firstname: 'Инга',
        score: 5445,
      },
    ]
    cb(data)
  }
}

export const leaderBoardList = new LeaderBoardList()
