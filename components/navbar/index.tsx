import Link from 'next/link'
import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

import useAppContext from 'context/app'
import uuid from 'utils/uuid'
import { Icon, Img, Buttons, Modals } from 'components/'
import {
  NavbarContainer,
  LogoImg,
  NavbarLinkContainer,
  NavbarStyledLink,
  OpenLinksButton,
} from './styled'

type Item = {
  name: string
  icon?: string
  href: string
}

type NavbarProps = {
  providers: string
}

const ALink = ({ href, name }: Item) => (
  <Link href={href} passHref>
    <NavbarStyledLink>{name}</NavbarStyledLink>
  </Link>
)

const Logo = () => (
  <LogoImg>
    <Img
      src={`${process.env.NEXT_PUBLIC_URL}/img/new_logo-black.svg`}
      alt="Siempre En Casa - Logo"
      sizes={[80, 130]}
    />
  </LogoImg>
)

const NavBar = ({ providers }: NavbarProps) => {
  const { state } = useAppContext()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { data: session } = useSession()

  return (
    <>
      <NavbarContainer extendNavbar={showMenu}>
        <Logo />
        <NavbarLinkContainer>
          <ALink href="/" name="Home" />
          <ALink href="/products" name="Products" />
          {session && (
            <NavbarStyledLink onClick={() => signOut()}>
              Log out
            </NavbarStyledLink>
          )}
          {!session &&
            providers &&
            Object.values(providers).map(({ id, name }: any) => (
              <Buttons.Default
                key={uuid()}
                text={name}
                onClick={() => signIn(id)}
              />
            ))}
          <OpenLinksButton
            onClick={() => {
              setShowMenu((curr) => !curr)
            }}
          >
            {showMenu ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
          <NavbarStyledLink onClick={() => setShowModal(!showModal)}>
            <Icon icon="cart-shopping" badge={state?.length || 0} />
          </NavbarStyledLink>
        </NavbarLinkContainer>
      </NavbarContainer>
      <Modals.Cart
        title="A comprar"
        show={showModal}
        onClose={() => setShowModal(!showModal)}
      />
    </>
  )
}

export default NavBar
