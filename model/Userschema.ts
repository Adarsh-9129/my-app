import mongoose from 'mongoose';
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);