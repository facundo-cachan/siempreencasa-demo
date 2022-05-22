import styled from 'styled-components'
import { device } from 'utils/responsive'

export const Card = styled.div<{ backgroundColor?: string, height?: number }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "image container"
    "footer footer";
  @media screen and ${device.desktop} {
    height: ${({ height }) =>
    height ? height : '40vh'};
  }
  @media screen and ${device.laptop} {
    background-color: purple;
  }
  @media screen and ${device.mobileM} {
    font-size: 1.8rem;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "image container"
  }
`
export const CardImage = styled.div`
  grid-area: image;
  @media screen and ${device.desktop} {
    width: 100%;
  }
`
export const CardContent = styled.div`
  grid-area: container;
  @media screen and ${device.desktop} {
    height: 30vh;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "title title title"
      "buttons buttons buttons";
  }
`
export const CardTitle = styled.h2<{ fontSize?: string }>`
  grid-area: title;
  @media screen and ${device.desktop} {
    padding: 5px;
    font-size: ${({ fontSize }) =>
    fontSize ? fontSize : '100%'};
  }
  @media screen and ${device.mobileM} {
    font-size: 50%;
  }
`
export const CardButtons = styled.div`
  grid-area: buttons;
  height: auto;
  @media screen and ${device.desktop} {

  }
`
export const CardText = styled.p`
  @media screen and ${device.desktop} {
    background-color: purple;
    font-size: 0.8rem;
  }
  @media screen and ${device.mobileM} {
    display: none;
  }
`
export const CardCategories = styled.div`
  @media screen and ${device.desktop} {
    grid-area: categories;
  }
  @media screen and ${device.mobileM} {
    display: none;
  }
`
export const CardFooter = styled.footer<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
  grid-area: footer;
  @media screen and ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "description description description"
      "categories categories categories";
  }
  @media screen and ${device.mobileM} {
    background-color: yellow;
  }
`


export const CardHorizontal = styled.div`
  @media screen and ${device.desktop} {
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "image content-horizontal"; 
  }
`
export const CardContentHorizontal = styled.div`
  grid-area: content-horizontal;
  @media screen and ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "title title"
      "buttons buttons"
  }
`