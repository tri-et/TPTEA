const Modifier = `
  type ModifierGroup {
    data: [Modifier]
    groupTitle: String
    groupType: String
  }
  type Modifier {
    id: Int
    name: String
    price: String
    isDefault: Boolean
    groupType: String
    groupTitle: String
  }
  type AdminModifier {
    id: Int
    name: String
    price: String
    isDefault: Boolean
    groupType: String
    groupTitle: String
  }
  input AdminModifierInput {
    id : Int
    name: String!
    price: String!
    isDefault: Boolean!
    groupType: String!
    groupTitle: String!
  }
  type MenuModifier {
    id: Int
    menuId: Int
    modifierId: Int
  }
`
export default Modifier
