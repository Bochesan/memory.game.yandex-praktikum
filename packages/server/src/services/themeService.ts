import { Theme } from '../../models/theme'

interface GetThemeDTO {
  user_id: number
}

interface ActionThemeDTO {
  user_id: number
  theme: string
}

export const getTheme = async (data: GetThemeDTO): Promise<Theme> => {
  const { user_id } = data
  let themeType = await Theme.findOne({
    where: { user_id },
  })

  if (!themeType) {
    themeType = await Theme.create({
      user_id,
    })
  }
  return themeType
}

export const createTheme = async (data: ActionThemeDTO): Promise<Theme> => {
  const { user_id, theme } = data

  const newTheme = await Theme.create({
    theme,
    user_id,
  })

  return newTheme
}

export const updateTheme = async (data: ActionThemeDTO): Promise<void> => {
  const { user_id, theme } = data

  await Theme.update(
    { theme, user_id },
    {
      where: {
        user_id,
      },
    }
  )
}
