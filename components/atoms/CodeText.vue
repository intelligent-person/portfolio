<template>
  <div class="flex gap-0.5 lg:gap-2 items-center">
    <img src="/OpenCodeSecondary.svg" alt="OpenCode"/>
    <h3 class="text-primary"><slot/></h3>
    <img src="/CloseCodeSecondary.svg" alt="CloseCode"/>
  </div>
</template>
<style scoped>
@media (max-width: 768px) {
  img {
    height: 15px;
  }
}
</style>
