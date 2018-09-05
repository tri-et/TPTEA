import {Order, OrderDetail, Menu, MenuCategory} from '../../models'
import {_auth} from '../../util'
const resolvers = {
  RootQuery: {
    async listOrderHistory(_, __, {authCustomer}) {
      _auth(authCustomer)
      return await Order.findAll({
        where: {
          customerId: authCustomer.id,
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

    async listMenuCategory() {
      return await MenuCategory.findAll()
    },

    async listSubMenuCategory(_, {input}) {
      return await MenuCategory.findAll({
        include: [
          {
            model: Menu,
            as: 'subMenu',
            required: false,
            through: {attributes: []},
          },
        ],
        where: {
          id: input,
        },
      })
    },
  },
  RootMutation: {},
  OrderDetail: {
    async name(orderDetail) {
      return orderDetail.getMenu().get('name')
    },
  },
}

export default resolvers
