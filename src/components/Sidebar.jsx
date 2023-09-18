import { twMerge } from "tailwind-merge";

export default function Sidebar({ className }) {
  return (
    <aside
      className={twMerge("bg-white border-r border-gray-200 p-2", className)}
    ></aside>
  );
}
