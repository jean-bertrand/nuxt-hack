import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      counter: 'BarBacker',
      bgImage: 'http://i.imgur.com/Bplxu8k.jpg',
    },
  })
}

export default store