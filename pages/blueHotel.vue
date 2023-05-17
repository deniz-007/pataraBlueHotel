<template>
  <layout>
    <hotelSlider />
    <aboutHotel/>
    <hotelPhoto />
    <banyo />
    <reservationCard />

  </layout>
</template>

<script>
import layout from '@/layouts/Layout.vue'
import hotelSlider from '@/components/HotelSlider.vue'
import aboutHotel from "@/components/aboutHotel.vue";
import reservationCard from "@/components/reservationCard.vue";
import hotelPhoto from '@/components/HotelPhoto.vue'
import banyo from "@/components/banyo.vue";

export default {
  name: 'blueHotel',
  components: {
    layout,
    hotelSlider,
    hotelPhoto,
    banyo,
    reservationCard,
    aboutHotel
  }
}
</script>

<style scoped>

</style>
