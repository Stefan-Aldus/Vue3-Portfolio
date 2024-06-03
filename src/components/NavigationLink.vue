<template>
  <router-link class="text-purple-500 hover:text-purple-700 mr-4 hover:underline" :to="to">
    <slot></slot
  ></router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'NavigationLink',
  components: {
    RouterLink
  },
  props: {
    to: {
      type: String,
      required: true
    }
  }
})
</script>
