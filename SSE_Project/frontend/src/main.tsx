import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import AddBlog from "./components/addBlog.tsx";
import GetAllBlogs from "./components/blogs.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/blogs" element={<GetAllBlogs />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
