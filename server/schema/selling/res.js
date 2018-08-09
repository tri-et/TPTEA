import {Selling} from '../../models'
import {_auth} from '../../util'

const resolvers = {
  RootQuery: {
    async listSelling(_, __, {authUser}) {
      _auth(authUser)
      return await Selling.all()
    },
  },
  RootMutation: {
    async deleteSelling(_, {input}, {authUser}) {
      _auth(authUser)
      return await Selling.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
    async updateSelling(_, {input}, {authUser}) {
      _auth(authUser)
      return await Selling.upsert(input).then(() => {
        return input
      })
    },
  },
  Selling: {
    // async product(selling, _, {authUser}) {
    //   _auth(authUser)
    //   return await Product.findById(selling.productId)
    // },
    async productName(selling, _, {authUser}) {
      _auth(authUser)
      return await selling.getProduct().get('name')
    },
  },
}

export default resolvers
