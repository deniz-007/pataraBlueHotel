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
import Home from '@/components/Home.vue'
import possibilities from '@/components/possibilities.vue'
import HotelCard from '@/components/HotelCard.vue'
import CommentSection from '@/components/CommentSection.vue'
import reservationCard from '@/components/reservationCard.vue'

export default {
  name: 'index',
  components: {
    layout,
    Home,
    possibilities,
    HotelCard,
    CommentSection,
    reservationCard,
    engelli
  }
}
</script>

<style scoped>

</style>
