import {Customer, Order, OrderDetail, Menu} from '../../models'
// import {_auth} from '../../util'
const resolvers = {
  RootQuery: {
    async listMember(_, __, {authUser}) {
      // _auth(authUser)
      return await Customer.findAll({
        where: {
          id: 4,
        },
      })
    },
    async listOrderHistory(_, __, {authUser}) {
      // _auth(authUser)
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
