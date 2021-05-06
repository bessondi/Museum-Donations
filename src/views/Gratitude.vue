<template>
<div class="wrap">
  <div class="gratitude" ref="gratitudePage">
    <div class="museumLogo">
      <img class="logo" :src="$store.state.locale === 'ru' ? fabergeLogos.ru : fabergeLogos.en" alt="Museum logo">
    </div>

    <h1 class="gratitude__heading">{{ getName }}</h1>
    {{ splitLine($locale('form.gratitudeText')) }}
    <p v-html="descriptionText" class="gratitude__description" />

    <img :src="image" alt="Museum image" class="gratitude__image">
  </div>
  <button @click="saveAsImage" class="saveImgBtn">{{ $locale('form.saveBtn') }}</button>
</div>
</template>

<script>
import html2canvas from "html2canvas"
import fabergeLogoRu from "@/assets/img/faberge_logo_central_rus.png"
import fabergeLogoEn from "@/assets/img/faberge_logo_central_eng.png"
import image from "@/assets/img/BlueRoom.jpg"

export default {
  data() {
    return {
      firstName: this.$store.state.nameValue,
      lastName: this.$store.state.surnameValue,
      fabergeLogos: {
        ru: fabergeLogoRu,
        en: fabergeLogoEn,
      },
      image,
      descriptionText: null
    }
  },
  computed: {
    getName() {
      if (!this.firstName && !this.lastName) {
        return this.$locale('form.gratitudeDefaultText')
      } else {
        return `${this.firstName.length ? this.firstName : ''} ${this.lastName.length ? this.lastName : ''}!`
      }
    }
  },
  methods: {
    splitLine(text) {
      this.descriptionText = text.split('\n').map(t => t).join('<br/>')
    },
    saveAsImage() {
      this.scrollToTop()

      const options = {
        width: 1080,
        height: 1080,
        x: 0,
        y: 40,
        windowWidth: 1080,
        windowHeight: 1080,
      }

      html2canvas(this.$refs.gratitudePage, options)
        .then( canvas => {
          const link = document.createElement('a')
          link.download = 'Faberge gratitude.jpg'
          link.href = canvas.toDataURL('image/jpeg').replace("image/jpeg", "image/octet-stream")
          link.click()
          link.delete
        })
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  },
  mounted() {
    this.scrollToTop()
  }
}

</script>
