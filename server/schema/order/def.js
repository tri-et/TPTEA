const Order = `
  type OrderHistory {
    id: Int
    customerId: Int
    createdAt : Date
    OrderDetails:[OrderDetail]
  }
  type OrderDetail {
    orderId: Int
    menuId : Int
    quantity: Int
    price: Float
    menuname: String
    menu: [Menu]
  }
  type Menu {
    name :String
  }
  type MenuCategory {
    id: Int
    name: String
    desc: String
    img: String
  }
`
export default Order
