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
import Layout from '@/layouts/Layout.vue'
import HotelSlider from '@/components/HotelSlider.vue'
import HotelPhoto from '@/components/HotelPhoto.vue'

export default {
  name: 'blueHotel',
  components: {
    Layout,
    HotelSlider,
    HotelPhoto
  }
}
</script>

<style scoped>

</style>
