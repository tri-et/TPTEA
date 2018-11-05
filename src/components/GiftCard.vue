<template>
  <div class="gift-card row">
    <div class="col-7">
      <q-list no-border class="q-mt-md q-pt-none">
        <q-list-header class="text-center q-pa-none">TPT TEA</q-list-header>
        <q-item-separator />
        <q-item class="q-ml-none">
          <q-item-side icon="payment" />
          <q-item-main class="q-ml-none" label="Amount:" />
          <q-item-side right>
            <q-item-tile color="secondary">{{"$"+amount}}</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item>
          <q-item-side icon="timer" />
          <q-item-main label="Expired Date:" />
          <q-item-side right>
            <q-item-tile color="secondary">{{createdDate|calculateExpiredDate(expiry)}}</q-item-tile>
          </q-item-side>
        </q-item>
      </q-list>
    </div>
    <div class="col-5">
      <gen-qr-code dark="#000" :qrcode="code" />
    </div>
  </div>
</template>
<script>
import genQrCode from './GenQRCode'
import {date} from 'quasar'
export default {
  props: {
    code: {
      type: String,
      default: 'xxx',
    },
    amount: {
      type: Number,
      default: 0,
    },
    expiry: {
      type: Number,
      default: 0,
    },
    createdDate: {
      type: String,
      default: new Date().toDateString(),
    },
  },
  components: {
    genQrCode,
  },
  filters: {
    calculateExpiredDate(val, expiry) {
      let {addToDate} = date
      return date.formatDate(addToDate(new Date(val), {days: expiry}), 'DD/MM/YYYY')
    },
  },
}
</script>
<style lang="stylus" scoped>
.gift-card
  background-color white
  max-width 450px

.q-item-side
  min-width 0 !important

.q-list-header
  min-height 20px
</style>
