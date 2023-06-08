<script setup>
import CodeText from "../atoms/CodeText";
defineProps(['title', 'imgSrc', 'description', 'exp'])
</script>
<template>
  <div class="about-card">
    <CodeText>{{ title }}</CodeText>
    <img v-if="typeof imgSrc === 'string'" :src="imgSrc" :alt="title"/>
    <div
      v-if="Array.isArray(imgSrc)"
      class="flex justify-around flex-wrap gap-3 multi-img"
    >
      <img v-for="img in imgSrc" :key="img" :src="img" :alt="title"/>
    </div>
    <p v-if="exp" class="exp">{{ exp }}+</p>
    <p v-if="typeof description === 'string'">{{ description }}</p>
    <div
      v-if="Array.isArray(description)"
      class="grid grid-cols-2 gap-2 text-center w-100"
    >
      <p v-for="descr in description" :key="descr">
        {{ $viewport.isLessThan('tablet') && descr === 'Upper- intermediate' ? 'B2' : descr }}
      </p>
    </div>
  </div>
</template>
