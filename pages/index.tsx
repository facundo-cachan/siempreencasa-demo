/**
 * Page Index
 * @returns Page Home
 */

import type { NextPage } from 'next'

import { Layout } from 'components'

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <h1>Welcome</h1>
      </main>
    </Layout>
  )
}

export default Home
