<template>
  <div class="flex justify-center py-10">
    <div class="bg-purple-200 rounded-lg p-8 max-w-md w-full shadow-lg text-center">
      <div class="mb-6">
        <img
          src="https://avatars.githubusercontent.com/u/112871693?v=4"
          alt="Profile Image"
          class="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 class="text-2xl font-bold">{{ name }}</h1>
        <p class="italic">{{ quote }}</p>
      </div>
      <div class="text-left">
        <p><strong>Location:</strong> {{ location }}</p>
        <p><strong>Profession:</strong> {{ profession }}</p>
        <p><strong>Education:</strong></p>
        <ul class="list-disc list-inside">
          <li v-for="edu in education" :key="edu">{{ edu }}</li>
        </ul>
        <p class="mt-4"><strong>Work Experience:</strong></p>
        <ul class="list-disc list-inside">
          <li v-for="job in workExperience" :key="job">{{ job }}</li>
        </ul>
        <p class="mt-4"><strong>Skills:</strong></p>
        <ul class="list-disc list-inside">
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
        <p class="mt-4"><strong>Personal Traits:</strong></p>
        <ul class="list-disc list-inside">
          <li v-for="trait in traits" :key="trait">{{ trait }}</li>
        </ul>
        <p class="mt-4"><strong>Languages:</strong></p>
        <ul class="list-disc list-inside">
          <li v-for="language in languages" :key="language">{{ language }}</li>
        </ul>
        <p class="mt-4"><strong>Contact:</strong></p>
        <ul class="list-inside">
          <li>
            GitHub:
            <a :href="github" target="_blank" class="text-blue-500 underline">{{ github }}</a>
          </li>
          <li>
            LinkedIn:
            <a :href="linkedin" target="_blank" class="text-blue-500 underline">{{ linkedin }}</a>
          </li>
          <li>Discord: Stefan0_</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ProfileCard',
  setup() {
    const name = ref('Stefan Aldus')
    const quote = ref('The only way to do great work is to love what you do.')
    const location = ref('The Netherlands')
    const profession = ref('Software Engineer')

    const education = ref([
      'MBO Software Developer / Techniek College Rotterdam, Schiedam (Expected graduation 2024)',
      'VMBO GL-TL / De Ring Van Putten, Spijkenisse (Graduated July 2022)'
    ])

    const workExperience = ref([
      'AGF Medewerker / Dirk van den broek, Spijkenisse (13-08-2023 - Present)',
      'Vulploegmedewerker / Jumbo Supermarkten, Spijkenisse (11-11-2021 – 02-09-2023)'
    ])

    const skills = ref([
      'Javascript (Basic)',
      'PHP (Intermidiate)',
      'Laravel (Intermidiate)',
      'Vue 3 (Basic)',
      'Python (Basic)',
      'Regular CSS (Intermidiate)',
      'Different CSS Frameworks, e.g. Tailwind CSS, Bootstrap CSS, etc. (Basic)'
    ])

    const traits = ref([
      'Independent',
      'Communicative',
      'Customer Friendly',
      'Helpful',
      'Eager to Learn',
      'Patient',
      'Flexible',
      'Adaptable'
    ])

    const languages = ref(['Dutch (Native)', 'English (Proficient)'])

    const github = ref('https://github.com/Stefan-Aldus')
    const linkedin = ref('https://www.linkedin.com/in/stefan-aldus-506b8a258/')

    return {
      name,
      quote,
      location,
      profession,
      education,
      workExperience,
      skills,
      traits,
      languages,
      github,
      linkedin
    }
  }
})
</script>
