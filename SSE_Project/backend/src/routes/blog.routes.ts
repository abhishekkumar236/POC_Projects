import * as BlogController from "../controllers/blog.controller";
import * as BlogEvents from "../events/blog.event";
import { Router } from "express";

const router = Router();

router.post("/blog", BlogController.addBlog);
router.put("/blog/:id", BlogController.updateBlog);
router.get("/blogs", BlogController.getAllBlogs);
router.get("/blog/:id", BlogController.getBlogById);
router.delete("/blog/:id", BlogController.deleteBlog);
router.get("/blogs/stream", BlogEvents.blogsEvent);
export default router;
