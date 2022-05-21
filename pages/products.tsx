/**
 * Page Index
 * @returns Page Home
 */

import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import styled from 'styled-components'

import useAppContext from 'context/app'
import Layout from 'components/layouts/default'
import uuid from 'utils/uuid'
import type { Product } from 'lib/interfaces'
import { Cards, Modals, SearchBox } from 'components/'

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
const CardItem = styled.li`
  display: flex;
  padding: 1rem;
  max-width: 15vw;
`
const Search = styled.div`
  text-align: -webkit-center;
  padding-top: '2rem';
`

const Product: NextPage<IndexProps> = ({ products }: IndexProps) => {
  const { state, dispatch } = useAppContext()
  const [recommended, setRecommended] = useState<Product[]>([])
  const [productsFiltered, setProductsFiltered] = useState<Product[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    setProductsFiltered(products)
  }, [products])

  const recommendations = (id: string) => {
    axios(`${process.env.NEXT_PUBLIC_URL}/api/recommendations/${id}`).then(
      ({
        data: {
          0: { recommendations },
        },
      }) => {
        if (recommendations) {
          recommendations.forEach((recommendation: any) => {
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
  const searchProduct = (e: string) => {
    if (e.length > 3) {
      const filtered = productsFiltered.filter((product) => {
        return product.name.toLowerCase().indexOf(e.toLowerCase()) > -1
      })
      setProductsFiltered(filtered)
    } else {
      setProductsFiltered(products)
    }
  }

  return (
    <>
      <Layout>
        <Main backgroundColor="#BBBDBE">
          <Search>
            <SearchBox placeholder="Name of product" action={searchProduct} />
          </Search>
          {productsFiltered.length > 0 && (
            <CardsWrapper>
              <CardsList>
                {productsFiltered.map((product: Product) => {
                  const btnSecondary =
                    state.find(
                      ({ product_id }: Partial<Product>) =>
                        product_id === product?.product_id
                    ) !== undefined
                      ? () =>
                          dispatch({
                            type: 'remove',
                            payload: product?.product_id,
                          })
                      : null
                  return (
                    <CardItem key={uuid()}>
                      <Cards.Default
                        title={product?.name}
                        {...product}
                        clickOnImage={() =>
                          recommendations(product?.product_id)
                        }
                        clickBtnPrimary={() => add(product?.product_id)}
                        clickBtnSecondary={btnSecondary}
                      />
                    </CardItem>
                  )
                })}
              </CardsList>
            </CardsWrapper>
          )}
        </Main>
      </Layout>
      <Modals.Default
        title="Recomendados"
        onClose={() => setShowModal(false)}
        show={Boolean(recommended) && showModal}
      >
        {recommended.map((product: Partial<Product>) => (
          <Cards.Horizontal
            key={uuid()}
            {...product}
            clickBtnPrimary={() => add(product.product_id)}
          />
        ))}
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
