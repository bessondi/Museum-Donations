<template>
  <div class="wrapper">
<!--    <Content />-->
    <Form />
  </div>
</template>

<script>
  import Content from '@/components/Content.vue'
  import Form from '@/components/Donation.vue'

  export default {
    // name: 'Main',
    components: {
      Content,
      Form
    }
  }
</script>

<style lang="scss">
  @import '@/scss/index.scss';
</style>
