<template>
  <div style="padding: 40px">
    <div>

      <b-card-group deck>
        <b-card
          style="border: none"
          class="custom-card-text"
          header-bg-variant="dark transparent"
          header-text-variant="white"
          border-variant="dark transparent"
          :header="$t('card8header')"
          align="center"
          v-b-hover="handleHover">
          <b-card-text>{{$t('card8text')}}</b-card-text>
          <div class="card-hover-overlay" v-if="isHovered">
            <b-button   @click="redirectToBooking" variant="outline-light">Book</b-button>
          </div>
          <b-icon-clock/>
        </b-card>


        <b-card
          style="border: none"
          class="custom-card-text"
          border-variant="dark transparent"
          header-bg-variant="dark transparent"
          :header="$t('card2header')"
          header-text-variant="white"
          header-border-variant="secondary"
          align="center"
          v-b-hover="handleHover"

        >
          <b-card-text> {{ $t('card2text') }} </b-card-text>
          <BIconTsunami/>
          <div class="card-hover-overlay" v-if="isHovered">
            <b-button       @click="redirectToBooking"
                            variant="outline-light">Book</b-button>
          </div>

        </b-card>
        <b-card
          style="border: none"
          class="custom-card-text"
          header-bg-variant="dark transparent"
          header-text-variant="white"
          border-variant="dark transparent"
          :header="$t('card5header')"
          align="center"
          v-b-hover="handleHover"
        >
          <b-card-text>{{$t('card5text')}}</b-card-text>
          <div class="card-hover-overlay" v-if="isHovered">
            <b-button    @click="redirectToBooking" variant="outline-light">Book</b-button>
          </div>
          <b-icon-flower1/>
        </b-card>

      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card
          style="border: none"
          class="custom-card-text"
          header-bg-variant="dark transparent" header-text-variant="white"
          border-variant="dark transparent"
          :header="$t('card4header')"
          align="center"
          v-b-hover="handleHover">
          <b-card-text>{{$t('card4text')}}</b-card-text>
          <b-icon-layout-text-sidebar-reverse/>
          <div class="card-hover-overlay" v-if="isHovered">
            <b-button    @click="redirectToBooking" variant="outline-light">Book</b-button>
          </div>
        </b-card>
        <b-card
          style="border: none"
          class="custom-card-text"
          border-variant="dark transparent"
          :header="$t('card3header')"
          header-border-variant="dark transparent"
          header-text-variant="white"
          header-bg-variant="dark transparent"
          align="center"
          v-b-hover="handleHover">
          <b-card-text>{{$t('card3text')}}</b-card-text>
          <b-icon-sun-fill/>
          <div class="card-hover-overlay" v-if="isHovered">
            <b-button
              @click="redirectToBooking"
              variant="outline-light">Book</b-button>
          </div>
        </b-card>
        <b-card
          style="border: none"
          class="custom-card-text"
          header-bg-variant="dark transparent"
          header-text-variant="white"
          border-variant="dark transparent"           :header="$t('card6header')"
          align="center"
          v-b-hover="handleHover"
        >
          <b-card-text>{{$t('card6text')}}</b-card-text>
          <b-icon-tree/>
          <div class="card-hover-overlay" v-if="isHovered">
            <b-button       @click="redirectToBooking" variant="outline-light">Book</b-button>
          </div>
        </b-card>

      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck class="mb-3">
        <b-card
          style="border: none"
          class="custom-card-text"
          header-bg-variant="dark transparent"
          header-text-variant="white"
          border-variant="dark transparent"
          :header="$t('card7header')"
          align="center"
          v-b-hover="handleHover">
          <b-card-text>{{$t('card7text')}}</b-card-text>
          <div class="card-hover-overlay" v-if="isHovered">
            <b-button      @click="redirectToBooking" variant="outline-light">Book</b-button>
          </div>
          <b-icon-recycle/>
        </b-card>
        <b-card
          v-b-hover="handleHover"
          style="border: none"
          class="custom-card-text"
          border-variant="dark transparent"
          :header="$t('card1header')"
          header-bg-variant="dark transparent"
          header-text-variant="white"
          align="center"

        >
          <b-card-text > {{ $t('card1text') }} </b-card-text>
          <BIconWifi/>
          <div class="card-hover-overlay" v-if="isHovered">
            <b-button       @click="redirectToBooking"
                            variant="outline-light">{{ this.$t('card1button') }}</b-button>
          </div>
        </b-card>


      </b-card-group>
    </div>
  </div>
</template>

<script>
import { BIconWifi } from 'bootstrap-vue'
import { BIconTsunami } from 'bootstrap-vue'
import { BIconSunFill} from 'bootstrap-vue'
import { BIconLayoutTextSidebarReverse} from 'bootstrap-vue'
import { BIconTree} from 'bootstrap-vue'
import { BIconFlower1} from 'bootstrap-vue'
import { BIconRecycle} from 'bootstrap-vue'
import { BIconClock} from 'bootstrap-vue'

export default {
  data() {
    return {
      isHovered: false
    };
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered
    },
    redirectToBooking() {
      window.location.href = 'https://www.etstur.com/Patara-Blue-Hotel';
    },
  },
  name: "possibilities",
  components: {
    BIconWifi,
    BIconTsunami,
    BIconSunFill,
    BIconLayoutTextSidebarReverse,
    BIconTree,
    BIconFlower1,
    BIconRecycle,
    BIconClock
  },
}
</script>

<style scoped>
.custom-card-text {
  background-color: #f7f7f7;
}
.custom-card-text {
  background-color: transparent;
}

.custom-card-text {
  background-color: transparent;
  position: relative;
}

.card-hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.custom-card-text:hover .card-hover-overlay {
  opacity: 1;
}

.card-hover-overlay .b-button {
  margin-top: 10px;
}
</style>
