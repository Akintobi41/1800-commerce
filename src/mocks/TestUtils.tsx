import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { setupStore } from './mockStore';
import { MemoryRouter } from 'react-router';


export function renderWithProviders(ui, extendedRenderOptions = {}) {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions

  const Wrapper = ({ children }) => (
    <MemoryRouter> <Provider store={store}>{children}</Provider></MemoryRouter>
  )

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  }
}