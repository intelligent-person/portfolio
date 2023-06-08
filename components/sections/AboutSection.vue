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
  <section class="section-padding container" id="about">
    <h2 class="text-secondary text-center mb-10 lg:mb-24">
      AboutMe<span class="text-white">()</span>
    </h2>
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
      <Slide v-for="card in cards" :key="card">
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
