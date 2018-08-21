<template >
<div>
  <q-carousel class="component-top" style="max-width: 700px;margin:auto; height:300px" >
    <q-carousel-slide img-src="assets/component.jpg">
      <div class="absolute-top-left custom-caption-top">
      <div class="q-display-1">Bring on the fruit</div>
      <q-btn class="fixed-bottom-left btnlearn" rounded>
        <q-item
          v-for="modal in types"
          :key="modal.label"
          @click.native="modal.show()"
        >
          <q-item-main :label="modal.label" />
        </q-item>
      </q-btn>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <q-carousel class="component-top" style="max-width: 700px;margin:auto; height:300px" >
    <q-carousel-slide img-src="assets/component-mid.jpg">
    <div class="inner-top">Discover coffee</div>
      <div class="absolute-top-left custom-caption-mid">
        <div class="q-display-1">Find a new favorite</div>
      <q-btn class="fixed-bottom-left btnlearn" rounded>
        <q-item
          v-for="modal in types2"
          :key="modal.label2"
          @click.native="modal.show()"
        >
          <q-item-main :label="modal.label2" />
        </q-item>
      </q-btn>
      </div>
    </q-carousel-slide>
  </q-carousel>
  <q-carousel>
     <img  src="assets/panel.jpg" alt="Tptea" style="max-width: 700px;margin:auto; height:300px">
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
.q-display-1 {
  font-size: 40px;
}
.inner-top {
  font-size: 24px;
  color: cyan;
}
.q-layout-header {
  box-shadow: inherit;
}

.q-modal-layout-content {
  overflow-x: hidden;
}
</style>

<script>
export default {
  data() {
    return {
      opened: false,
      basicModal: false,
      basicModal2: false,
      imageSrc: 'assets/component.jpg',
      types: [
        {
          label: 'Learn More',
          show: () => {
            this.basicModal = true
          },
        },
      ],
      types2: [
        {
          label2: 'Discover coffe',
          show: () => {
            this.basicModal2 = true
          },
        },
      ],
    }
  },
  name: 'PageIndex',
  methods: {
    userHasScrolled(scroll) {
      var target = scroll.position / 100
      var pushtarget = target - 0.1
      if (scroll.direction === 'down') {
        document.getElementById('labels').style.opacity = target / 2
      } else {
        document.getElementById('labels').style.opacity = pushtarget / 2
      }
    },
  },
}
</script>
