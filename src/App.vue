<template>
  <div class="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">Save The Icecaps Inc!</b-navbar-brand>
    </b-navbar>

    <div class="center">
      <Form v-if="showForm" />
      <b-button v-else :pressed.sync="showForm" size="lg" variant="danger"
        >Sign Me Up!</b-button
      >
    </div>
    <!-- <a
      href="https://www.vectorstock.com/royalty-free-vector/winter-animal-frame-design-with-polar-bear-vector-31101443"
      >Vector image by VectorStock / vectorstock</a
    > -->
  </div>
</template>

<script>
import Form from './components/Form.vue'
export default {
  name: 'App',
  data () {
    return {
      showForm: true
    }
  },
  components: {
    Form
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  font-family: "Google Sans Display", "Google Sans", "Roboto", "Arial", sans-s;
  background: url("./assets/polar.svg") no-repeat fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
}
.app {
  height: 100vh;
  .center {
    /* Center vertically and horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  }
}
</style>
