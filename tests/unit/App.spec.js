import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(App)
})

afterEach(() => {
  wrapper.destroy()
})

describe('App.vue', () => {
  describe('Check the VDOM Render', () => {
    it('Does the App Mounted Properly?', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('Render cookie consent on App', () => {
      expect(wrapper.find('.cookie-consent').exists()).toBe(true)
    })

    it('Render navbar on top', () => {
      expect(wrapper.find('.navbar').exists()).toBe(true)
    })

    // Style on test can only works on inline style only
    // it('Body have Background image', () => {
    //   const body = wrapper.find('.app')
    //   console.log(body)
    //   const bodyStyle = body.style.getPropertyValue('height')
    //   expect(bodyStyle.exists(true))
    // })
  })

  // Functional
  describe('Check the Functional', () => {
    it('Accept on cookie consent close the modal state', () => {
      const acceptCookieBtn = wrapper.find('.accept')
      acceptCookieBtn.trigger('click')
      expect(wrapper.vm.cookieConsent).toBe(false)
    })

    it('Sign me up button change the form state', () => {
      const showFormBtn = wrapper.find('.showForm')
      showFormBtn.trigger('click')
      expect(wrapper.vm.showForm).toBe(true)
    })
  })
})
