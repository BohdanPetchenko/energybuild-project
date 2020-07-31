var {buildSchema} = require('graphql');

module.exports = { 
public: buildSchema(`
type User {
  token: String!
}
type StringResult {
  value: String!
}
input UserInput {
  username: String!
  surname: String!
  email: String!
  password: String!
  confirm: String!
}
input LoginUserInput {
  email: String!
  password: String!
}
type RootQuery {
  loginUser(loginUserInput: LoginUserInput): User
}
type RootMutation {
  registerUser(userInput: UserInput): StringResult
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`),
protected: buildSchema(`

input OrderInput {
  nameOrganization: String!
  addressOrganization: String!
  contactNumber: String!
  orderWorks: [ String ]!
}

input OrderStatusInput {
  orderId: String!
  statusId: String!  
}

type Work {
  id: String!
  nameWork: String!
  foreman: String!
}
type Status {
  id: String
  type: String
}
type Order {
  id: String!
  nameOrganization: String!
  addressOrganization: String!
  contactNumber: String!
  orderWorks: [ Work ]
  status: Status!
}
type StringResult {
  value: String!
}
type User {
  token: String!
}
type UserData {
  id: String!
  userName: String!
  surname: String!
  email: String!
  role:[String]
  orders: [Order]!
}
type RootMutation {
  createOrder(orderInput: OrderInput): StringResult
  changeOrderStatus(orderStatusInput: OrderStatusInput): StringResult
}
type RootQuery {
  getOrders: [Order]
  getAllUsers: [UserData]
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`)}