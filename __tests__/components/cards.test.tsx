import { render, screen } from '@testing-library/react'

import { Cards } from 'components'

describe('Cards', () => {
  test('Default exists and name is visible', async () => {
    const name = 'Default Card'
    const er = new RegExp(name, 'i')
    render(
      <Cards.Default
        name={name}
        categories={['card', 'testing']}
        description="Its a card test"
        image_url="https://via.placeholder.com/300/09f/fff.png"
        price_per_litre="300"
      />
    )
    expect(screen.getByText(er)).toBeInTheDocument()
    expect(screen.getByText(er)).toBeVisible()
  })
  test('Horizontal exists and name is visible', async () => {
    const name = 'Horizontal Card'
    const er = new RegExp(name, 'i')
    render(
      <Cards.Horizontal
        name={name}
        categories={['card', 'testing']}
        description="Its a card test"
        image_url="https://via.placeholder.com/300/09f/fff.png"
        price_per_litre="300"
      />
    )
    expect(screen.getByText(er)).toBeInTheDocument()
    expect(screen.getByText(er)).toBeVisible()
  })
})
