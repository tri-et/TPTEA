export default {
  recs: {},
  isLoading: false,
  placeOrderMothod: {
    deliveryStoreId: null,
    deliveryAddress: '',
    deliveryContact: '',
    pickUpStoreId: 0,
    pickUpTime: new Date().setMinutes(new Date().getMinutes() + 30),
    isStorePickUp: false,
  },
}
