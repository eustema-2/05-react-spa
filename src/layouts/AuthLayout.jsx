import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 shadow rounded-md">
        <Outlet />
      </div>
    </div>
  );
}
