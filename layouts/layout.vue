<template>
  <div>
    <navbar />
    <slot />
    <footer1 />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import footer1 from '@/components/footer1.vue'


export default {
  name: 'layout',
  components: {
    navbar,
    footer1
  }
}
</script>

<style scoped>

</style>
