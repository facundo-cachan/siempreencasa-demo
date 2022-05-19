import { Context, createContext, ReactNode, useContext, useState } from 'react'
import { ModalType } from 'components/modal'

type ProviderType = {
  children: ReactNode
}

export const AppContext: Context<any> = createContext<any>(null)

export const AppProvider = ({ children }: ProviderType) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [submitModalPrimaryBtn, setSubmitModalPrimary] =
    useState<boolean>(true)
  const [modalPrimary, setModalPrimary] = useState<ModalType>({
    title: 'Title',
    btnPrimary: 'Primary Button',
  })

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        modalPrimary,
        setModalPrimary,
        submitModalPrimaryBtn,
        setSubmitModalPrimary,
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