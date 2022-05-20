import {
  Context,
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from 'react'
import { reducer } from 'context/reducer'

type ProviderType = {
  children: ReactNode
}

export const AppContext: Context<any> = createContext<any>(null)

export const AppProvider = ({ children }: ProviderType) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    console.error('Error deploying App Context!!!')
  }
  return context
}

export default useAppContext
