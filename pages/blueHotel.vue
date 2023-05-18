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
import hotelSlider from '@/components/hotelSlider.vue'
import aboutHotel from "@/components/aboutHotel.vue";
import reservationCard from "@/components/reservationCard.vue";
import hotelPhoto from '@/components/hotelPhoto.vue'
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
