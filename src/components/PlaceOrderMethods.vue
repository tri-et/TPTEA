<template>
  <div>
    <div class="title bg-primary">place order methods</div>
    <div class="row q-ma-md text-primary text-weight-bold">
      <q-radio v-model="option" class="col-12 q-mb-sm" val="opt1" label="COD Delivery"/>
      <div class="q-ml-lg text-weight-regular">
        <q-field icon="home">
          <q-input v-model="deliveryAddress" type="textarea" class="max-width" placeholder="Delivery Address" hide-underline/>
        </q-field>
        <q-field icon="contact_phone">
          <q-input v-model="deliveryContact" type="textarea" class="max-width" placeholder="Name - Phone" hide-underline/>
        </q-field>
      </div>
    </div>
    <div class="row q-ma-md text-primary text-weight-bold">
      <q-radio v-model="option" class="col-12 q-mb-sm" val="opt2" label="Store Pick-up"/>
      <div class="q-ml-lg text-weight-regular">
        <q-field icon="store">
          <q-select
            v-model="select"
            placeholder="Please select store"
            :options="getRecs.map(opt=>({label:opt.name,value:opt.id}))"
            hide-underline
            class="max-width"
          />
        </q-field>
        <q-field icon="access_time">
          <!-- <q-input v-model="pickUpTime" placeholder="Time Pick Up" hide-underline/> -->
          <q-datetime v-model="pickUpTime" type="time" hide-underline/>
        </q-field>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  props: {
    rawData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      deliveryAddress: '',
      deliveryContact: '',
      // pickUpTime: '',
      option: 'opt1',
      select: 0,
      pickUpTime: new Date().setMinutes(new Date().getMinutes() + 30),
    }
  },
  computed: {
    ...mapGetters('store', ['getRecs']),
  },
  methods: {
    ...mapActions('store', ['fetchRecs']),
  },
  mounted() {
    this.deliveryAddress = this.rawData.deliveryAddress
    this.deliveryContact = this.rawData.deliveryContact
    this.fetchRecs()
  },
  watch: {
    model(newData) {
      console.log(newData)
    },
  },
}
</script>
<style lang="stylus" scoped>
.title
  height 40px
  color #fff
  text-transform capitalize
  justify-content center
  display flex
  align-items center

.max-width
  min-width 300px
</style>
