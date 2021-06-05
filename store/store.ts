import { initialize } from './modules/initialize'
import { Store } from './types'

const pawx = <S, M, A>(initialStore: Store<S, M, A>): Store<S, M, A> => {
  const store = initialize(initialStore)

  const mutate = (mutation, newState) => store.mutations[mutation](store.state, newState)
  const deliver = (action, payload) => store.actions[action]({ mutate, deliver }, payload)

  return { ...store, mutate, deliver } as Store<S, M, A>
}

export default pawx
