import { twMerge } from "tailwind-merge";

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        `bg-blue-500 text-white hover:opacity-90 transition-opacity px-4 py-2 rounded-md`,
        className
      )}
    >
      {children}
    </button>
  );
}
