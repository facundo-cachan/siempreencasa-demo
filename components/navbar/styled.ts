import styled from 'styled-components'
import { device } from 'utils/responsive'
/*
export const NavbarContainer = styled.nav<{ extendNavbar?: boolean }>`
  height: ${({ extendNavbar }) =>
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

export const LogoImg = styled.div`
  @media screen and ${device.mobileM} {
    border-color: red;
  }
`

export const NavbarLinkContainer = styled.div`
  margin-right: 20%;
`

export const NavbarStyledLink = styled.a`
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;
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
/** ============================================== */

export const NavBarHeader = styled.header`
  padding: 0 20px;
  background-color: grey;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavBarLogo = styled.div`
  font-weight: bold;
  font-size: 18px;
`;


export const Nav = styled.nav``;
export const NavBarMenu = styled.div``;


export const NavBarList = styled.ul`
  display: flex;
  align-items: center;
  @media screen and ${device.laptop} {
    list-style: none;
    height: 100%;
    justify-content: space-around;
  }
  @media screen and ${device.mobileL} {
    display: none;
  }
`;
export const NavBarItem = styled.li`
  padding: 5px;
  margin-left: 10px;
`;
export const NavBarA = styled.a`
  color: white;
  text-decoration: none;
  @media screen and ${device.mobileL} {
    font-size: 200%;
  }
`;
export const NavBarMenuMobile = styled.div`
  width: 35px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
  @media screen and ${device.des} {
    display: none;
  }
`;
export const NavBarMobileMenu = styled.ul<{ show: boolean }>`
  background-color: grey;
  ${({ show }) => !show ? 'display: none;' : `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 50px;
    z-index: 9;
    opacity: 0.9;
    left: 0;
    height: calc(100vh - 50px);
    width: 100%;
  `};
`;




/*
export const NavBarIcon = styled.div<{ show: boolean }>`
  margin: auto 0;
  cursor: pointer;
  ${({ show }) => show ? `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  ` : 'display: none'};
`;


*/