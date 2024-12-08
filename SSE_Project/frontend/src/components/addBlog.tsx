import { useState, ChangeEvent, FormEvent } from "react";
import endpoints from "../NetworkConfig";

interface Blog {
  title: string;
  content: string;
}

const AddBlog = () => {
  const [blog, setBlog] = useState<Blog>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await fetch(endpoints.addBlog, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    const response = await data.json();
    console.log(response);
    if (response.success) {
      alert("Blog added successfully");
    } else {
      alert("Blog not added");
    }

    setBlog({ title: "", content: "" });
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full justify-center items-center gap-7"
      >
        <div className="flex flex-col w-4/5">
          <label htmlFor="title" className="text-2xl font-semibold pb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            required
            className="h-10 rounded-lg bg-slate-400 text-white pl-2"
          />
        </div>

        <div className="flex flex-col w-4/5">
          <label htmlFor="content" className="text-2xl font-semibold pb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={blog.content}
            onChange={handleChange}
            required
            className="h-40 rounded-lg bg-slate-400 text-white pl-2 pt-2"
          />
        </div>

        <div className="w-4/5">
          <button
            type="submit"
            className="w-full bg-blue-800 py-3 rounded-full font-bold text-xl"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
