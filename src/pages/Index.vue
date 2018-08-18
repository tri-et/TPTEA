<template >
<div>
  <q-carousel class="component-top" style="max-width: 700px;margin:auto; height:400px" >
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
         <q-modal v-model="basicModal" :content-css="{minWidth: '50vw'}">
      <div style="padding: 50px">
        <div class="q-display-1 q-mb-md">Basic Modal</div>
        <p v-for="n in 25" :key="`a-${n}`">Scroll down to close</p>
        <q-btn color="primary" @click="basicModal = false" label="Close" />
      </div>
    </q-modal>
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
  <q-carousel>
     <img  src="assets/panel.jpg" alt="Tptea" style="max-width: 700px;margin:auto; height:400px">
  </q-carousel>
  <q-carousel>
     <q-modal v-model="opened">
    <h4>Basic Modal</h4>
    <q-btn
      color="primary"
      @click="opened = false"
      label="Close"
    />
  </q-modal>
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
</style>

<script>
export default {
  data() {
    return {
      basicModal: false,
      imageSrc: 'assets/component.jpg',
      types: [
        {
          label: 'Learn More',
          show: () => {
            this.basicModal = true
          },
        },
      ],
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
