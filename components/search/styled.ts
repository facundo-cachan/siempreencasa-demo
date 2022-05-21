import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  width: ${({ barOpened }: { barOpened: boolean }) =>
    barOpened ? '30rem' : '1rem'};
  cursor: ${({ barOpened }: { barOpened: boolean }) =>
    barOpened ? 'auto' : 'pointer'};
  padding: 1rem;
  height: 1rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${({ barOpened }: { barOpened: boolean }) =>
    barOpened ? '1rem' : '0rem'};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`

export const Button = styled.button`
  line-height: 1;
  pointer-events: ${({ barOpened }: { barOpened: boolean }) =>
    barOpened ? 'auto' : 'none'};
  cursor: ${({ barOpened }: { barOpened: boolean }) =>
    barOpened ? 'pointer' : 'none'};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`
