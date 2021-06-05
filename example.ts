import pawx from './store'

const store = pawx({
  state: {
    count: 0,
    myNameIs: 'Paw'
  },
  mutations: {
    sum: (state, amount: number) => (state.count += amount),
    changeName: (state, newName: string) => (state.myNameIs = newName)
  },
  actions: {
    makeSum: ({ mutate, deliver }) => mutate('sum', 10),
    makeChangeName: ({ mutate }) => mutate('changeName', 'Leonardox')
  }
})

console.log(store.state)
store.mutate('changeName', 'Carlos')
store.deliver('makeSum', 'asd')
console.log(store.state)

export default store
