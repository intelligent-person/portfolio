<script setup>
import { onMounted } from 'vue'
import gsap from "gsap";
import SocialLink from '../atoms/SocialLink';
const emit = defineEmits(['handleClickScroll'])
onMounted(() => {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
  tl.from('.nav-link', { delay: 0.4, opacity: 0, stagger: .2 }, '-=.8')
})

</script>
<template>
  <div>
    <a @click="emit('handleClickScroll', 'about')" class="nav-link">About</a>
    <a @click="emit('handleClickScroll', 'skills')" class="nav-link">Skills</a>
    <a @click="emit('handleClickScroll', 'experience')" class="nav-link">Experience</a>
    <a @click="emit('handleClickScroll', 'form-title')" class="nav-link">Contact</a>
    <div class="flex items-center gap-5">
      <SocialLink type="LinkedIn"/>
      <SocialLink type="Github"/>
    </div>
  </div>
</template>


