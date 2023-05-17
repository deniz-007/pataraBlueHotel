<template>
  <div>
    <navbar />
    <slot />
    <footer1 />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import Footer1 from '@/components/Footer1.vue'


export default {
  name: 'layout',
  components: {
    navbar,
    Footer1
  }
}
</script>

<style scoped>

</style>
