export default function Alert({ children }) {
  return (
    <div className="bg-red-200 text-red-500 border border-red-500 rounded-md text-center p-1">
      {children}
    </div>
  );
}
