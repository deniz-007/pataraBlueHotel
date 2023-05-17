<!--<template>-->
<!--  <gmap-map :zoom="14" :center="center" style="width: 100%; height: 600px" class="mb-5">-->
<!--    <gmap-marker-->
<!--      :key="index"-->
<!--      v-for="(m, index) in locationMarkers"-->
<!--      :position="m.position"-->
<!--      @click="center = m.position"-->
<!--    >-->
<!--    </gmap-marker>-->
<!--  </gmap-map>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "GoogleMap",-->
<!--  methods: {-->
<!--      initMarker(loc) {-->
<!--        this.existingPlace = loc;-->
<!--      },-->
<!--      addLocationMarker() {-->
<!--        if (this.existingPlace) {-->
<!--          const marker = {-->
<!--            lat: this.existingPlace.geometry.location.lat(),-->
<!--            lng: this.existingPlace.geometry.location.lng(),-->
<!--          };-->
<!--          this.locationMarkers.push({ position: marker });-->
<!--          this.locPlaces.push(this.existingPlace);-->
<!--          this.center = marker;-->
<!--          this.existingPlace = null;-->
<!--        }-->
<!--      },-->
<!--      locateGeoLocation: function () {-->
<!--        navigator.geolocation.getCurrentPosition((res) => {-->
<!--          this.center = {-->
<!--            lat: res.coords.latitude,-->
<!--            lng: res.coords.longitude,-->
<!--          };-->
<!--        });-->
<!--      },-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
