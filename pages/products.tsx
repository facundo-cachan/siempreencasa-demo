/**
 * Page Index
 * @returns Page Home
 */

import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import axios from 'axios'
import styled from 'styled-components'

import useAppContext from 'context/app'
import WideScreen from 'components/layouts/default'
import uuid from 'utils/uuid'
import type { Product } from 'lib/interfaces'
import { Buttons, Cards, Modals, Img } from 'components/'

export type IndexProps = {
  products: Product[]
}

const Main = styled.main<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
  min-width: 100vw;
`
const CardsWrapper = styled.div`
  max-width: 90vw;
  margin: 0 auto;
`
const CardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
`
const CarItem = styled.li`
  display: flex;
  padding: 1rem;
  max-width: 15vw;
`

const Product: NextPage<IndexProps> = ({ products }: IndexProps) => {
  const { dispatch } = useAppContext()
  const [recommended, setRecommended] = useState<Product[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)

  const recommendations = (id: string) => {
    axios(`${process.env.NEXT_PUBLIC_URL}/api/recommendations/${id}`).then(
      ({
        data: {
          0: { recommendations },
        },
      }) => {
        if (recommendations) {
          recommendations.forEach((recommendation) => {
            axios(
              `${process.env.NEXT_PUBLIC_URL}/api/products/${recommendation}`
            ).then(({ data }) => {
              if (data) {
                setRecommended((prev) => [...prev, data])
              }
            })
          })
        }
        setShowModal(!showModal)
      }
    )
  }
  const add = (id: string) => {
    const payload: Partial<Product> = products.find((product: Product) => {
      const { product_id, price_per_unit, name } = product
      if (product_id === id) {
        return {
          product_id,
          price_per_unit,
          name,
        }
      }
    })
    dispatch({ type: 'add', payload })
  }

  return (
    <>
      <WideScreen>
        <Main backgroundColor="#BBBDBE">
          <h3>Products</h3>
          <CardsWrapper>
            <CardsList>
              {products.map((product: Product) => (
                <CarItem key={uuid()}>
                  <Cards.Default
                    title={product?.name}
                    {...product}
                    clickOnImage={() => recommendations(product?.product_id)}
                    clickBtnPrimary={() => add(product?.product_id)}
                  />
                </CarItem>
              ))}
            </CardsList>
          </CardsWrapper>
        </Main>
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </WideScreen>
      <Modals.Default
        title="Recomendados"
        onClose={() => setShowModal(false)}
        show={Boolean(recommended) && showModal}
      >
        {recommended.map(
          ({
            product_id,
            price_per_unit,
            image_url,
            name,
          }: Partial<Product>) => (
            <Modals.StyledModalHeader key={product_id}>
              <Img src={image_url} />
              <Modals.StyledModalSubTitle>
                ARS {price_per_unit}
              </Modals.StyledModalSubTitle>
              <Modals.StyledModalDescription>
                {name}
              </Modals.StyledModalDescription>
              <Buttons.Default text="Add" onClick={() => add(product_id)}>
                Add
              </Buttons.Default>
            </Modals.StyledModalHeader>
          )
        )}
      </Modals.Default>
    </>
  )
}

export async function getServerSideProps() {
  const { data }: Product = await axios(
    `${process.env.NEXT_PUBLIC_URL}/api/products`
  )
  return {
    props: {
      products: data,
    },
  }
}

export default Product
