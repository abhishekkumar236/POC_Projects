import { Request, Response } from "express";
import Blog from "../models/blog.model";

export async function blogsEvent(req: Request, res: Response) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const changeStream = Blog.watch();

  if (changeStream) {
    changeStream.on("change", async (change) => {
      const blog = await Blog.findById(change.documentKey._id).select(
        "title content"
      );
      if (blog) {
        res.write(`data: ${JSON.stringify(blog)}\n\n`);
      }
    });

    changeStream.on("error", (error) => {
      console.error("Change stream error:", error);
      res.write(`data: {"error": "Error with change stream"}\n\n`);
    });
  }

  req.on("close", () => {
    changeStream.close();
  });
}
