import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

import uuid from 'utils/uuid'
import { CartShopIcon, Img, Buttons, Icon } from 'components'
import {
  NavBarHeader,
  NavBarLogo,
  NavBarMenu,
  NavBarList,
  NavBarItem,
  NavBarA,
  NavBarMenuMobile,
  NavBarMobileMenu
} from './styled'
import { useState } from 'react'

type NavbarProps = {
  providers: string
}

type Item = {
  name: string
  icon?: string
  href: string
}

const ALink = ({ href, name }: Item) => (
  <Link href={href} passHref>
    <NavBarA>{name}</NavBarA>
  </Link>
)

const NavBar = ({ providers }: NavbarProps) => {
  const { data: session } = useSession()
  const [displayNav, setDisplayNav] = useState<boolean>(false)

  return (
    <>
      <NavBarHeader>
        <NavBarLogo>
          <Img
            src={`${process.env.NEXT_PUBLIC_URL}/img/new_logo-black.svg`}
            alt="Siempre En Casa - Logo"
            sizes={[80, 130]}
          />
        </NavBarLogo>
        <NavBarMenu>
          <NavBarList>
            <CartShopIcon />
            <NavBarItem><ALink href="/" name='Home' /></NavBarItem>
            <NavBarItem><ALink href="/products" name="Products" /></NavBarItem>
            {session && (
              <NavBarA onClick={() => signOut()}>
                Log out
              </NavBarA>
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
          </NavBarList>
        </NavBarMenu>
        <Buttons.Mask action={() => setDisplayNav(!displayNav)} id="menu-btn">
          <Icon icon={`${displayNav ? 'xmark' : 'bars'} fa-2xs`} />
        </Buttons.Mask>
      </NavBarHeader>
      <NavBarMenuMobile className={displayNav ? 'open' : 'close'}>
        <NavBarMobileMenu show={displayNav}>
          <NavBarItem><NavBarA href="/home">Home</NavBarA></NavBarItem>
          <NavBarItem><NavBarA href="/products">Products</NavBarA></NavBarItem>
          <NavBarItem><NavBarA href="/about">About</NavBarA></NavBarItem>
        </NavBarMobileMenu>
      </NavBarMenuMobile>
    </>
  )
}

export default NavBar
