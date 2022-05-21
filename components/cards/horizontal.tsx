import { CardType } from '.'
import { Img, Buttons } from 'components'
import uuid from 'utils/uuid'
import { HorizontalCard, HorizontalLine, HorizontalImg } from './styled'

const Horizontal = ({
  name,
  description,
  image_url,
  clickBtnPrimary,
  clickBtnSecondary,
}: CardType) => (
  <HorizontalCard key={uuid()}>
    <div style={{ display: 'flex' }}>
      <HorizontalImg>
        <Img src={image_url} />
      </HorizontalImg>
      <HorizontalLine>
        {description}
        <br />
        {name}
        {clickBtnPrimary && (
          <>
            <br />
            <Buttons.Default text="Add" action={clickBtnPrimary}>
              Add
            </Buttons.Default>
          </>
        )}
        {clickBtnSecondary && (
          <>
            <br />
            <Buttons.Default text="Remove" action={clickBtnSecondary}>
              Add
            </Buttons.Default>
          </>
        )}
      </HorizontalLine>
    </div>
  </HorizontalCard>
)

export default Horizontal
