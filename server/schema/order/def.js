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
    name: String
    menu: [Menu]
  }
  type Menu {
    id: Int
    name: String
    price: String
  }
  type MenuCategory {
    id: Int
    name: String
    desc: String
    img: String
  }
  type SubMenuCategory {
    id: Int
    subMenu: [Menu]
  }
`
export default Order
