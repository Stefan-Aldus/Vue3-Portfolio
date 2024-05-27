<template>
  <div class="p-6 w-screen flex justify-center">
    <div class="w-10/12 rounded-[50px] bg-slate-400 p-4 flex justify-around">
      <div class="flex flex-col items-center">
        <img :src="profileImg" alt="Profile Image" class="rounded-full w-32 h-32" />
        <h1 class="text-2xl font-bold">{{ name }}</h1>
        <p class="text-lg italic border-y border-solid border-black rounded">"{{ quote }}"</p>
        <p class="text-lg">{{ country }}</p>
        <p class="text-lg">{{ jobTitle }}</p>
        <div class="flex flex-col items-center w-1/2 whitespace-nowrap">
          <h2 class="text-xl font-bold">Spoken Languages</h2>
          <ul class="flex flex-col items-center">
            <li
              class="w-64 text-center"
              v-for="(expertise, language) in languages"
              :key="expertise"
            >
              {{ language }} - {{ expertise }}
            </li>
          </ul>
        </div>
        <div class="w-max flex justify-between">
          <button @click="prevCard" class="bg-red-500 text-white px-4 py-2 mt-4 rounded-md">
            Previous Card
          </button>
          <button @click="nextCard" class="bg-green-500 text-white px-4 py-2 mt-4 rounded-md">
            Next Card
          </button>
        </div>
      </div>
      <!-- Divs taking up 50%, cycling between favorite artist, (programming languages), work experience, etc. -->
      <div class="flex flex-col items-center w-1/2" v-if="currentCard === 'artist'">
        <h2 class="text-xl font-bold">Favorite Artists</h2>
        <artistInfo />
      </div>
      <div class="flex flex-col items-center w-1/2 h-11/12" v-if="currentCard === 'programmingLanguages'">
        <h2 class="text-xl font-bold">Programming Languages</h2>
        <ul class="flex flex-col justify-around h-">
          <li v-for="language in programmingLanguages" :key="language">{{ language }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import artistInfo from './ArtistInfo.vue'

export default defineComponent({
  name: 'CardViewer',
  components: {
    artistInfo
  },
  props: {
    name: {
      type: String,
      required: true,
      default: 'John Doe'
    },
    quote: {
      type: String,
      required: true,
      default: 'Hello, World!'
    },
    country: {
      type: String,
      required: true,
      default: 'United States'
    },
    languages: {
      type: Object,
      required: true,
      default: () => ({ English: 'Fluent', Spanish: 'Intermediate' })
    },
    jobTitle: {
      type: String,
      required: true,
      default: 'Software Engineer'
    },
    programmingLanguages: {
      type: Array,
      required: true,
      default: () => ['JavaScript', 'TypeScript', 'Python']
    },
    profileImg: {
      type: String,
      required: true,
      default: 'https://via.placeholder.com/150'
    }
  },
  setup(props) {
    const cards = ref(['artist', 'programmingLanguages'])
    let currentCard = ref('artist') // Default to artist
    const currentCardIndex = ref(cards.value.indexOf(currentCard.value))

    const nextCard = () => {
      currentCard.value = cards.value[(currentCardIndex.value + 1) % cards.value.length]
      currentCardIndex.value = cards.value.indexOf(currentCard.value)
    }

    const prevCard = () => {
      currentCard.value =
        cards.value[(currentCardIndex.value - 1 + cards.value.length) % cards.value.length]
      currentCardIndex.value = cards.value.indexOf(currentCard.value)
    }

    return {
      ...props,
      cards,
      currentCardIndex,
      currentCard,
      nextCard,
      prevCard
    }
  }
})
</script>
