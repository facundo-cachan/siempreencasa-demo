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
import type { Product } from 'lib/interfaces'

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
      sizes={[130, 80]}
    />
  </LogoImg>
)

const NavBar = ({ providers }: NavbarProps) => {
  const { state, dispatch } = useAppContext()
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
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        {state.length > 0 ? (
          state.map(
            ({
              product_id,
              price_per_unit,
              image_url,
              name,
            }: Partial<Product>) => (
              <Modals.StyledModalHeader key={uuid()}>
                <Img src={image_url} />
                <Modals.StyledModalSubTitle>
                  ARS {price_per_unit}
                </Modals.StyledModalSubTitle>
                <Modals.StyledModalDescription>
                  {name}
                </Modals.StyledModalDescription>
                <Buttons.Default
                  text="Remove"
                  action={() =>
                    dispatch({ type: 'remove', payload: product_id })
                  }
                >
                  Add
                </Buttons.Default>
              </Modals.StyledModalHeader>
            )
          )
        ) : (
          <h4>Cart Shop Empty</h4>
        )}
      </Modals.Cart>
    </>
  )
}

export default NavBar
