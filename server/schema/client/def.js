const Client = `
  type Client {
    id: Int
    taxCode: String
    name: String
    address: String
    phone: String
    notes: String
  }
  input ClientInput {
    id: Int
    taxCode: String
    name: String
    address: String
    phone: String
    notes: String
  }
`
export default Client
