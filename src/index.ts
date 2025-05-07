// src/index.ts
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers/news.resolver';
import healthRouter from './rest/health.route';
import dotenv from 'dotenv';

dotenv.config();

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  app.use('/health', healthRouter);

  await mongoose.connect(process.env.MONGO_URI as string);
  console.log('MongoDB connected');

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
};

startServer();
