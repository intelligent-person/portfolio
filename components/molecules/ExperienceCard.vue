<script setup>

import {onMounted} from "vue";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
const viewport = useViewport()
const props = defineProps({
  experience: {
    startedAt: Number,
    endedAt: Number,
    companyName: String,
    position: String,
    responsibilities: [String]
  },
  idx: Number
})

onMounted(() => {
  const animation = {
    x: viewport.isGreaterOrEquals('tablet') ? (props.idx % 2 !== 1) ? 150 : -150 : 0,
    y: viewport.isLessThan('tablet') ? 100 : 0
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.experience-card-' + props.idx, {
    opacity: 0,
    duration: .5,
    ease: 'power2',
    scrollTrigger: {
      trigger: ".experience-card-" + props.idx,
      start: 'top 70%',
      toggleActions: "restart pause reverse pause"
    },
    ...animation
  })
})
</script>
<template>
  <div
    class="flex gap-10 relative"
    :class="idx % 2 !== 1 ? 'justify-end' : 'justify-end lg:justify-start'"
  >
    <div class="bg-primary absolute left-6 lg:left-1/2 h-100 border-primary border-solid border-2 -translate-x-1/2"></div>
    <div class="bg-dark absolute left-6 lg:left-1/2 h-10 w-10 border-primary border-solid border-4 rounded-full -translate-x-1/2 top-4"></div>
    <div class="experience-card w-5/6 lg:w-2/5 mt-4" :class="'experience-card-' + idx">
      <div class="flex">
        <p class="labels labels--left">{{ experience.startedAt }}</p>
        <p class="labels labels--right">{{ experience.endedAt }}</p>
      </div>
      <h2>{{ experience.companyName }}</h2>
      <p>(<span class="text-secondary position">{{ experience.position }}</span>)</p>
      <p class="text-gray-400 my-3 lg:my-6">Responsibilities:</p>
      <ul>
        <li v-for="response in experience.responsibilities" :key="response">{{ response }}</li>
      </ul>
    </div>
  </div>
</template>

