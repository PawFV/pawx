import pawx from './store'

const store = pawx({
  state: {
    count: 0,
    myNameIs: ''
  },
  mutations: {
    sum: (state, amount: number) => (state.count += amount),
    changeName: (state, newName: string) => (state.myNameIs = newName)
  },
  actions: {
    makeSum: ({ mutate, deliver }, by: number) => mutate('sum', by),
    makeChangeName: ({ mutate }, name: string) => mutate('changeName', name)
  }
})

console.log(store.state)
store.mutate('changeName', 'Carlos')
console.log(store.state)
store.deliver('makeSum', 5)
console.log(store.state)

export default store
