import { ComponentRender } from '@/shared/lib/tests/ComponentRender'
import { screen } from '@testing-library/react'
import { Navigation } from './navigation'

describe('Navigation', () => {
  test('test render', () => {
    ComponentRender(<Navigation />)

    const navigationElement = screen.getByTestId('navigation-main')
    expect(navigationElement).toBeInTheDocument()
  })

  test('has new game title', () => {
    ComponentRender(<Navigation />)

    const newGameLink = screen.getByText('Новая игра')
    expect(newGameLink).toBeInTheDocument()
  })

  test('has leaders title', () => {
    ComponentRender(<Navigation />)

    const leadersLink = screen.getByText('Лидеры')
    expect(leadersLink).toBeInTheDocument()
  })

  test('has forum title', () => {
    ComponentRender(<Navigation />)

    const forumLink = screen.getByText('Форум')
    expect(forumLink).toBeInTheDocument()
  })
})
