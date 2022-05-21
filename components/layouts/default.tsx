/**
 * `Layout Page Component`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import { useEffect, useState } from 'react'
import type { LayoutProps } from '.'
const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return !isMounted ? <div>Loading ...</div> : children
}
export default Layout
