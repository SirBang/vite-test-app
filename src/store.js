import { createStore } from 'vuex';

export default createStore({
  state: {
    data:{
      "brand":null,
      "category":null,
      "description":null,
      "discountPercentage":null,
      "id":null,
      "images":"",
      "price":null,
      "rating":null,
      "stock":null,
      "thumbnail":null,
      "title":null
    }
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    setData(context, payload) {
      context.commit('setData', payload);
    },
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
});