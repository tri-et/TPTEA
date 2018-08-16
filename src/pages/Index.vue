<template>
    <q-pull-to-refresh :handler="refresher">
    <q-page padding class="bg-white">
      <p class="caption" style="background-color: red;height: 100px;">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
        <q-btn icon="map" absolute-bottom/>
      </p>
      <p class="caption" >
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
      <p class="caption">
        Pull down to refresh on the content below.
        On desktop it works by dragging the content down.
      </p>
    </q-page>
  </q-pull-to-refresh>
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
