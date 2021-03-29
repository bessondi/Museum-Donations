<template>
  <div class="content">
    <div class="content__filling">
      <video class="content__video-egg" preload muted loop playsinline autoplay :poster="poster">
        <source :src="webm" type="video/webm">
        <source :src="mp4" type="video/mp4">
      </video>
      <div class="content__background"/>
    </div>
  </div>
</template>

<script>
import webm from '@/assets/video/1.webm'
import mp4 from '@/assets/video/1.mp4'
import poster from '@/assets/video/video-poster.jpg'

export default {
  data() {
    return {
      webm,
      mp4,
      poster
    }
  }
}
</script>
