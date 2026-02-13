import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Interface
 */
export interface IContact extends Document {
  fullName: string;
  email: string;
  phone?: string; // Optional
  subject: string;
  message: string;
  createdAt: Date;
}

/**
 * Schema
 */
const ContactSchema: Schema<IContact> = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      default: "",
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

/**
 * Model
 */
const Contact: Model<IContact> =
  mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
