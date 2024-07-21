export const enum METHODS {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

export const enum ROUTE {
  Main = '/',
  Auth = '/sing-in',
  Register = '/sing-up',
}

export const enum API {
  Base = 'https://ya-praktikum.tech/api/v2',
  Internal = 'http://localhost:3001/api',
}

export const enum OAUTH {
  ServiceId = '/oauth/yandex/service-id',
  Yandex = '/oauth/yandex',
  Redirect = 'http://localhost:3000',
}

export const enum CODE_STATUS {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

export const enum IDENTIFIER {
  TeamName = 'PrecisionStrikeSquad',
  LeaderboardRatingFieldName = 'scorePSS',
}

export enum RESOURCES {
  Images = 'https://ya-praktikum.tech/api/v2/resources',
}
