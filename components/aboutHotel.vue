<template>
  <b-card img-src="./../images/aboutHotel.jpeg" img-alt="Card image" img-right  style="border: none;padding: 40px"
          class="custom-card-text" >
    <b-card-text>
      <br>
      <h1>
        {{ $t('experience2') }}
      </h1>
      <br>
      <br>
      {{ $t('experienceText') }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "aboutHotel"
}
</script>

<style scoped>
.custom-card-text {
  background-color: #f7f7f7;
}
</style>
