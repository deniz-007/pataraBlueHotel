<template>
  <layout>
    <home />
    <possibilities />
    <engelli/>
    <hotelCard />
    <commentSection/>
    <reservationCard/>
  </layout>
</template>

<script>
import layout from '@/layouts/layout.vue'
import engelli from "@/components/engelli.vue";
import home from '@/components/home.vue'
import possibilities from '@/components/possibilities.vue'
import hotelCard from '@/components/hotelCard.vue'
import commentSection from '@/components/commentSection.vue'
import reservationCard from '@/components/reservationCard.vue'

export default {
  name: 'index',
  components: {
    layout,
    home,
    possibilities,
    hotelCard,
    commentSection,
    reservationCard,
    engelli
  }
}
</script>

<style scoped>

</style>
