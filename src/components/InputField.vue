<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      v-model="modelValue"
      :class="variantClasses"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputField',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantClasses() {
      return this.required ? 'border-red-500' : ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return {
      modelValue: props.modelValue
    }
  },
  watch: {
    modelValue(newValue) {
      emit('update:modelValue', newValue)
    }
  }
})
</script>
