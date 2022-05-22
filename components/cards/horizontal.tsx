import { CardType } from '.'
import { Img, Buttons } from 'components'

import {
  CardHorizontal,
  CardImage,
  CardContentHorizontal,
  CardTitle,
  CardButtons
} from './styled'

const Default = ({
  name,
  img,
  fontSize,
  image_url,
  price_per_litre,
  clickOnImage,
  clickBtnPrimary,
  clickBtnSecondary,
}: CardType) => (
  <CardHorizontal>
    {image_url && (
      <CardImage onClick={clickOnImage}>
        <Img src={image_url} alt={name} sizes={[img || 150]} />
      </CardImage>
    )}
    <CardContentHorizontal>
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

    </CardContentHorizontal>
  </CardHorizontal>
)

export default Default
