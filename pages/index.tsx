/**
 * Page Index
 * @returns Page Home
 */

import type { NextPage } from 'next'
import Image from 'next/image'

import WideScreen from 'components/layouts/default'

const Home: NextPage = () => {
  return (
    <WideScreen>
      <main></main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </WideScreen>
  )
}

export default Home
