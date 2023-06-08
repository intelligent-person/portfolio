<script setup>
import { ref } from 'vue'
import Burger from "../atoms/Burger";
import MobileMenu from "./MobileMenu";
import SocialLink from "../atoms/SocialLink";

const isMobileMenu = ref(false)
const toggleBurgerAnimation = ref(false)
const handleClickScroll = (section) => {
  const element = document.getElementById(section);
  if (element) {
    toggleBurgerAnimation.value = !toggleBurgerAnimation.value
    toggleMobileMenu(false)
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

};
function toggleMobileMenu(value) {
  isMobileMenu.value = value
}
</script>

<template>
  <header>
    <nav
      class="flex justify-between container"
      :class="{'mobileMenu': isMobileMenu}"
    >
      <a
        v-if="!isMobileMenu"
        @click="handleClickScroll('home')"
        class="cursor-pointer"
      >
        <img src="/Logo.svg" alt="Logo"/>
      </a>
      <div
        v-if="$viewport.isGreaterThan('mobileWide')"
        class="flex items-center"
      >
        <a @click="handleClickScroll('about')" class="nav-link cursor-pointer">About</a>
        <a @click="handleClickScroll('skills')" class="nav-link cursor-pointer">Skills</a>
        <a @click="handleClickScroll('experience')" class="nav-link cursor-pointer">Experience</a>
      </div>
      <div
        v-if="$viewport.isGreaterThan('mobileWide')"
        class="flex items-center gap-5"
      >
        <SocialLink type="LinkedIn"/>
        <SocialLink type="Github"/>
        <button @click="handleClickScroll('form-title')"  class="btn-secondary">
          Contact me<img src="/Email.svg" class="ml-3" alt="Email">
        </button>
      </div>
      <Burger
        class="close"
        :toggleBurgerAnimation="toggleBurgerAnimation"
        @onClick="toggleMobileMenu"
        v-if="$viewport.isLessThan('tablet')"
      />
      <MobileMenu v-if="isMobileMenu" @handleClickScroll="handleClickScroll"/>
    </nav>
  </header>
</template>
