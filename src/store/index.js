import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        first_name: "Donalt",
        last_name: "Ralling",
        email: "dralling0@paginegialle.it",
        gender: "Male",
        ip_address: "173.68.122.24"
      },
      {
        id: 2,
        first_name: "Maren",
        last_name: "Quan",
        email: "mquan1@unc.edu",
        gender: "Female",
        ip_address: "85.49.14.181"
      },
      {
        id: 3,
        first_name: "Janos",
        last_name: "Budnk",
        email: "jbudnk2@example.com",
        gender: "Male",
        ip_address: "210.14.247.164"
      }
    ],
    animals: [
      { id: 1, name: "cachorro", age: "31" },
      { id: 2, name: "coelho", age: "32" },
      { id: 3, name: "leao", age: "33" },
      { id: 4, name: "leao elefante", age: "14" }
    ],
    clients: [
      { id: 1, name: "Felipe Muner 1", age: "31" },
      { id: 2, name: "Felipe Muner 2", age: "32" },
      { id: 3, name: "Felipe Muner 3", age: "33" }
    ],
    products: [
      { id: 1, name: "Banana Skin", price: 20 },
      { id: 2, name: "Shiny Star", price: 40 },
      { id: 3, name: "Green Shells", price: 60 },
      { id: 4, name: "Red Shells", price: 80 }
    ]
  },
  getters: {
    getProducts: state => {
      return state.products;
    },
    getClients: state => {
      return state.clients;
    },
    getUsers: state => {
      return state.users;
    },
    getAnimals: state => {
      return state.animals;
    }
  },
  mutations: {
    SAVE_USERS(state, users) {
      state.users = users;
    },
    SET_CLIENTS: (state, payload) => {
      state.clients = payload;
    }
  },
  actions: {
    async loadUsers({ commit }) {
      const response = await fetch("https://api.myjson.com/bins/l4tgy");
      const clients = await response.json();
      commit("SAVE_USERS", clients);
    },
    async getClients({ commit }) {
      const response = await fetch("https://api.myjson.com/bins/l4tgy");
      const clients = await response.json();
      commit("SET_CLIENTS", clients);
    },
    reducePrice: (context, payload) => {
      setTimeout(function() {
        // reach out for data
        context.commit("reducePrice", payload);
      }, 2000);
    }
  },
  modules: {}
});
