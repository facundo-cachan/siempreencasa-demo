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
} from './styled'

const Default = ({
  name,
  categories,
  description,
  image_url,
  price_per_litre,
  clickOnImage,
  clickBtnPrimary,
  clickBtnSecondary,
}: CardType) => (
  <Card>
    {image_url && (
      <CardImage onClick={clickOnImage}>
        <Img src={image_url} alt={name} sizes={[200, 200]} />
      </CardImage>
    )}
    <CardContent>
      {name && (
        <CardTitle>
          {name} | ARS {price_per_litre}$
        </CardTitle>
      )}
      {description && <CardText>{description}</CardText>}
    </CardContent>
    <CardFooter backgroundColor="#99B282">
      {categories && (
        <p>
          {categories.map((tag: string) => (
            <span key={uuid()}>#{tag} </span>
          ))}
        </p>
      )}
      {clickBtnPrimary && (
        <Buttons.Default text="Add" action={clickBtnPrimary} />
      )}
      {typeof clickBtnSecondary === 'function' && (
        <Buttons.Default text="Remove" action={clickBtnSecondary} />
      )}
    </CardFooter>
  </Card>
)

export default Default
