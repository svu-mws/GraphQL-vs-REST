module.exports = `
  type User {
    id: String!
    name: String!
    email: String!
    imageUrl: String!
    comments: [Comment]
  }
  type Query {
    user(id: String!): User
    users: [User]
  }
  type Mutation {
    addUser(name: String!, email: String!): User
    editUser(id: String, name: String, email: String): User
    deleteUser(id: String, name: String, email: String): User
  }
`;
