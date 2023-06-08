<script setup>
import MainSection from '../components/sections/MainSection.vue'
import Header from '../components/molecules/Header'
import AboutSection from "../components/sections/AboutSection";
import TechStackSection from "../components/sections/TechStackSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import FormSection from "../components/sections/FormSection";

useHead({
  title: 'Fullstack developer portfolio: Ivan Kupach',
  meta: [
    {
      name: 'description',
      content: 'Fullstack developer portfolio: React, Nodejs, Vue, TypeScript....'
    },
  ],
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://ivankupach.vercel.app/' }],
});
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Ivan Kupach | Portfolio',
  'author': {
    "@type": 'Person',
    '@id': 'intelligent-person'
  },
  'description': 'Fullstack developer portfolio: React, Nodejs, Vue, TypeScript....',
  'url': 'https://ivankupach.vercel.app/',
  'keywords': 'HTML, CSS, JS, TS, JavaScript, Typescript, React, Nextjs, Vue, Ivan Kupach'
});
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'intelligent-person',
  'name': 'Ivan Kupach',
  'email': 'ivankupach@gmail.com',
  'url': 'https://ivankupach.vercel.app/'
});
</script>

<template>
  <Header/>
  <MainSection/>
  <AboutSection/>
  <TechStackSection/>
  <ExperienceSection/>
  <FormSection/>
</template>

