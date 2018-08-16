<template>
  <div class="flex flex-center loading" :class="{'hidden':hidden}">
    <img class="light" alt="Quasar logo" src="~assets/light.png">
    <div class="logo-loading">
      <img class="resizeLogo" alt="Quasar logo" src="~assets/logo.png">
      <q-spinner-bars color="brown-14" :size="40" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hidden: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.hidden = true
    }, 5000)
  },
}
</script>
<style>
.loading {
  max-width: 100vw;
  max-height: 100vh;
  position: fixed;
  z-index: 9998 !important;
  width: 100%;
  height: 100%;
  background-image: url('~assets/homeBannerBg.jpg');
}
.logo-loading {
  display: grid;
  justify-items: center;
}
.resizeLogo {
  transform: scale(0.6);
}
.light {
  transform: scale(0.6);
  position: absolute;
  top: -47px;
  right: -53px;
}
</style>
