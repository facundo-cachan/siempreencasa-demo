import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { Buttons } from 'components'
import uuid from 'utils/uuid'

const Id = uuid()
const name = 'Button'
const accessKey = 'b'
const isColor = 'is-primary'
const isLoading = 'is-loading'
const classes = 'button'

const handleClick = jest.fn()

describe('Buttons', () => {
  test('Default, It exists and responds to the click', async () => {
    render(
      <Buttons.Default
        id={Id}
        arial-label={name}
        datatest-id={Id}
        accessKey={accessKey}
        action={handleClick}
        className={`${isColor} ${isLoading} ${classes}`}
        tabIndex={0}
        title={Id}
        text="Click Me"
        loading
        color="danger"
      />
    )
    fireEvent.click(screen.getByText(/click me/i))
    expect(screen.findByTestId(Id)).toBeTruthy()
    waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(2)
    })
  })
  test('Mask, It exists and responds to the click', async () => {
    render(
      <Buttons.Mask
        id={Id}
        arial-label={name}
        datatest-id={Id}
        accessKey={accessKey}
        action={handleClick}
        className={`${isColor} ${isLoading} ${classes}`}
        tabIndex={0}
        title={Id}
        text="mask btn"
        loading
        color="danger"
      />
    )
    fireEvent.click(screen.getByTestId(Id))
    expect(screen.findByTestId(Id)).toBeTruthy()
    waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
