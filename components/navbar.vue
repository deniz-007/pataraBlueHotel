<template>
  <div class="navbar-wrapper">
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Left aligned nav items -->
        <b-navbar-nav>
          <nuxt-link to="/tr" class="nav-link custom-nav-link">{{ $t('home') }}</nuxt-link>
          <b-navbar-nav>
            <nuxt-link class="nav-link custom-nav-link" to="/tr/blueHotel">{{ $t('blueHotel') }}</nuxt-link>
            <nuxt-link class="nav-link custom-nav-link" to="/tr/patara">Patara</nuxt-link>
            <nuxt-link class="nav-link custom-nav-link" to="/tr/contact">{{ $t('contact') }}</nuxt-link>
          </b-navbar-nav>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang">
            <b-dropdown-item @click="setLanguage('en')" class="custom-dropdown-item">EN</b-dropdown-item>
            <b-dropdown-item @click="setLanguage('tr')" class="custom-dropdown-item">TR</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <a href="#" class="ml-auto">
        <b-navbar-brand>
          <img src="./../images/logo.jpg" alt="Logo" style="width: 60px; height: 60px;">
        </b-navbar-brand>
      </a>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      languages: [
        {
          language: "tr",
          title: "tr",

        },
        {
          language: "en",
          title: "en",
        },
      ],
      current_language: this.$i18n.locale,
    }
  },
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
    /**
     * Set languages
     */
    setLanguage(locale) {
      this.$i18n.locale = locale;
      this.current_language = locale;
      this.$router.push(this.switchLocalePath(locale));
    },
  },
  name: "navbar",
};
</script>

<style scoped>
.navbar-wrapper {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: transparent !important; /* overrides the default background color */
  box-shadow: none !important; /* removes the default box-shadow */
}
.navbar {
  background-color: transparent !important; /* overrides the default background color */
}
.custom-nav-link {
  color: #333333 !important; /* overrides the Bootstrap styles */
  font-weight: bold;
}
.custom-dropdown-item {
  font-weight: bold;
}
</style>
