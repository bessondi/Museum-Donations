<template>
  <div class="wrapper">
    <Content v-if="isContentVisible" />
    <Form/>
  </div>
</template>

<script>
import Content from '@/components/Content.vue'
import Form from '@/components/Donation.vue'

export default {
  data() {
    return {
      isContentVisible: null,
      windowWidth: 0
    }
  },
  components: {
    Content,
    Form
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
      this.isContentVisible = this.windowWidth >= 992
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss">
@import '../scss/index.scss';
</style>
