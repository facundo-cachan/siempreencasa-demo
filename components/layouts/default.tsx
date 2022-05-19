/**
 * Layout - Page Container
 * @param children ChildrenNode
 * @returns Page Container
 */

import { LayoutProps } from '.'

const WideScreen = ({ children }: LayoutProps) => {
  return (
    <>
      <script defer id="modal" nonce="XUENAJFW" src="/js/modal.js" />
      <div className="container is-fluid">{children}</div>
    </>
  )
}

export default WideScreen
