import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline">
        Torna all'home page
      </Link>
    </div>
  );
}
