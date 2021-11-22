<template>
  <div class="app">
    <BNavbar class="navbar" type="dark" variant="dark">
      <BNavbarBrand href="#" class="navbar_title">Save The Icecaps Inc!</BNavbarBrand>
    </BNavbar>

    <div class="center">
      <Form v-if="showForm" @close='closeBox'/>
      <BButton class="showForm" v-else @click="showForm = true" size="lg" variant="danger"
        >Sign Me Up!</BButton
      >
    </div>

    <BModal v-model="cookieConsent" class="cookie-consent" hide-footer centered title="Cookie Consent">
      <div>
        <p>We use our own and third-party cookies to show you more relevant content based on your browsing and navigation history.
          In compliance with the GDPR Guide, please accept or manage your cookie settings below.</p>
      </div>
      <div class="button_group" style="display:flex; justify-content: space-evenly;">
        <BButton class="accept" block variant="outline-success" @click="cookieConsent = false">Accept</BButton>
        <BButton class="manage" block variant="info" disabled>Manage My Cookie</BButton>
      </div>
    </BModal>

    <a class='fixed-bottom'
      href="https://www.vectorstock.com/royalty-free-vector/winter-animal-frame-design-with-polar-bear-vector-31101443"
      >Designed by vectorstock (Image #31101443 at VectorStock.com)</a
    >
  </div>
</template>

<script>
import Form from './components/Form.vue'
import { BNavbar, BNavbarBrand, BButton, BModal } from 'bootstrap-vue'

export default {
  name: 'App',
  data () {
    return {
      showForm: false,
      cookieConsent: true
    }
  },
  components: {
    Form,
    BNavbar,
    BNavbarBrand,
    BButton,
    BModal
  },
  methods: {
    closeBox (input) {
      this.showForm = input
    }
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

  .navbar_title {
  display: flex;
  margin: auto;
  }

}
</style>
