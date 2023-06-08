<script setup>
import { TimelineMax } from 'gsap'
import {watchEffect} from "vue";
const emit = defineEmits(['onClick'])
const props = defineProps(['toggleBurgerAnimation'])

const menuToggle = new TimelineMax({ paused:true, reversed:true });
if (typeof window !== 'undefined') {
  menuToggle
    .to('.top', .2, { y: '-9px', transformOrigin: '50% 50%' }, 'burg')
    .to('.bot', .2, { y: '9px', transformOrigin: '50% 50%' }, 'burg')
    .to('.mid', .2, { scale: 0.1, transformOrigin: '50% 50%' }, 'burg')
    .add('rotate')
    .to('.top', .2, { y: '5' }, 'rotate')
    .to('.bot', .2, { y: '-5' }, 'rotate')
    .to('.top', .2, { rotationZ: 45, transformOrigin: '50% 50%' }, 'rotate')
    .to('.bot', .2, { rotationZ: -45, transformOrigin: '50% 50%' }, 'rotate')
    .set('#burger .mid', { opacity: 0 })//temp fix for stupid iOS rotate y bug
}

function onCLickAnimation () {
  if(menuToggle.reversed()) {
    emit('onClick', true)
    menuToggle.restart()
  }  else {
    emit('onClick', false)
    menuToggle.reverse();
  }
}
watchEffect(() => {
  if(props.toggleBurgerAnimation) {
    menuToggle.reverse();
  }
})
</script>

<template>
  <svg @click="onCLickAnimation()" id="burger" width="30" class="openmenu cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <path class="top" d="M0 9h30v2H0z" fill="white"/>
    <line class="mid" x1="0" y1="15" x2="30" y2="15" stroke="white" stroke-width="2" vector-effect="non-scaling-stroke"/>
    <path class="bot" d="M0 19h30v2H0z" fill="white"/>
  </svg>
</template>


