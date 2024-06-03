<template>
  <div class="flex h-1/2 w-1/2 ml-4">
    <button
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <span class="mdi mdi-information"></span>
    </button>
    <div v-if="showTooltip" class="bg-blue-500 text-white p-2 rounded ml-16 absolute">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup() {
    const showTooltip = ref(false)

    return {
      showTooltip
    }
  }
})
</script>
