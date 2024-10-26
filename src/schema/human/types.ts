export const  Humantypes = `#graphql

type Human {
    id: ID!
    name: String!
}

extend type Query {
    humans: [Human]
}

extend type Mutation {
    addHuman(id:String!): Human
    editHuman(id:String!): Human
}
`;


