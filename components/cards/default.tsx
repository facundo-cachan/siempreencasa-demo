import { CardType } from '.'
import { Img, Buttons } from 'components'
import uuid from 'utils/uuid'

import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardText,
  CardFooter,
  CardButtons,
  CardCategories
} from './styled'

const Default = ({
  name,
  height,
  img,
  fontSize,
  categories,
  description,
  image_url,
  price_per_litre,
  clickOnImage,
  clickBtnPrimary,
  clickBtnSecondary,
}: CardType) => (
  <Card height={height}>
    {image_url && (
      <CardImage onClick={clickOnImage}>
        <Img src={image_url} alt={name} sizes={[img || 150]} />
      </CardImage>
    )}
    <CardContent>
      {name && (
        <CardTitle fontSize={fontSize}>
          {name} <br /> ARS {price_per_litre}$
        </CardTitle>
      )}
      <CardButtons>
      {
      clickBtnPrimary && (
        <Buttons.Default text="Add" action={clickBtnPrimary} />
      )}
      {typeof clickBtnSecondary === 'function' && (
        <Buttons.Default text="Remove" action={clickBtnSecondary} />
      )
      }
      </CardButtons>
    </CardContent>
    <CardFooter backgroundColor="#99B282">
    {description && <CardText>{description}</CardText>}
      {categories && (
        <CardCategories>
          {categories.map((tag: string) => (
            <span key={uuid()}>#{tag.replace(" ", "_")} </span>
          ))}
        </CardCategories>
      )}
    </CardFooter>
  </Card>
)

export default Default
