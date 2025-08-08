import { Schema } from 'mongoose';

export const PackageSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stay: { type: String, required: true },
  description: { type: String },
  rating: { type: Number },
  image: { type: String, require: false },
  status: { type: String, enum: ['outbound', 'inbound'], required: true },
  inclusion: [{ type: String }],
  destination: { type: String }
});