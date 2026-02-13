import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * Interface
 */
export interface IReview extends Document {
    name: string;
    contact: string;
    rating: number;
    message: string;
    createdAt: Date;
}

/**
 * Schema
 */
const ReviewSchema: Schema<IReview> = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        contact: {
            type: String,
            required: true,
            trim: true,
        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
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
const Review: Model<IReview> =
    mongoose.models.Review ||
    mongoose.model<IReview>("Review", ReviewSchema);

export default Review;
