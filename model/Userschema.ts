import mongoose from 'mongoose';
const { Schema } = mongoose;

const EnquirySchema = new Schema({
  studentName: { type: String, required: true },
  parentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  classApplying: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);