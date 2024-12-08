import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <>
      <div className="h-screen w-full bg-slate-800 text-white overflow-y-hidden">
        <div className="pb-10">
          <Header />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
