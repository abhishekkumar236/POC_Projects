import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB:", connection.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
