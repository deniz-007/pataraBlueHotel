<template>
  <b-container fluid class="p-4 bg-white">
    <b-row style="padding: 20px;">
      <b-col>
        <b-img thumbnail fluid src="./../images/eng1.png" alt="Image 1" class="dark-grey-frame"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="./../images/eng2.png" alt="Image 1" class="dark-grey-frame"></b-img>
      </b-col>
    </b-row>
    <b-row style="padding: 20px;">
      <b-col>
        <b-img thumbnail fluid src="./../images/ima.png" alt="Image 3" class="dark-grey-frame"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="./../images/yorum.png" alt="Image 2" class="dark-grey-frame"></b-img>
      </b-col>
    </b-row>
    <b-row style="padding: 20px;">
      <b-col>
        <b-img thumbnail fluid src="./../images/cebr.png" alt="Image 3" class="dark-grey-frame"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="./../images/Screenshot.png" alt="Image 2" class="dark-grey-frame"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "commentSection",
};
</script>

<style scoped>
.dark-grey-frame {
  border: 1px solid darkgrey;
  background-color: darkgrey;
}
</style>
