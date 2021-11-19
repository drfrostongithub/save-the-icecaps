<template>
  <div class="form">
    <BButton id="x" @click="$emit('close', false)" />
    <BForm @submit="onSubmit" @reset="onReset">
      <label>Name:</label>
      <BFormInput
        id="input-live-1"
        v-model="form.name"
        :state="state.nameState"
        aria-describedby="input-live-feedback"
        placeholder="Hello Stranger, enter your name !"
        trim
        required
        autocomplete="off"
      />

      <!-- This will only be shown if the preceding input has an invalid state -->
      <BFormInvalidFeedback id="input-live-feedback">
        Enter Name Correctly
      </BFormInvalidFeedback>

      <label>Address:</label>
      <BFormInput
        id="input-live-2"
        v-model="form.address"
        :state="state.addressState"
        aria-describedby="input-live-feedback"
        placeholder="Where do you live?"
        required
        autocomplete="off"
      />

      <BFormInvalidFeedback id="input-live-feedback">
        Enter Address Correctly
      </BFormInvalidFeedback>

      <label>Donate:</label>
      <BFormInput
        id="input-live-3"
        type="number"
        v-model="form.donateAmount"
        :state="state.donateState"
        aria-describedby="input-2-live-feedback"
        placeholder="In Euro (€)"
        required
        autocomplete="off"
      />

      <BFormInvalidFeedback id="input-2-live-feedback">
        Min 1 Euro
      </BFormInvalidFeedback>

      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" v-model="form.subscribeMonthly">
        <label class="form-check-label" >{{form.subscribeMonthly ? 'Subscribe Monthly (Save More Lives!)' : 'One-Off Purchase'}}</label>
      </div>

      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" v-model="optionalInfo">
        <label class="form-check-label" >Help us become better (Totally up to you to fill these)</label>
      </div>

      <div v-if="optionalInfo">
        <BFormGroup id="input-group-gender" label="Gender:" label-for="input">
          <b-form-select
            v-model="form.gender"
            :options="genders"
          />
        </BFormGroup>

        <BFormGroup id="input-group-date" label="Date of Birth:" label-for="input">
        <BFormInput
          type=date
          v-model="form.date"
          aria-describedby="input-live-feedback"
        />
        </BFormGroup>

        <BFormGroup id="input-group-incomeLevel" label="Income Level:" label-for="input">
        <BFormInput
          v-model="form.incomeLevel"
          aria-describedby="input-live-feedback"
        />
        </BFormGroup>
      </div>

      <BFormCheckbox v-model="status">
        I accept the terms and use
      </BFormCheckbox>
      <BButton type="submit" variant="primary">Submit</BButton>
      <BButton type="reset" variant="danger">Reset</BButton>

      <BModal id="modal-1" centered title="Confirmation Process" hide-footer>
        <div>
          <p>
            We'll ask for your donation of € {{form.donateAmount}} with your
            newsletter expected arrival on {{firstDayOfTheMonth}}
          </p>
          <BButton class="mt-3" variant="outline-danger" block @click="confirm">Confirm</BButton>
        </div>
      </BModal>

      <BAlert v-model="showAlert" variant="danger" dismissible>
        Please check the form again!
      </BAlert>
    </BForm>
  </div>
</template>

<script>
import { BButton, BModal, BAlert, BForm, BFormCheckbox, BFormInput, BFormInvalidFeedback, BFormGroup } from 'bootstrap-vue'

export default {
  data () {
    return {
      form: {
        name: '',
        address: '',
        date: '',
        gender: '',
        incomeLevel: '',
        donateAmount: '',
        subscribeMonthly: true
      },
      state: {
        nameState: null,
        addressState: null,
        donateState: null
      },
      confirmMsg: '',
      status: true,
      optionalInfo: false,
      showAlert: false,
      genders: [{ text: 'Select One', value: null }, 'Man', 'Woman', 'Prefer Not to say']
    }
  },
  components: {
    BButton,
    BModal,
    BAlert,
    BForm,
    BFormCheckbox,
    BFormInput,
    BFormInvalidFeedback,
    BFormGroup
  },
  computed: {
    firstDayOfTheMonth: function () {
      const date = new Date()

      const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1)
      // Format date International (US)
      const formatDate = nextMonth.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
      return formatDate
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
    },
    'form.donateAmount': function (newState, oldState) {
      if (this.form.donateAmount > 0) {
        this.state.donateState = true
      } else {
        this.state.donateState = false
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      if (this.status === true &&
          this.form.name &&
          this.form.address &&
          this.form.donateAmount > 0) {
        this.$bvModal.show('modal-1')
      } else {
        this.showAlert = true
      }
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form and state values
      this.setNullState(this.state)
      this.setEmpty(this.form)
    },
    setEmpty (form) {
      // Need to be DRY, so we use a function
      // Get All keys in an object
      if (form !== null) {
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
      }
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
    },
    confirm () {
      this.confirmMsg = ''
      this.$bvModal.msgBoxOk('Thanks for the support!', {
        title: 'Confirmation',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
        .then(value => {
          this.confirmMsg = value
          this.$bvModal.hide('modal-1')
        })
        .catch(err => {
          // An error occurred
          console.log(err)
        })
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
  padding: 50px;
  margin: auto;
  overflow: hidden;

  justify-content: center;
  align-items: center;
}

#x {
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 6px;
  border: white;
  box-shadow: 2px 2px 4px 0 white;
  float: right;
}

#x:before,
#x:after {
  content: "";
  position: absolute;
  width: 36px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
  top: 16px;
  box-shadow: 0 0 2px 0 #ccc;
}

#x:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 2px;
}
#x:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
  right: 2px;
}
</style>
