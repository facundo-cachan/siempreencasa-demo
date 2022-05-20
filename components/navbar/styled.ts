import styled, { StyledComponent } from 'styled-components'

export const NavbarContainer: StyledComponent<
  'nav',
  any,
  {},
  never
> = styled.nav`
  height: ${({ extendNavbar }: { extendNavbar: boolean }) =>
    extendNavbar ? '30px' : '50px'};
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: teal;
  justify-content: space-between;
`

export const NavbarInnerContainer = styled.div`
  gap: 1em;
  display: flex;
`

export const LogoImg = styled.div``

export const NavbarLinkContainer = styled.div`
  margin-right: 20%;
`

export const NavbarStyledLink = styled.a`
  color: #fff;
  padding: 5px;
  margin-right: 10px;
`

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`
