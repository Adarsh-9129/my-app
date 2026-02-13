import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Interface (Type Safety ke liye)
 */
export interface IDemo extends Document {
  studentName: string;
  parentEmail: string;
  phone: string;
  className: string;
  message?: string;
  createdAt: Date;
}

/**
 * Schema
 */
const DemoSchema: Schema<IDemo> = new Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    parentEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    className: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      default: "",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false, // kyunki hum manually createdAt rakh rahe hain
  }
);

/**
 * Model
 */
const Demo: Model<IDemo> =
  mongoose.models.Demo || mongoose.model<IDemo>("Demo", DemoSchema);

export default Demo;
