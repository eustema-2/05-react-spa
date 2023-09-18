import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="h-screen">
      <Header className="fixed top-0 left-0 w-full h-16 px-4 py-2" />
      <Sidebar className="fixed top-16 left-0 w-48 h-full p-4" />
      <div className="ml-48 pt-24 p-8">
        <Outlet />
      </div>
    </div>
  );
}
