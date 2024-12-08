import { useNavigate } from "react-router-dom";

function Header(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row sticky w-full h-16 bg-slate-600 justify-between">
      <div className="flex items-center justify-center text-2xl px-6">
        SSE Demo
      </div>
      <div className="flex flex-row items-center justify-between px-6">
        <button
          onClick={() => navigate("/add-blog")}
          className="px-6 py-2 rounded-full hover:bg-slate-500"
        >
          Add Blog
        </button>
        <button
          onClick={() => navigate("/blogs")}
          className="px-6 py-2 rounded-full hover:bg-slate-500"
        >
          Blog List
        </button>
      </div>
    </div>
  );
}

export default Header;
