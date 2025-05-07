// src/graphql/resolvers/news.resolver.ts
import { NewsModel } from '../../models/News';

export const resolvers = {
  Query: {
    getAllNews: async () => await NewsModel.find(),
    getNewsById: async (_: any, { id }: { id: string }) => await NewsModel.findById(id),
  },
  Mutation: {
    createNews: async (_: any, { title, content, author }: any) => {
      const news = new NewsModel({ title, content, author, publishedAt: new Date() });
      return await news.save();
    },
  },
};
