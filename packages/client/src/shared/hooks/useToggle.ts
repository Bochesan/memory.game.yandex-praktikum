import { useState } from 'react'

type UseToggleOutput = [boolean, (value?: boolean) => void]

export const useToggle = (initialState = false): UseToggleOutput => {
  const [state, setState] = useState<boolean>(initialState)

  const toggle = (value: boolean | undefined) => {
    if (value !== undefined) {
      setState(value)
    } else {
      setState(prevState => !prevState)
    }
  }

  return [state, toggle]
}
