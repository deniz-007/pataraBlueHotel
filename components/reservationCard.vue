<template>
  <div class="d-flex justify-content-center" style="padding-top: 40px; padding-bottom: 40px">
    <b-card bg-variant="dark transparent" text-variant="white" class="col-8">
      <b-card-text class="text-center">
        {{$t('experience')}}
      </b-card-text>
      <div class="d-flex justify-content-center">
        <b-button  @click="redirectToBooking" variant="primary"> {{$t('book')}}
        </b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "reservationCard",
  methods: {
    redirectToBooking() {
      window.location.href = 'https://www.etstur.com/Patara-Blue-Hotel';
    },
  },
}
</script>
<style scoped>

</style>
