import Blog from "../models/blog.model";
import { Request, Response, NextFunction } from "express";
import sendResponse from "../utils/sendResponse";

export async function addBlog(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body;

    const blog = await Blog.create(data);

    return sendResponse(res, {
      status: 201,
      message: "Blog created successfully",
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateBlog(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const data = req.body;

    const blog = await Blog.findByIdAndUpdate(id, data, { new: true });

    return sendResponse(res, {
      status: 200,
      message: "Blog updated successfully",
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllBlogs(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    return sendResponse(res, {
      status: 200,
      message: "Blogs fetched successfully",
      success: true,
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
}

export async function getBlogById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    return sendResponse(res, {
      status: 200,
      message: "Blog fetched successfully",
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteBlog(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    return sendResponse(res, {
      status: 200,
      message: "Blog deleted successfully",
      success: true,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
}
