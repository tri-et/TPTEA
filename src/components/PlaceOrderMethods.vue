<template>
  <div>
    <div class="title bg-primary">place order methods</div>
    <div class="row q-ma-md text-primary text-weight-bold">
      <q-radio v-model="method" class="col-12 q-mb-sm" val="delivery" label="COD Delivery" @input="validateMethod"/>
      <div class="q-ml-lg text-weight-regular">
        <q-field icon="home">
          <q-input
            :disable="method!=='delivery'"
            v-model="placeOrderMothod.deliveryAddress"
            type="textarea"
            class="max-width"
            placeholder="Delivery Address"
            hide-underline
          />
        </q-field>
        <q-field icon="contact_phone">
          <q-input
            :disable="method!=='delivery'"
            v-model="placeOrderMothod.deliveryContact"
            type="textarea"
            class="max-width"
            placeholder="Name - Phone"
            hide-underline
          />
        </q-field>
      </div>
    </div>
    <div class="row q-ma-md text-primary text-weight-bold">
      <q-radio v-model="method" class="col-12 q-mb-sm" val="store" label="Store Pick-up" @input="validateMethod"/>
      <div class="q-ml-lg text-weight-regular">
        <q-field icon="store">
          <q-select
            v-model="placeOrderMothod.pickUpStoreId"
            :disable="method!=='store'"
            placeholder="Please select store"
            :options="getRecs.map(opt=>({label:opt.name,value:opt.id}))"
            hide-underline
            class="max-width"
          />
        </q-field>
        <q-field icon="access_time">
          <q-datetime :disable="method!=='store'" v-model="placeOrderMothod.pickUpTime" type="time" hide-underline/>
        </q-field>
      </div>
    </div>
  </div>
</template>
<script>
import _d from 'lodash'
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  props: {
    rawData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      method: 'delivery',
      placeOrderMothod: {},
    }
  },
  computed: {
    ...mapGetters('store', ['getRecs']),
    ...mapGetters('customerorder', ['getPlaceOrderMethod']),
  },
  methods: {
    ...mapActions('store', ['fetchRecs']),
    ...mapMutations('customerorder', ['setPlaceOrderMethod']),
    validateMethod() {
      this.placeOrderMothod.isStorePickUp = this.method !== 'delivery'
    },
  },
  mounted() {
    this.placeOrderMothod = _d.cloneDeep(this.getPlaceOrderMethod)
    this.placeOrderMothod.deliveryAddress = this.rawData.deliveryAddress
    this.placeOrderMothod.deliveryContact = this.rawData.deliveryContact
    this.fetchRecs()
  },
  watch: {
    placeOrderMothod: {
      handler: function() {
        this.setPlaceOrderMethod(this.placeOrderMothod)
      },
      deep: true,
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
  min-width 250px
</style>
