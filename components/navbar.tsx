import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

import uuid from 'utils/uuid'
import { LoginProps } from 'pages/'
import { Img } from 'components/'

type Item = {
  name: string
  icon?: string
  path: string
}

const NavBar = ({ providers }: LoginProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [items, setItems] = useState<Item[]>([])
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      setItems((prev) => [
        ...prev,
        {
          name: 'My Account',
          icon: '',
          path: 'my-account',
        },
      ])
    }
  }, [session])

  const primaryNavBar = () => setShowMenu(!showMenu)

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Img
          src={`${process.env.NEXT_PUBLIC_URL}/img/new_logo-black.svg`}
          alt="Siempre En Casa - Logo"
          sizes={[150, 100]}
        />
        <a
          role="button"
          className={`navbar-burger${showMenu ? ' is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="primaryNavBar"
          onClick={primaryNavBar}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="primaryNavBar"
        className={`navbar-menu${showMenu ? ' is-active' : ''}`}
      >
        <div className="navbar-start">
          {items.length > 0 &&
            items.map(({ name, path }: Item) => (
              <Link
                key={uuid()}
                href={`${process.env.NEXT_PUBLIC_URL}/${path}`}
              >
                <a className="navbar-item" id={uuid()}>
                  {name}
                </a>
              </Link>
            ))}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {session ? (
                <a className="button is-danger" onClick={() => signOut()}>
                  Log out
                </a>
              ) : (
                <>
                  <button
                    className="button is-primary modal-trigger-primary"
                    data-target="modal-primary"
                  >
                    <strong>Sign up</strong>
                  </button>
                  <a className="button is-success" onClick={() => signIn()}>
                    Log in
                  </a>
                </>
              )}
              {!session &&
                providers &&
                Object.values(providers).map(({ id, name }: any) => (
                  <button
                    key={uuid()}
                    className="button"
                    onClick={() => signIn(id)}
                  >
                    <span className="icon is-small">
                      <i className={`fa-brands fa-${name.toLowerCase()}`}></i>
                    </span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
