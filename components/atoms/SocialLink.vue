<script setup>
import {ref} from "vue";

const src = ref('')
const link = ref('/')
const { type } = defineProps(['link', 'type'])
switch (type) {
  case 'LinkedIn': {
    src.value = '/UnionLinkedIn.svg'
    link.value = 'https://www.linkedin.com/in/ivan-kupach-573696205/'
    break
  }
  case 'Github': {
    src.value = '/VectorGithub.svg'
    link.value = 'https://github.com/intelligent-person'
    break
  }
  case 'WhatsApp': {
    src.value = '/WhatsApp.svg'
    link.value = 'https://wa.me/+380502867323'
    break
  }
  case 'Telegram': {
    src.value = '/Telegram.svg'
    link.value = 'https://t.me/intelligent_person'
    break
  }
  default:
    src.value = ''
}
</script>
<template>
  <a :href="link" class="social-link">
    <img :src="src" :alt="type"/>
  </a>
</template>


