<template>
  <div class="report">
    <router-link to="/">
      <button class="report__button-back">{{ $locale('form.backBtn') }}</button>
    </router-link>

    <h1 class="report__heading">{{ $locale('form.reportTitle') }}</h1>

    <ul class="report__list">
      <li class="report__item">
        <a :href="infographic" class="report__item-link">
          <img :src="pdfLogo" alt="download" class="report__item-logo">
          <span class="report__item-title">Инфографика</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import pdfLogo from '../assets/svg/pdf.svg'
import infographic from '../assets/pdf/infographic.pdf'

export default {
  data() {
    return {
      pdfLogo,
      infographic
    }
  }
}
</script>
