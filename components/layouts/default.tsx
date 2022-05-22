/**
 * `Layout Page Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import { useEffect, useState } from 'react'
import type { LayoutProps } from '.'
import { Container } from './styled'

const Layout = ({ children }: LayoutProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return !isMounted ? <div>Loading ...</div> : <Container>{children}</Container>
}
export default Layout
