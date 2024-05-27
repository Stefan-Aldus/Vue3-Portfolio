<script setup lang="ts">
import artistInfo from './ArtistInfo.vue'
defineProps({
  name: String,
  quote: String,
  country: String,
  languages: Object,
  jobTitle: String,
  programmingLanguages: Array,
  profileImg: String
})
</script>

<template>
  <div class="p-6 w-screen flex justify-center">
    <div class="w-8/12 rounded-[50px] bg-slate-400 p-4 flex justify-around">
      <div class="flex flex-col items-center">
        <img :src="profileImg" alt="Profile Image" class="rounded-full w-32 h-32" />
        <h1 class="text-2xl font-bold">{{ name }}</h1>
        <p class="text-lg">{{ quote }}</p>
        <p class="text-lg">{{ country }}</p>
        <p class="text-lg">{{ jobTitle }}</p>
        <div class="flex flex-col items-center">
          <h2 class="text-xl font-bold">Programming Languages</h2>
          <ul class="list-disc">
            <li v-for="language in programmingLanguages" :key="language">{{ language }}</li>
          </ul>
        </div>
      </div>
      <!-- Divs taking up 50%, cycling between favorite artist, (programming languages), work experience, etc. -->
      <div class="flex flex-col items-center w-1/2">
        <h2 class="text-xl font-bold">Favorite Artists</h2>
        <artistInfo />
      </div>
    </div>
  </div>
</template>
