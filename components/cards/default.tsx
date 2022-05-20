import { CardType } from '.'
import { Img, Buttons } from 'components/'
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
      <p>
        {categories.map((tag: string) => (
          <span key={uuid()}>#{tag} </span>
        ))}
      </p>
      <Buttons.Default text="Add" onClick={clickBtnPrimary} />
    </CardFooter>
  </Card>
)

export default Default
