<script setup>
import ExperienceCard from "../molecules/ExperienceCard";

const positions = [
  {
    companyName: 'Kyros AI',
    position: 'Frontend Engineer',
    startedAt: 2023,
    endedAt: 'Present',
    responsibilities: [
        'Design and optimization of the user interface',
        'Communication and collaboration',
        'Adapting to new technologies',
        'Compliance with standards and best practices'
    ]
  },
  {
    companyName: 'Solution Plus Limited',
    position: 'Software Engineer',
    startedAt: 2022,
    endedAt: 2023,
    responsibilities: [
        'Self-development of web applications',
        'Making independent decisions about the product',
        'Development, testing, deployment, support',
        'Working with CMS',
        'Create a good SEO optimization',
        'Make an awesome animation',
    ]
  },
  {
    companyName: 'QFinds',
    position: 'Frontend Developer',
    startedAt: 2020,
    endedAt: 2022,
    responsibilities: [
       'Work with the Product Manager and Developers.',
       'Produce development estimates.',
       'Write and review technical proposals.',
       'Author end user UI components, APIs. ',
       'Solve user centric design challenges.',
       'Research and evaluate new technologies.',
       'Create high quality implementations with unit and automated tests.',
       'And more :)'
    ]
  },
  {
    companyName: 'Freelance',
    position: 'Software Engineer',
    startedAt: 2019,
    endedAt: 2020,
    responsibilities: [
        'Creating a forum for Sumy University students.',
        'Project architecture development.',
        'Solving complex problems.',
        'Design, develop, test, deploy software.',
        'Creating a movie site'
    ]
  }
]
</script>
<template>
  <section class="section-padding container">
    <h2 id="experience" class="text-secondary text-center mb-10 lg:mb-24">
      Experience<span class="text-white">()</span>
    </h2>
    <div class="relative">
      <ExperienceCard
          v-for="(experience, index) in positions"
          :experience="experience"
          :key="experience.companyName"
          :idx="index"
      />
    </div>
  </section>
</template>

