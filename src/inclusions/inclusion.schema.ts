import { Schema } from 'mongoose';

export const InclusionSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String }
});