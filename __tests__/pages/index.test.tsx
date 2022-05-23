import { render, screen, waitFor } from '@testing-library/react'

import Home from 'pages/index'
import Products from 'pages/products'
import products from '../../public/json/products.json'

const max = products.length
const { name } = products[Math.floor(Math.random() * (max - 0)) + 0]

describe('Pages', () => {
   test('Home page rendered and is visible', () => {
      render(<Home />)
      expect(screen.getByRole('heading', {
         name: /Welcome/i,
      })).toBeInTheDocument()
   })
   test('Products page rendered and message is visible', () => {
      render(<Products products={[]} />)
      expect(screen.getByText('No products')).toBeInTheDocument()
      expect(screen.getByText('No products')).toBeVisible()
   })
   test(`Products page rendered and ${name} is visible in the DOM`, async () => {
      const er = new RegExp(name)
      render(<Products products={products} />)
      waitFor(() => {
         expect(screen.findAllByText(er)).toBeInTheDocument()
         expect(screen.findAllByText(er)).toBeVisible()
      })
   })
})
