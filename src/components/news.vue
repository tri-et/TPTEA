<template>
  <q-carousel class="component-top" style="max-width: 700px;margin:auto; height:300px">
    <q-carousel-slide img-src="assets/component.jpg">
      <div class="absolute-top-left custom-caption-top">
        <div class="q-display-1" bg-color="brown-1">Bring on the fruit</div>
        <q-btn class="fixed-bottom-left q-ml-sm q-mb-sm" color="white" text-color="brown" rounded>
          <q-item @click.native="show">
            <q-item-main label="test" />
          </q-item>
        </q-btn>
        <slot></slot>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>
<script>
export default {
  methods: {
    show() {
      this.$slots.default[0].componentInstance.opened = true
    },
  },
}
</script>
<style>
</style>
