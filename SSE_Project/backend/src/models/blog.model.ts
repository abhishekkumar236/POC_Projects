import { Document, Schema, model } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IBlog>("Blog", blogSchema);
