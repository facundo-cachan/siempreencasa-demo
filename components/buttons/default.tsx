/**
 * `Simple Button Component`.
 * @return {JSX.Element} Button Component.
 */

import { Button } from '.'
import type { ButtonProps } from '.'
import { Icon } from 'components'

const Default = ({
  accessKey,
  action,
  ariaLabel,
  children,
  className,
  color,
  endIcon,
  id,
  loading,
  name,
  startIcon,
  tabIndex,
  text,
  title,
  type,
}: ButtonProps): JSX.Element => {
  const Id = id || `button-${id || name}`
  const Type = type || 'button'
  const isColor = color ? `is-${color}` : 'is-primary'
  const isLoading = loading && 'is-loading'
  const classes = className ? className : ''

  return (
    <Button
      id={Id}
      arial-label={ariaLabel || name}
      datatest-id={id || Id}
      accessKey={accessKey}
      onClick={action}
      className={`button ${isColor} ${isLoading} ${classes}`}
      tabIndex={tabIndex || 0}
      title={title || text || Id}
      type={Type}
    >
      {startIcon && <Icon key={startIcon.key} icon={startIcon.icon} />}
      {text || children}
      {endIcon && <Icon key={endIcon.key} icon={endIcon.icon} />}
    </Button>
  )
}

export default Default
