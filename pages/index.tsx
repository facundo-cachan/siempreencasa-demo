/**
 * Page Index
 * @returns Page Home
 */

import type { NextPage } from 'next'
import Image from 'next/image'
import { ClientSafeProvider, getProviders } from 'next-auth/react'
import axios from 'axios'

import { NavBar, Cards } from 'components/'
import uuid from 'utils/uuid'
import type { Product } from 'lib/interfaces'

import styles from '../styles/Home.module.css'

export type IndexProps = {
  products: Product[]
  providers: ClientSafeProvider
}

const Home: NextPage<IndexProps> = ({ providers, products }: IndexProps) => {
  const recommendations = async (id: string) => {
    const {
      data: {
        0: { recommendations },
      },
    } = await axios(`${process.env.NEXT_PUBLIC_URL}/api/recommendations/${id}`)
    console.log(recommendations)
  }

  return (
    <>
      <NavBar providers={providers} />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {products &&
              products.map(
                ({
                  name,
                  description,
                  image_url,
                  categories,
                  price_per_litre,
                  product_id,
                }) => (
                  <Cards.Default
                    key={uuid()}
                    title={name}
                    description={description}
                    image_url={image_url}
                    hashtgs={categories}
                    price={price_per_litre}
                    onClicked={() => recommendations(product_id)}
                  />
                )
              )}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { data }: Product = await axios(
    `${process.env.NEXT_PUBLIC_URL}/api/products`
  )
  return {
    props: {
      providers: await getProviders(),
      products: data,
    },
  }
}

export default Home
