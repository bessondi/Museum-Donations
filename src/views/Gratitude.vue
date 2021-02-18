<template>
  <div class="gratitude">
    <div class="museumLogo">
      <img class="logo" :src="$store.state.locale === 'ru' ? fabergeLogos.ru : fabergeLogos.en" alt="Museum logo">
    </div>

    <h1>{{ $store.state.nameValue }}</h1>
    <p>{{ $locale('form.gratitudeText') }}</p>

    <img :src="image" alt="Museum image" class="image">
  </div>
</template>

<script>
import fabergeLogoRu from "@/assets/svg/faberge_logo_central_rus.svg"
import fabergeLogoEn from "@/assets/svg/faberge_logo_central_eng.svg"
import image from "@/assets/img/BlueRoom.jpg"

export default {
  data () {
    return {
      fabergeLogos: {
        ru: fabergeLogoRu,
        en: fabergeLogoEn,
      },
      image
    }
  }
}
</script>
