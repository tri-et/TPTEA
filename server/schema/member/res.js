import {Customer, Order, OrderDetail, Menu} from '../../models'
const resolvers = {
  RootQuery: {
    async listMember() {
      return await Customer.findAll({
        where: {
          id: 15,
        },
      })
    },
    async listOrderHistory() {
      return await Order.findAll({
        where: {
          customerId: 4,
        },
        include: [
          {
            model: OrderDetail,
            include: [
              {
                model: Menu,
              },
            ],
          },
        ],
      })
    },
  },
  RootMutation: {},
  OrderDetail: {
    async menuname(orderDetail) {
      return orderDetail.getMenu().get('name')
    },
  },
}

export default resolvers
