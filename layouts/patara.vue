<template>
  <layout>
    <pataraSlider/>
    <pataraDoubleCard/>
    <pataraDoubleCard2/>
  </layout>
</template>

<script>
import layout from '@/layouts/Layout.vue'
import pataraSlider from "@/components/pataraSlider.vue";
import pataraDoubleCard from "@/components/pataraDoubleCard.vue";
import pataraDoubleCard2 from "@/components/pataraDoubleCard2.vue";


export default {
  name: 'patara',
  components: {
    layout,
    pataraSlider,
    pataraDoubleCard,
    pataraDoubleCard2
  }
}
</script>

<style scoped>

</style>
