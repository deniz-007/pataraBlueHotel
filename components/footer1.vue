<template>
  <footer class="footer" style="background-color: rgba(0, 0, 0, 0.7);">
    <div class="container">
      <div class="row">
        <div class="col-md-4 order-md-2">
          <p><b-icon icon="geo-alt-fill"></b-icon> Address: Gelemiş, Gonca1 Sokak No:8, 07976 Kaş/Antalya</p>
          <p><b-icon-phone/> Phone: 0545 699 96 19</p>
          <p><b-icon-mailbox/> Email: info@patarabluehotel.com</p>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
import { BIconFacebook} from 'bootstrap-vue'
import { BIconInstagram} from 'bootstrap-vue'
import { BIconPhone} from 'bootstrap-vue'
import { BIconMailbox} from 'bootstrap-vue'

export default {
  name: 'Footer',
  components: {
    BIconFacebook,
    BIconInstagram,
    BIconPhone,
    BIconMailbox,
  }

}
</script>

<style scoped>
.footer h3 {
  color: white;
  font-weight: bold;
}

.footer p {
  color: white;
}

.footer ul li {
  display: inline-block;
  margin-right: 10px;
}

.footer b-icon-facebook,
.footer i.fab {
  font-size: 24px;
  color: white;
}

/* Add your custom CSS for the footer here */
</style>
