import {GiftCard} from '../../models'
import {_authAdmin, genGiftCard} from '../../util'
const resolvers = {
  RootQuery: {
    async fetchGiftCards(_, __, {loggedInUser}) {
      _authAdmin(loggedInUser)
      return await GiftCard.findAll()
    },
  },
  RootMutation: {
    async deleteGiftCard(_, {input}, {loggedInUser}) {
      _authAdmin(loggedInUser)
      return await GiftCard.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
    async createGiftCard(_, {input}, {loggedInUser}) {
      _authAdmin(loggedInUser)
      return await GiftCard.create(input).then(async function(giftCard) {
        let code = genGiftCard(giftCard.id)
        return await giftCard.update({code}).then(giftCard => giftCard)
      })
    },
  },
  GiftCard: {
    async userName(giftCard, _, {loggedInUser}) {
      _authAdmin(loggedInUser)
      let customer = await giftCard.getCustomer()
      return customer && customer.get('username')
    },
  },
}
export default resolvers
