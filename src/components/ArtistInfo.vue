<template>
  <div class="flex flex-col mx-auto">
    <div v-if="artist" class="p-4">
      <div class="flex items-center mb-4">
        <img
          :src="artist.images[0].url"
          alt="Artist Image"
          class="rounded-full w-24 h-24 mr-4 rotate"
        />
        <h2 class="text-2xl font-bold">{{ artist.name }}</h2>
      </div>

      <div class="mb-2">
        <h3 class="text-xl font-bold">Genres:</h3>
        <p class="text-lg">{{ artist.genres.join(', ') }}</p>
      </div>

      <div>
        <h3 class="text-xl font-bold">Followers:</h3>
        <p class="text-lg">{{ artist.followers.total }}</p>
      </div>

      <div class="flex justify-around">
        <button @click="prevArtist" class="bg-red-500 text-white px-4 py-2 mt-4 rounded-md">
          Previous Artist
        </button>
        <button @click="nextArtist" class="bg-green-500 text-white px-4 py-2 mt-4 rounded-md">
          Next Artist
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'ArtistInfo',
  setup() {
    const artist = ref(null)
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const artistIds = [
      '1Ffb6ejR6Fe5IamqA5oRUF?si=XsafgIe8SaWTHGRwaugvRA', // Bring Me the Horizon artist ID
      '3YQKmKGau1PzlVlkL1iodx?si=J9uENDwERx6WcoQvIZMrTA', // Twenty One Pilots artist ID
      '2n2RSaZqBuUUukhbLlpnE6?si=MwarDQwGS36k-fQyYBo52A' // Sleep Token artist ID
    ]
    // Select a random artist ID from the list
    const artistId = artistIds[Math.floor(Math.random() * artistIds.length)]

    const getToken = async () => {
      const tokenResponse = await axios.post(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
          grant_type: 'client_credentials'
        }),
        {
          headers: {
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      return tokenResponse.data.access_token
    }

    const fetchArtistData = async () => {
      try {
        const token = await getToken()
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        artist.value = response.data
      } catch (error) {
        console.error('Error fetching artist data:', error)
      }
    }

    onMounted(() => {
      fetchArtistData()
    })

    return {
      artist
    }
  }
})
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: spin 10s linear infinite;
}
</style>
