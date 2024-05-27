<script lang="ts" setup>
import Card from '../components/Card.vue'

defineProps({
  name: {
    type: String,
    required: true,
    default: 'John Doe'
  },
  quote: {
    type: String,
    required: true,
    default: "I'm a placeholder!"
  },
  country: {
    type: String,
    required: true,
    default: 'United States'
  },
  languages: {
    type: Object,
    required: true,
    default: () => ({ English: 'Native', Spanish: 'Intermediate' })
  },
  jobTitle: {
    type: String,
    required: true,
    default: 'Software Developer'
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
})
</script>

<template>
  <Card
    :name="name"
    :quote="quote"
    :country="country"
    :languages="languages"
    :jobTitle="jobTitle"
    :programmingLanguages="programmingLanguages"
    :profileImg="profileImg"
  />
</template>
