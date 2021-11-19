import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Form from '@/components/Form.vue'

describe('App.vue', () => {
  const wrapper = mount(App)

  it('Does the App Mounted Properly?', () => {
    expect(wrapper.exists()).toBe(true)
  })
})

describe('Form.vue', () => {
  const wrapper = mount(Form)

  it('Does the Form Component Mounted Properly?', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
