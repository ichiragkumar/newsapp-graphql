// src/models/News.ts
import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  tags: [String],
  publishedAt: Date,
});

export const NewsModel = mongoose.model('News', NewsSchema);
