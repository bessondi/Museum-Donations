<template>
  <div class="wrapper">
    <Content/>
    <Form/>
  </div>
</template>

<script>
import Content from '@/components/Content.vue'
import Form from '@/components/Donation.vue'

export default {
  components: {
    Content,
    Form
  }
}
</script>

<style lang="scss">
@import '@/scss/index.scss';
</style>
