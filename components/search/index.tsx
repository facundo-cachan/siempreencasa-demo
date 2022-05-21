import { ChangeEvent, useState } from 'react'
import Icon from '../icon'
import { Button, Form, Input } from './styled'

type SearchBarProps = {
  placeholder?: string
  action: (e: string) => void
}
const SearchBar = ({ placeholder, action }: SearchBarProps) => {
  const [input, setInput] = useState<string>('')
  const [barOpened, setBarOpened] = useState<boolean>(false)

  const onFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setInput('')
    setBarOpened(false)
    action(input)
  }

  return (
    <Form
      barOpened={barOpened}
      onClick={() => {
        setBarOpened(true)
      }}
      onFocus={() => {
        setBarOpened(true)
      }}
      onBlur={() => {
        setBarOpened(false)
      }}
      onSubmit={onFormSubmit}
    >
      <Button type="submit" barOpened={barOpened}>
        <Icon icon="magnifying-glass" badge={undefined} className={undefined} />
      </Button>
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        value={input}
        barOpened={barOpened}
        placeholder={placeholder}
      />
    </Form>
  )
}

export default SearchBar
