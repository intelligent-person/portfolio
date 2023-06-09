<script setup>
import MainSection from '../components/sections/MainSection.vue'
import Header from '../components/molecules/Header'
import AboutSection from "../components/sections/AboutSection";
import TechStackSection from "../components/sections/TechStackSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import FormSection from "../components/sections/FormSection";

useHead({
  title: 'Ivan Kupach | Fullstack developer portfolio | Іван Купач',
  meta: [
    {
      name: 'description',
      content: 'Fullstack developer Ivan Kupach | portfolio: React, Nodejs, Vue, TypeScript...'
    },
    {
      name: 'keywords',
      content: 'Ivan Kupach, Іван Купач, Fullstack, Frontend, Developer, HTML, CSS, JS, TS, JavaScript, Typescript, React, Nextjs, Vue'
    },
    { property: 'og:title', content: 'Ivan Kupach | Fullstack developer portfolio | Іван Купач' },
    { property: 'og:description', content: 'Fullstack developer Ivan Kupach | portfolio: React, Nodejs, Vue, TypeScript...' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.ivankupach.com/' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: 'https://www.ivankupach.com/Ivan.svg/' },
  ],
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'canonical', href: 'https://www.ivankupach.com/' }],
});
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Ivan Kupach | Fullstack developer portfolio | Іван Купач',
  'author': {
    "@type": 'Person',
    '@id': 'intelligent-person'
  },
  'description': 'Fullstack developer Ivan Kupach | portfolio: React, Nodejs, Vue, TypeScript...',
  'url': 'https://www.ivankupach.com/',
  'keywords': 'Ivan Kupach, Іван Купач, Fullstack, Frontend, Developer, HTML, CSS, JS, TS, JavaScript, Typescript, React, Nextjs, Vue'
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

