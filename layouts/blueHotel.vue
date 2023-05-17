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
import layout from "@/layouts/layout.vue";
import hotelSlider from "@/components/hotelSlider.vue";
import aboutHotel from "@/components/aboutHotel.vue";
import hotelPhoto from "@/components/hotelPhoto.vue";
import banyo from "@/components/banyo.vue";
import reservationCard from "@/components/reservationCard.vue";


export default {
  name: 'blueHotel',
  components: {
    layout,
    hotelSlider,
    aboutHotel,
    hotelPhoto,
    banyo,
    reservationCard

  }
}
</script>

<style scoped>

</style>
