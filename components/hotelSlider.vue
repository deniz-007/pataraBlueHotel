<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="./../images/hotelBackGround.jpg"
      ></b-carousel-slide>
      <b-carousel-slide img-src="./../images/havuz1 kopyası.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="./../images/hotelCard.jpg">

      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
export default {
  name: "hotelSlider",
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

</style>
