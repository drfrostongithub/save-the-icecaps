import { shallowMount } from '@vue/test-utils'
import Form from '@/components/Form.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Form)
})

afterEach(() => {
  wrapper.destroy()
})

describe('Form.vue', () => {
  describe('Check the VDOM Render', () => {
    it('Does the Form Component Mounted Properly?', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Check the Functional', () => {
    it('Does the form return confirmation if requirement right?', async () => {
      const submitFormBtn = wrapper.find('.submitForm')

      await wrapper.setData({
        form: {
          name: 'test',
          address: 'test',
          donateAmount: 1
        },
        status: true
      })
      await submitFormBtn.trigger('click')
      expect(wrapper.vm.showConfirm).toBe(true)
      expect(wrapper.vm.showAlert).toBe(false)
    })

    it('Does the form return confirmation if requirement wrong?', async () => {
      const submitFormBtn = wrapper.find('.submitForm')

      await wrapper.setData({
        form: {
          name: '',
          address: '',
          donateAmount: 0
        },
        status: false
      })
      await submitFormBtn.trigger('click')
      expect(wrapper.vm.showConfirm).toBe(false)
      expect(wrapper.vm.showAlert).toBe(true)
    })

    it('Emit close form if clicked on x', () => {
      const closeFormBtn = wrapper.find('#x')

      closeFormBtn.trigger('click')

      expect(wrapper.emitted('close')[0][0]).toBeFalsy()
    })
  })
})
