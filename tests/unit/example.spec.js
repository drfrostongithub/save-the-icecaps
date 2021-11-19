import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Form from '@/components/Form.vue'

describe('App.vue', () => {
  const wrapper = shallowMount(App)

  it('Does the App Mounted Properly?', () => {
    expect(wrapper.exists()).toBe(true)
  })
})

describe('Form.vue', () => {
  const wrapper = shallowMount(Form)

  it('Does the Form Mounted Properly?', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
