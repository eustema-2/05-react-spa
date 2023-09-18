import { twMerge } from "tailwind-merge";
import { CiLogout } from "react-icons/ci";

import Logo from "./Logo";

import { useAuth } from "../context/AuthContext";

export default function Header({ className }) {
  const { handleLogout } = useAuth();
  return (
    <header
      className={twMerge(
        "bg-white border-b border-gray-200 p-2 flex items-center justify-between",
        className
      )}
    >
      <Logo />

      <CiLogout onClick={handleLogout} size={28} />
    </header>
  );
}
