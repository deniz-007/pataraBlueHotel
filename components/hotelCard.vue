<template>
  <div style="padding:40px">
    <b-card-group deck>
      <b-card img-src="./../images/havuz1 kopyası.jpg" img-alt="Card image" img-top
              style="border: none"
              class="custom-card-text">
        <b-card-text>
          {{$t('hotelCard1')}}


        </b-card-text>
      </b-card>

      <b-card img-src="./../images/hotelCard.jpg" img-alt="Card image" img-bottom
              style="border: none"
              class="custom-card-text">
        <b-card-text>
          {{$t('hotelCard2')}}

        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "hotelCard"
}
</script>

<style scoped>
.custom-card-text {
  background-color: #f7f7f7;
}
</style>
