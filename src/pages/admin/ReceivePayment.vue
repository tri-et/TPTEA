<template>
  <div class="q-pt-md row justify-center receive-payment">
    <q-field icon="attach_money" class="q-mb-md">
      <input type="number" v-model="amount" placeholder="Amount">
    </q-field>
    <q-btn label="Receive Payment" :disable="isDisabled" icon="payment" color="secondary" @click="openScaner()"/>
    <q-modal v-model="getIsDialogOpenned" no-backdrop-dismiss no-esc-dismiss minimized :content-css="{maxWidth: '290px',minWidth:'230px'} ">
      <q-modal-layout class="q-pt-md q-pr-md q-pl-md q-pb-md">
        <div class="row justify-center">
          <div class="title-receive q-pb-md">Receive Payment Info</div>
          <div class="receive-content">
            <q-field icon="account_circle" class="row inline" :label="`User Name: ${getReceived.username}`" :label-width="12"/>
            <q-field icon="payment" class="row inline" :label="`Charged Amount: $${getReceived.chargedAmount}`" :label-width="12"/>
            <q-field icon="account_balance_wallet" class="row inline" :label="`Balance: $${getReceived.balance}`" :label-width="12"/>
          </div>
          <q-btn class="q-mt-sm row col-4" color="secondary" label="OK" @click="closeDialog()"/>
        </div>
      </q-modal-layout>
    </q-modal>
    <q-modal v-model="scannerStarted" maximized>
      <q-modal-layout>
        <q-btn class="modal-title" flat icon="close" @click="closeScanner()"/>
        <component @scanned="receiveScannerCode" ref="scanner" v-bind:is="theScanner"/>
      </q-modal-layout>
    </q-modal>
  </div>
</template>
<script>
import QRCodeScanner from '../../components/qrcode/QRCodeScanner'
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  data() {
    return {
      isTopupOpened: true,
      scannerStarted: false,
      theScanner: null,
      amount: '',
    }
  },
  components: {QRCodeScanner},
  computed: {
    ...mapGetters('admin', ['getIsDialogOpenned', 'getReceived', 'getIsDisabled']),
    isDisabled() {
      return ['', '0'].indexOf(this.amount) >= 0 || (this.getIsDisabled && this.amount !== '')
    },
  },
  methods: {
    ...mapActions('admin', ['receivePayment']),
    ...mapMutations('admin', ['setIsDialogOpenned', 'setIsDisabled']),
    receiveScannerCode(jwtPayment) {
      this.closeScanner()
      this.receivePayment({amount: this.amount, jwtPayment})
    },
    closeScanner() {
      this.scannerStarted = false
      this.theScanner = null
    },
    openScaner() {
      this.scannerStarted = true
      this.theScanner = QRCodeScanner
      this.setIsDisabled(true)
    },
    closeDialog() {
      this.setIsDialogOpenned(false)
      this.amount = ''
    },
  },
}
</script>
<style lang="stylus" scoped>
@import '~variables'

.receive-payment
  max-width 350px
  margin auto

.title-receive
  font-size 24px

.receive-content
  max-width 213px

input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button
  -webkit-appearance none
  margin 0

input[type=number]
  outline-color $secondary
  width 135px
</style>
