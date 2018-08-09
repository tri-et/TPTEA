const Selling = `
  type Selling {
    id: Int
    price: Int
    quantity: Int
    unit: String
    productName: String
  }
  input SellingInput {
    id: Int
    invoiceId: Int!
    productId: Int!
    price: Int!
    quantity: Int!
    unit: String
  }
`
export default Selling
