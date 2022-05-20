import { Button, ButtonProps } from '.'
const Default = ({ text, onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{text}</Button>
}

export default Default
