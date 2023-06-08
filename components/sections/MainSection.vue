<script setup>
import {onMounted} from "vue";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import {useSplitText} from "../../composables/useSplitText";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const splittingEl = document.querySelectorAll('.splitting')
  const animated = [...splittingEl].map((el) => {
    return useSplitText(el).chars
  })

  gsap.timeline().from([...animated, '.splitting-i'], {
    scale: 1,
    y: 80,
    opacity: 0,
    ease: "none",
    duration: 0.1,
    stagger: 0.05,
    delay: .5
  });
  gsap.from(['.ava-node',  '.ava-firebase', '.ava-react'], {
    duration: .4,
    opacity: 0,
    stagger: .3,
    delay: .5,
    x: -40,
    y: -40,
    ease: 'expo',
    scrollTrigger: {
      trigger: ".my-avatar",
      // start: 'bottom center',
      toggleActions: "restart restart restart restart"
    },
  })
})

</script>

<template>
  <section class="section-padding" id="home">
    <div class="container flex flex-col text-center md:grid grid-cols-3 items-center">
      <div class="mt-20 w-72 lg:w-96">
        <h2 class="md:text-left mb-3 splitting">Hello, I am</h2>
        <h1 class="text-secondary">
          <span class="text-left block">
            <img
                src="/OpenCode.svg"
                alt="Open code"
                class="inline-block h-11 lg:h-16 splitting-i"
            />
            <span class="splitting">Kupach </span>
          </span>
          <span class="text-right block">
            <span class="splitting">Ivan</span>
            <img
                src="/CloseCode.svg"
                alt="Close code"
                class="inline-block h-11 lg:h-16 splitting-i ml-4"
            />
          </span>
        </h1>
        <div class="md:text-right">
          <h2 class="my-4 splitting">Software Engineer</h2>
          <a href='/' class="mx-auto md:float-right btn-primary" download="CV_Kupach.pdf">
            <img src="/cloud_download.svg" alt="download resume"/>
            Resume
          </a>
        </div>
      </div>
      <div class="my-avatar col-start-2 col-end-4">
        <img class='ava' src="/Ivan.svg" alt="Ivan Kupach" width="100%"/>
        <img class="ava-ellipse" src="/Ellipse.png" alt="Avatar"/>
        <img class="ava-node" src="/NodeJs.svg" alt="Node.js"/>
        <img class="ava-firebase" src="/Firebase.svg" alt="Firebase"/>
        <img class="ava-react" src="/React.svg" alt="React"/>
      </div>
    </div>
    <div class="bg-primary" style="height: 3px; margin: 0 -15px"></div>
  </section>
</template>
