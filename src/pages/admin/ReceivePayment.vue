<template>
  <div class="q-pt-md row justify-center receive-payment">
    <q-field icon="attach_money" class="q-mb-md" :label-width="4">
      <q-input color="secondary" placeholder="Amount" v-model="amount"/>
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
      let reg = new RegExp(/^[1-9]+(\.?\d{1,})?$/)
      return !reg.test(this.amount) || this.getIsDisabled
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
      this.setIsDisabled(false)
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
  mounted() {
    addEventListener('keypress', evt => {
      let charCode = evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) evt.preventDefault()
      else return true
    })
  },
}
</script>
<style lang="stylus" scoped>
.receive-payment
  max-width 350px
  margin auto

.title-receive
  font-size 24px

.receive-content
  max-width 213px
</style>
