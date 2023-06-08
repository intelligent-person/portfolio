<script setup>
import {onMounted, ref} from "vue";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import SocialLink from '../atoms/SocialLink'
import {useSplitText} from "../../composables/useSplitText";
const mail = useMail()

const together = ref(null)
const symbol = ref(null)
const name = ref('')
const email = ref('')
const message = ref('')

const errors = ref({
  name: false,
  email: false,
  message: false
})

const send = () => {
  if (email.value.length < 5 || !email.value.includes('@')) errors.value.email = true
  else errors.value.email = null
  if (name.value.length < 3) errors.value.name = true
  else errors.value.name = null
  if (message.value.length < 10) errors.value.message = true
  else errors.value.message = null

  if (email.value.length < 5 || !email.value.includes('@') || name.value.length < 3 || message.value.length < 10) return

  try {
    mail.send({
      from: email.value,
      subject: 'Contact form message | ' + name.value,
      text: message.value,
    })
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const animated = [
    useSplitText(together.value).chars,
    useSplitText(symbol.value).chars,
    useSplitText('#split-1').chars,
    useSplitText('#split-2').chars
  ]

  gsap.from(animated, {
    opacity: 0,
    ease: "none",
    duration: 0.1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '#form',
      start: 'top center',
      toggleActions: 'restart pause reverse pause'
    }
  });
})
</script>
<template>
  <section id="form" class="section-padding container">
    <h2 id="form-title" class="text-primary uppercase text-center mb-16">
      Interesting in working
      <span class="text-white" ref="together">together</span>
      <span ref="symbol">?</span>
    </h2>
    <form>
      <input
          type="name"
          class="mb-10 lg:mb-16"
          :class="errors.name ? 'error' : ''"
          placeholder="How can i call you?"
          v-model="name"
          required
      />
      <input
          type="email"
          class="mb-16 lg:mb-24"
          :class="errors.email ? 'error' : ''"
          placeholder="Your email address?"
          v-model="email"
          required
      />
      <textarea
          required
          class="mb-6 lg:mb-10"
          :class="errors.message ? 'error' : ''"
          placeholder="Type message..."
          v-model="message"
      />
      <div class="mb-20">
        <button class="btn-primary float-right" @click.prevent="send">
          Send email
        </button>
      </div>
      <h3 class="text-primary uppercase text-center mb-6">
        <span id='split-1' class="text-white">Or</span><br/>
        Use social media<span id='split-2' class="text-white"> Links</span>
      </h3>
      <div class="flex justify-center gap-5">
        <SocialLink type="WhatsApp"/>
        <SocialLink type="Telegram"/>
      </div>
    </form>
  </section>
</template>
