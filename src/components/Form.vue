<template>
  <div class="form">
    <b-button id=x @click="$emit('close', false)"/>
    <b-form @submit="onSubmit" @reset="onReset">

      <label for="input-live">Name:</label>
      <b-form-input
        id="input-live"
        v-model="form.name"
        :state="state.nameState"
        aria-describedby="input-live-feedback"
        placeholder="Enter Your full name."
        trim
        required
      />

      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="input-live-feedback">
        Enter Name Correctly
      </b-form-invalid-feedback>

      <label for="input-live">Address:</label>
      <b-form-input
        id="input-live"
        v-model="form.address"
        :state="state.addressState"
        aria-describedby="input-live-feedback"
        placeholder="Enter Address"
        required
      />

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        name: '',
        address: ''
      },
      state: {
        nameState: null,
        addressState: null
      }
    }
  },
  watch: {
    'form.name': function (newState, oldState) {
      if (this.form.name.length > 0) {
        this.state.nameState = true
      } else {
        this.state.nameState = false
      }
    },
    'form.address': function (newState, oldState) {
      if (this.form.address.length > 0) {
        this.state.addressState = true
      } else {
        this.state.addressState = false
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert('You`re Submitted')
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.setNullState(this.state)
      this.setEmpty(this.form)
    },
    setEmpty (form) {
      // Get All keys in an object
      const keys = Object.keys(form)
      // Loop all keys
      for (const key of keys) {
        if (typeof form[key] !== 'object') {
          form[key] = ''
        } else {
          this.setEmpty(form[key])
        }
      }
      return form
    },
    setNullState (state) {
      // Get All keys in an object
      const keys = Object.keys(state)
      // Loop all keys
      for (const key of keys) {
        if (typeof state[key] !== 'object') {
          state[key] = null
        } else {
          this.setEmpty(state[key])
        }
      }
      return state
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  /* Change autocomplete styles in WebKit */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid green;
    -webkit-text-fill-color: green;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  // Glassify
  box-shadow: 0 0 5px 0;
  backdrop-filter: blur(10px);

  // background-color: $bg;
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 50px ;
  margin: auto;
  overflow: hidden;

  justify-content: center;
  align-items: center;
}

#x{
    width:40px;
    height:40px;
    background-color:red;
    position: absolute;
    top: 0;
    right: 0;
    border-radius:6px;
    border: white;
    box-shadow:2px 2px 4px 0 white;
    float: right;
}

#x:before,#x:after{
    content:'';
    position:absolute;
    width:36px;
    height:4px;
    background-color:white;
    border-radius:2px;
    top:16px;
    box-shadow:0 0 2px 0 #ccc;
}

#x:before{
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    transform:rotate(45deg);
    left:2px;
}
#x:after{
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    transform:rotate(-45deg);
    right:2px;
}
</style>
