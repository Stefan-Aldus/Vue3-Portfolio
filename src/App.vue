<script setup lang="ts">
// Imports
import { defineProps, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavigationLink from './components/NavigationLink.vue'
</script>

<template>
  <div
    class="app min-h-screen h-full w-full min-w-screen max-w-screen flex flex-col justify-between bg-purple-300"
  >
    <nav class="bg-indigo-100 p-4 shadow-md">
      <!-- Navigation links -->
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/more-info">Personal Info</NavigationLink>
      <NavigationLink to="/contact">Contact Form</NavigationLink>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
/* Scoped Styles */
</style>
