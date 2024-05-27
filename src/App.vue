<script setup lang="ts">
// Imports
import { defineProps, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app h-screen w-full flex flex-col justify-between bg-red-200">
    <nav>
      <!-- Navigation links -->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- ... -->
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
/* Scoped Styles */
</style>
