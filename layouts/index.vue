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
import Layout from '@/layouts/Layout.vue'
import engelli from "@/components/engelli.vue";
import Home from '@/components/Home.vue'
import Possibilities from '@/components/Possibilities.vue'
import HotelCard from '@/components/HotelCard.vue'
import CommentSection from '@/components/CommentSection.vue'
import ReservationCard from '@/components/ReservationCard.vue'

export default {
  name: 'index',
  components: {
    Layout,
    Home,
    Possibilities,
    HotelCard,
    CommentSection,
    ReservationCard,
    engelli
  }
}
</script>

<style scoped>

</style>
