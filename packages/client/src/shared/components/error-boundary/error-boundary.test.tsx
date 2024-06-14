import { ComponentRender } from '@/shared/lib/tests/ComponentRender'
import { ErrorBoundary } from './error-boundary'
import { screen } from '@testing-library/react'

describe('Error Boundary', () => {
  const ThrowError = () => {
    throw new Error('')
  }

  test('Error Boundary', () => {
    ComponentRender(
      <ErrorBoundary fallback={<h2>Произошла ошибка</h2>}>
        <ThrowError />
      </ErrorBoundary>
    )
    const element = screen.getByText('Произошла ошибка')

    expect(element).toBeVisible()
  })

  test('Error Boundary without error', () => {
    ComponentRender(
      <ErrorBoundary fallback={<h2>Произошла ошибка</h2>}>
        <div>Нет ошибки</div>
      </ErrorBoundary>
    )
    const element = screen.getByText('Нет ошибки')

    expect(element).toBeVisible()
  })
})
