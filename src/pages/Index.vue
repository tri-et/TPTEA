<template>
    <q-pull-to-refresh :handler="refresher">
    <q-carousel-slide>
      <div class="custom-caption1" style="margin-bottom: 20px;">
        <div slot="loading">Loading...</div>
      <h3>Bring On The Fruit</h3>
      <p class="caption"></p>
      <q-btn class="button"
        rounded
        dense
        color:black
        size="20px"
        label="Learn More"
      />
      </div>
    </q-carousel-slide>
    <q-carousel-slide>
      <div class="custom-caption">
        <div slot="loading">Loading...</div>
      <h1>Parallax  Title</h1>
      <q-btn round color="secondary">
          <q-icon name="card_giftcard" />
      </q-btn>
      </div>
    </q-carousel-slide>
  </q-pull-to-refresh>
</template>

<style>
.button {
  background-color: white;
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
.custom-caption {
  background-image: url('~assets/homeBannerBg.jpg');
}
.custom-caption1 {
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
