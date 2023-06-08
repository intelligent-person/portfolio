<script setup>
import {onMounted} from "vue";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const iconsPaths1 = [
    'HTML5',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React-Framework',
    'Redux',
    'Node',
    'Nextjs',
    'React Query',
]
const iconsPaths2 = [
    'Vue',
    'MaterialUI',
    'Docker',
    'AWS',
    'MongoDB',
    'Postgresql',
    'FirebaseDB',
    'GraphQL',
    'Sass',
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.icon-card', {
    opacity: 0,
    y: 50,
    duration: .5,
    stagger: .1,
    ease: 'none',
    scrollTrigger: {
      trigger: ".icon-cards",
      start: 'top center',
      toggleActions: "restart pause reverse pause"
    },
  })
})

</script>
<template>
  <section class="section-padding container" id="skills">
    <h2 class="text-secondary text-center mb-10 lg:mb-24">
      TechStack<span class="text-white">()</span>
    </h2>
    <div
      v-if="$viewport.isGreaterOrEquals('tablet')"
      class="flex justify-between icon-cards"
    >
      <div class="flex flex-wrap gap-x-10 gap-y-3">
        <div v-for="icon in iconsPaths1" class="icon-card">
          <img :src="`/${icon}.svg`" :alt="icon">
        </div>
      </div>
      <div class="flex flex-wrap justify-end gap-x-10 gap-y-3">
        <div v-for="icon in iconsPaths2" class="icon-card">
          <img :src="`/${icon}.svg`" :alt="icon">
        </div>
      </div>
    </div>
    <div
      v-if="$viewport.isLessThan('tablet')"
      class="flex justify-around flex-wrap gap-3 icon-cards"
    >
      <div v-for="icon in [...iconsPaths1, ...iconsPaths2]" class="icon-card">
        <img :src="`/${icon}.svg`" :alt="icon">
      </div>
    </div>
  </section>
</template>
