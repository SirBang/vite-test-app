import { createStore } from 'vuex';

export default createStore({
  state: {
    modal:false,
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
    },
    setModal(state, value) {
      state.modal = value;
    }
  },
  actions: {
    setData(context, payload) {
      console.log(payload);
      context.commit('setData', payload);
    },
    updateModal(context, value) {
      context.commit('setModal', value);
    }
  },
  getters: {
    getData(state) {
      return state.data;
    },
    getModal(state) {
      return state.modal;
    },
  },
});