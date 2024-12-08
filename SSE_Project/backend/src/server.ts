import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db/connect";
import blogRoutes from "./routes/blog.routes";
import errorHandler from "./middlewares/errorHandler.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", blogRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(process.env.PORT, async () => {
  console.log("Server is running on port 3000");
  await connectDB();
});
