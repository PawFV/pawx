export interface Store<S, M, A> {
  state: S
  mutations: M & Mutations<S>
  actions: A & Actions<Mutations<S>>
  mutate?: Mutate<M>
  deliver?: Deliver<A>
}

export interface Mutations<S> {
  [key: string]: (state: S, payload) => void
}

export interface Actions<M> {
  [key: string]: (options: ActionOptions<M>, payload) => void
}

type ActionOptions<T> = {
  mutate: Mutate<T>
  deliver: Deliver<T>
}

type Deliver<A> = (action: keyof A, payload) => Promise<any>
type Mutate<M> = (mutation: keyof M, payload) => void
