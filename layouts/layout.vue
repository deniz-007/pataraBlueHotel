<template>
  <div>
    <navbar />
    <slot />
    <footer1 />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer1 from '@/components/Footer1.vue'

export default {
  name: 'layout',
  components: {
    Navbar,
    Footer1
  }
}
</script>

<style scoped>

</style>
