import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from './error-boundary'
import '@testing-library/jest-dom'

describe('Error Boundary', () => {
  const ThrowError = () => {
    throw new Error('')
  }

  test('Error Boundary', () => {
    render(
      <ErrorBoundary fallback={<h2>Произошла ошибка</h2>}>
        <ThrowError />
      </ErrorBoundary>
    )
    const element = screen.getByText('Произошла ошибка')

    expect(element).toBeVisible()
  })
})
