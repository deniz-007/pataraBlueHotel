<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="6">
          <b-card-group style="padding: 20px;">
            <b-card img-src="./../images/banyoDikey.jpeg" img-alt="Image" img-top class="custom-card"  >
              <b-card-text>
                {{$t('banyo1')}}

              </b-card-text>
            </b-card>
            <b-card img-src="./../images/banyoDikey3.webp" img-alt="Image" img-top class="custom-card">
              <b-card-text>
                {{$t('banyo2')}}

              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col md="6">
          <b-card-group style="padding: 20px; ">
            <b-card img-src="./../images/kahvalti.jpg" img-alt="Image" img-bottom class="custom-card">
              <b-card-text>
                {{$t('yemek1')}}

              </b-card-text>
            </b-card>
            <b-card img-src="./../images/RESTORAN.jpg" img-alt="Image" img-bottom class="custom-card">
              <b-card-text>
                {{$t('yemek2')}}

              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "banyo",
};
</script>

<style scoped>
.custom-card {
  background-color: #f7f7f7;
  margin-bottom: 20px;
  max-width: 100%;
  border-radius: 10px;
  border: none;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
