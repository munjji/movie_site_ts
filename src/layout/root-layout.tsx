import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
