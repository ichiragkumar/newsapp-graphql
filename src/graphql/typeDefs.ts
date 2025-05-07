// src/graphql/typeDefs.ts
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type News {
    id: ID!
    title: String!
    content: String!
    author: String!
    tags: [String]
    publishedAt: String
  }

  type Query {
    getAllNews: [News]
    getNewsById(id: ID!): News
  }

  type Mutation {
    createNews(title: String!, content: String!, author: String!): News
  }
`;
