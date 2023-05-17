<template>
  <div class="container-fluid">
    <div >
      <div class="col">
        <div>
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="Günbatim"
              img-src="./../images/günbatim.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="bahçe"
              img-src="./../images/bahçe.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="havuz"
              img-src="./../images/havuz1 kopyası.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="otel"
              img-src="./../images/otelUzak.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
}
</script>

<style scoped>

</style>
