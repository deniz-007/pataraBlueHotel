<template>
  <div class="container-fluid backGround" :style="image">
    <div class="d-flex justify-content-center align-items-center h-100">
      <h1 class="hotel-title">PATARA BLUE HOTEL</h1>

      <b-button  @click="redirectToBooking" class="my-button-class align-content-center" style="margin-top: auto; margin-bottom: auto" variant="success">{{ $t('book') }}</b-button>
    </div>
  </div>
</template>

<script>
import backGround from "./../images/hotelBackGround.jpg";
export default {
  data() {
    return {
      image: { backgroundImage: `url(${backGround})`},
    };
  },
  methods: {
    redirectToBooking() {
      window.location.href = 'https://www.etstur.com/Patara-Blue-Hotel';
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
.my-button-class {
  background-color: rgba(0, 123, 255, 0.8) !important;
  border-color: rgba(0, 123, 255, 0.8) !important;
  transition: all 0.3s ease;
  opacity: 0.8;
}

.my-button-class:hover {
  background-color: rgba(0, 123, 255, 1) !important;
  border-color: rgba(0, 123, 255, 1) !important;
  box-shadow: 0px 0px 5px 1px rgba(0, 123, 255, 0.5) !important;
  opacity: 1;
}
.hotel-title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 6rem;
}
</style>
