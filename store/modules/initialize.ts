import { Store } from '../types'

const initialize = <T, M, A>(initialState: Store<T, M, A>) => {
  const defaultStore = {
    state: {},
    mutations: {},
    actions: {}
  }

  const initializedStore = {
    ...defaultStore,
    ...initialState
  }

  return initializedStore
}

export { initialize }
