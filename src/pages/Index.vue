<template>
  <div>home</div>
</template>

<style>
.resizeLogo {
  transform: scale(0.6);
}
.light {
  transform: scale(0.6);
  position: absolute;
  top: -47px;
  right: -53px;
}
.bg-home {
  background-image: url('~assets/homeBannerBg.jpg');
}
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    show(options) {
      this.$q.loading.show(options)
      setTimeout(() => {
        this.$q.loading.hide()
      }, 100000)
    },
    noMessage() {
      this.show()
    },
  },
}
</script>
