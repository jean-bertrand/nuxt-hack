import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      counter: 'BarBacker'
    },
  })
}

export default store