import Vuex from 'vuex'

const store = () => {
  const today = new Date();
  const year = today.getFullYear();
  return new Vuex.Store({
    state: {
      counter: 'BarBacker',
      bgImage: 'http://i.imgur.com/Bplxu8k.jpg',
      year: year
    },
  })
}
``
export default store