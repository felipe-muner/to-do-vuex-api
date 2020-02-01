<template>
  <div>
    <div class="hello">Client</div>
    <ul>
      <li v-for="p in getProducts" v-bind:key="p.id">{{p.name}}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="c in getClients" v-bind:key="c.id">{{c.name}}</li>
    </ul>
    <button v-on:click="loadUsers()">Get Users</button>
    <ul>
      <li v-for="u in getUsers" v-bind:key="u.id">{{u.first_name}}</li>
    </ul>
    <hr />
    <div>
      <h2>Animals</h2>
      {{getAnimals}}
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProducts", "getAnimals", "getUsers"])
    // users() {
    //   return this.$store.state.users;
    // }
  },
  methods: {
    ...mapActions(["getClients", "loadUsers"])
  }
  // created() {
  //   this.$store.dispatch("loadUsers");
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
