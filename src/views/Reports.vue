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
          <span class="report__item-title">Infographic</span>
        </a>
      </li>

<!--      <li class="report__item">-->
<!--        <a :href="infographic2" class="report__item-link">-->
<!--          <img :src="pdfLogo" alt="download" class="report__item-logo">-->
<!--          <span class="report__item-title">Infographic 2</span>-->
<!--        </a>-->
<!--      </li>-->

    </ul>
    <p class="report__description">{{ $locale('form.reportDescription') }}</p>
  </div>
</template>

<script>
import pdfLogo from '../assets/svg/pdf.svg'
import infographic from '../assets/pdf/infographic.pdf'
// import infographic2 from '../assets/pdf/infographic2.pdf'

export default {
  data() {
    return {
      pdfLogo,
      infographic,
      // infographic2
    }
  }
}
</script>
