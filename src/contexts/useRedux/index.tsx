import React, { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from '@store/store';

type ReduxProviderProps = {
  children : ReactNode
}

export const ReduxProvider:FC<ReduxProviderProps> = ({children}) => {
  return (
    <Provider store={store}>{children }</Provider>
  )
}