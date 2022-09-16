import express from "express";
import { addBlog, deleteBlog, getAllBloges, getById, getByUserId, updateBlog } from "../controller/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBloges);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog );
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.delete("/user/:id", getByUserId);



export default blogRouter;