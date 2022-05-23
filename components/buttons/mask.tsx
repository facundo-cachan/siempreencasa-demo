/**
 * `Simple Button Component`.
 * @return {JSX.Element} Button Component.
 */

import { Button } from '.'
import type { ButtonProps } from '.'
import uuid from 'utils/uuid'

const Mask = ({
   id = uuid(),
   accessKey,
   action,
   ariaLabel,
   children,
   name,
   tabIndex,
   title,
}: ButtonProps): JSX.Element => (
   <Button
      id={id}
      data-testid={id}
      arial-label={ariaLabel || name}
      accessKey={accessKey}
      onClick={action}
      tabIndex={tabIndex || 0}
      title={title || id}
   >
      {children}
   </Button>
)

export default Mask
