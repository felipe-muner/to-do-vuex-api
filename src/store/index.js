import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
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
    }
  },
  mutations: {
    SAVE_USERS(state, users) {
      // users.forEach(u => {
      //   state.users.push(u);
      // });
      state.users = users;
    },
    SET_CLIENTS: (state, payload) => {
      console.log(payload);
      console.log(state);
      state.clients = payload;
      // state.clients.forEach(client => {
      //   client.age++;
      // });
    }
  },
  actions: {
    // loadUsers({ commit }) {
    //   Vue.axios
    //     .get("users")
    //     .then(result => {
    //       commit("SAVE_USERS", result.data);
    //     })
    //     .catch(error => {
    //       throw new Error(`API ${error}`);
    //     });
    // },
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
