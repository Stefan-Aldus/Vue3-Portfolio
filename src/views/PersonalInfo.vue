<script lang="ts" setup>
import Card from '../components/Card.vue'
</script>

<template>
  <div class="w-full h-screen flex flex-col justify-center">
    <Card
      name="Stefan Aldus"
      quote="The only way to do great work is to love what you do."
      country="The Netherlands"
      :programmingLanguages="[
        'JavaScript - Basics',
        'Vue 3 - intermediate',
        'PHP - intermediate',
        'Laravel - intermediate',
        'Python - Basics',
        'Inertia.js - Basics',
        'MySQL - Basics',
        'CSS - Intermediate',
        'Tailwind CSS - Intermediate',
        'Bootstrap CSS - Basics'
      ]"
      jobTitle="Software Engineer"
      profileImg="https://avatars.githubusercontent.com/u/112871693?v=4"
      :languages="{ English: 'Proficient', Dutch: 'Native' }"
    />
  </div>
</template>
