import { useEffect, useState } from "react";
import endpoints from "../NetworkConfig";

interface Blog {
  _id: string;
  title: string;
  content: string;
}

function GetAllBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getAllBlogs = async () => {
    try {
      const response = await fetch(endpoints.getAllBlog, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setBlogs(data.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  useEffect(() => {
    getAllBlogs();

    const eventSource = new EventSource(endpoints.getBlogsStream);

    eventSource.onmessage = (event: MessageEvent) => {
      try {
        const updatedBlog: Blog = JSON.parse(event.data);
        setBlogs((prevBlogs) => [updatedBlog, ...prevBlogs]);
      } catch (error) {
        console.error("Error parsing SSE data", error);
        setError("Failed to parse the incoming blog data.");
      }
    };

    eventSource.onerror = (error) => {
      console.error("Error with SSE connection", error);
      setError("Failed to connect to the server for real-time updates.");
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold text-center">All Blogs</h1>

      {error && <div className="text-red-500">{error}</div>}

      <div className="flex flex-col items-center justify-center w-full">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col items-center justify-center w-full p-4 border-b-2"
            >
              <h2 className="text-2xl font-bold text-center">{blog.title}</h2>
              <p className="text-xl text-center">{blog.content}</p>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
}

export default GetAllBlogs;
