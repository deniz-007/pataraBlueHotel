<template>
  <div style="height: 560px;">
  <div class="container-fluid backGround" :style="image">
    <div class="d-flex justify-content-center align-items-center h-100">
      <b-button  @click="redirectToBooking"  block variant="primary"> {{$t('yolTarifi')}}</b-button>
    </div>
  </div>
  </div>
</template>

<script>
import backGround from "./../images/mapUzak.png";
export default {
  name: "contact1",
  data() {
    return {
      image: { backgroundImage: `url(${backGround})`},
    };
  },
  methods: {
    redirectToBooking() {
      window.location.href = 'https://www.google.com/maps/dir//patara+blue+hotel+map/@36.2761203,29.2798895,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c1dbe06bad29e3:0x3f525d9183373f2f!2m2!1d29.3210892!2d36.2761274';
    },
  },
};
</script>

<style>
.backGround{
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

</style>
