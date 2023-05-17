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
import layout from '@/layouts/layout.vue'
import HotelSlider from '@/components/HotelSlider.vue'
import aboutHotel from "@/components/aboutHotel.vue";
import reservationCard from "@/components/reservationCard.vue";
import HotelPhoto from '@/components/HotelPhoto.vue'
import banyo from "@/components/banyo.vue";

export default {
  name: 'blueHotel',
  components: {
    layout,
    HotelSlider,
    HotelPhoto,
    banyo,
    reservationCard,
    aboutHotel
  }
}
</script>

<style scoped>

</style>
