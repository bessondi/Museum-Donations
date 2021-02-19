<template>
<div class="wrap">

  <div class="gratitude" ref="gratitudePage">
    <div class="museumLogo">
      <img class="logo" :src="$store.state.locale === 'ru' ? fabergeLogos.ru : fabergeLogos.en" alt="Museum logo">
    </div>

    <h1 class="gratitude__heading">
      {{
        $store.state.nameValue.length || $store.state.surnameValue.length
          ? $store.state.nameValue + ' ' + $store.state.surnameValue
          : $locale('form.gratitudeDefaultText')
      }}
    </h1>
    <p class="gratitude__description">{{ $locale('form.gratitudeText') }}</p>

    <img :src="image" alt="Museum image" class="gratitude__image">
  </div>

  <button @click="saveAsImage" class="saveImgBtn">Сохранить</button>
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
      fabergeLogos: {
        ru: fabergeLogoRu,
        en: fabergeLogoEn,
      },
      image
    }
  },
  methods: {
    saveAsImage() {
      window.scrollTo(0, 0)

      html2canvas(this.$refs.gratitudePage)
        .then(canvas => {
          const link = document.createElement('a');
          link.download = 'Faberge gratitude.jpg';
          link.href = canvas.toDataURL('image/jpeg').replace("image/jpeg", "image/octet-stream")
          link.click();
          link.delete;
        })
    }
  }
}
</script>
