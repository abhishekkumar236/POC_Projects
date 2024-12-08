const BASE_URL: string = "http://localhost:3001";

const endpoints: { [key: string]: string } = {
  addBlog: `${BASE_URL}/blog`,
  getAllBlog: `${BASE_URL}/blogs`,
  getBlog: `${BASE_URL}/blog/:id`,
  updateBlog: `${BASE_URL}/blog/:id`,
  deleteBlog: `${BASE_URL}/blog/:id`,
  getBlogsStream: `${BASE_URL}/blogs/stream`,
};

export default endpoints;
