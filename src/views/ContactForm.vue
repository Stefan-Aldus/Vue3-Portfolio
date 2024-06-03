<template>
  <div class="flex justify-center py-10">
    <div class="bg-purple-200 rounded-lg p-8 max-w-md w-full shadow-lg">
      <div class="flex">
        <h1 class="text-2xl font-bold text-center mb-4">Contact Form</h1>
        <Tooltip text="This form will not be submitted, thanks for your understanding." />
      </div>
      <form @submit.prevent="handleSubmit">
        <InputField
          v-model="formData.name"
          required
          id="name"
          label="Name"
          placeholder="Enter your name"
        />
        <InputField
          required
          v-model="formData.email"
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <InputField
          required
          v-model="formData.subject"
          id="subject"
          label="Subject"
          placeholder="Enter the subject"
        />
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Enter your message"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          ></textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputField from '@/components/InputField.vue'
import Tooltip from '@/components/Tooltip.vue'

export default defineComponent({
  name: 'ContactForm',
  components: {
    InputField,
    Tooltip
  },
  setup() {
    const formData = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const handleSubmit = () => {
      console.log('Form submitted:', formData.value)
      alert('Form submitted! (This form will not actually submit)')
    }

    return {
      formData,
      handleSubmit
    }
  }
})
</script>
