<script setup>
import AboutCard from "../molecules/AboutCard";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
const cards = [
  {
    title: 'Nationality',
    imgSrc: '/Ukraine.svg',
    description: 'Ukrainian'
  },
  {
    title: 'Education',
    imgSrc: '/SumDu.svg',
    description: 'Sumy \nState University'
  },
  {
    title: 'Languages',
    imgSrc: ['/ukraine-flag.svg', '/britain.svg'],
    description: ['Native', 'Upper- intermediate']
  },
  {
    title: 'Hobbies',
    imgSrc: ['/basketball.svg', '/flight.svg', '/videogames.svg', '/coding.svg'],
  },
  {
    title: 'Experience',
    exp: new Date().getFullYear() - new Date(2020, 1).getFullYear(),
    description: 'Years'
  }
]
</script>

<template>
  <section class="section-padding container relative" id="about">
    <h2 class="text-secondary text-center mb-10 lg:mb-24">
      AboutMe<span class="text-white">()</span>
    </h2>
    <p class="opacity-0 absolute top-0">Hello, i am Ivan Kupach (Іван Купач). This is my Fullstack developer portfolio. I am good at coding. I have good communication skills and critical thinking.</p>
    <p class="opacity-0 absolute top-0">I am an experienced developer from Ukraine (Sumy). I write both frontend and backend - so I'm a fullstack. My main technologies are react js, node js, vue, typescript, javascript and others.</p>
    <p class="opacity-0 absolute top-0">As a hobby, I like to play basketball, I was professionally involved in athletics. Was a 2-time champion of Ukraine. I will be glad to meet and chat. </p>
    <Carousel
      :autoplay="2000"
      :wrapAround="true"
      :transition="500"
      :breakpoints="{
        320: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        600: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        768: {
          itemsToShow: 3.3,
          snapAlign: 'center',
        },
      }"
    >
      <Slide v-for="card in cards" :key="card.title">
        <AboutCard
          :title="card.title"
          :img-src="card.imgSrc"
          :description="card.description"
          :exp="card.exp"
        />
      </Slide>
    </Carousel>
  </section>
</template>
