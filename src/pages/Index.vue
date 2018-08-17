<template >
<div>
  <q-carousel class="component-top" style="max-width: 700px;margin:auto; height:400px" >
    <q-carousel-slide img-src="assets/component.jpg">
      <div class="absolute-top-left custom-caption-top">
        <div class="q-display-1">Bring on the fruit</div>
      <q-btn class="fixed-bottom-left btnlearn" rounded >
        <div>Learn More</div>
        </q-btn>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <q-carousel class="component-top" style="max-width: 700px;margin:auto; height:400px" >
    <q-carousel-slide img-src="assets/component-mid.jpg">
    <div class="inner-top">Discover coffee</div>
      <div class="absolute-top-left custom-caption-mid">
        <div class="q-display-1">Find a new favorite</div>
      <q-btn class="fixed-bottom-left btnlearn" rounded >
        <div>Discover coffee</div>
        </q-btn>
      </div>
    </q-carousel-slide>
  </q-carousel>
  </div>
</template>

<style>
.custom-caption-top {
  text-align: center;
  color: white;
  margin-top: 20px;
  margin-left: 20px;
}
.custom-caption-mid {
  text-align: center;
  color: white;
  margin-top: 50px;
  margin-left: 20px;
}
.component-top {
  padding: 5px 0 10px 0;
}
.btnlearn {
  color: black;
  background-color: white;
  margin-bottom: 20px;
  margin-left: 20px;
}
.q-display-1{
font-size: 40px;
}
.inner-top{
  font-size: 24px;
  color: cyan
}
</style>

<script>
export default {
  data() {
    return {
      imageSrc: 'assets/component.jpg',
    }
  },
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
