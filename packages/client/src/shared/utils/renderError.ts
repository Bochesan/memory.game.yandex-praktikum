import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

export function renderError(
  error: FetchBaseQueryError | SerializedError
): React.ReactNode {
  if ('status' in error) {
    return `Status: ${error.status}, Data: ${JSON.stringify(error.data)}`
  } else {
    return error.message
  }
}
