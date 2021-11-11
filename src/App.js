import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function App() {
  return (
    <div className= "bg-gray-100">
      <TopBar />
      <div className="flex flex-col h-screen w-screen">
        <div className="flex w-screen h-2/5"></div>
        <div className="flex h-3/5 w-screen bg-teal-300"></div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
