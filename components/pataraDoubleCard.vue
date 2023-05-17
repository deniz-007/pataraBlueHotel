<template>
  <div style="padding:40px">
    <b-card-group deck>
      <b-card img-src="./../images/antikKent.jpeg" img-alt="Card image" img-bottom
              style="border: none"
              class="custom-card-text">
        <b-card-text>
          {{$t('patara1')}}

        </b-card-text>
      </b-card>

      <b-card img-src="./../images/pataraPlaj.jpeg" img-alt="Card image" img-top
              style="border: none"
              class="custom-card-text">
        <b-card-text>
          {{$t('patara2')}}


        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "pataraDoubleCard"
}
</script>

<style scoped>
.custom-card-text {
  background-color: #f7f7f7;
}
</style>
