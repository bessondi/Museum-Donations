<template>
  <div class="content">
    <div class="filling">
      <video class="egg" preload muted loop playsinline autoplay poster="">
        <source :src="webm" type="video/webm">
        <source :src="mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
import webm from '@/assets/video/1.webm'
import mp4 from '@/assets/video/1.mp4'

export default {
  data() {
    return {
      webm,
      mp4,
    }
  }
}
</script>
