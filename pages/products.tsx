/**
 * Page Products
 * @param {object} products - Array of products.
 * @returns Page Products
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
import { device } from 'utils/responsive'

export type IndexProps = {
  products: Product[]
}

const Main = styled.main<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
  width: 100vw;
  min-width: 100vw;
`;
const CardsWrapper = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  @media screen and ${device.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const CardItem = styled.li`
  @media screen and ${device.desktop} {
    padding: 1rem;
  }
`;
const Search = styled.div`
  text-align: -webkit-center;
  padding-top: '2rem';
`;

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
  const closeModal = () => {
    setShowModal(!showModal);
    setRecommended([])
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
            </CardsWrapper>
          )}
        </Main>
      </Layout>
      <Modals.Default
        title="Recomendados"
        onClose={closeModal}
        show={Boolean(recommended) && showModal}
      >
        {recommended.map((recommend: Partial<Product>) => (
          <Cards.Horizontal
            key={uuid()}
            height="12vh"
            img={90}
            fontSize="80%"
            title={recommend?.name}
            {...recommend}
            clickBtnPrimary={() => add(recommend?.product_id)}
          />
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
