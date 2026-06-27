import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-4   border-b border-gray-700 pb-2">
        Navigation
      </h2>

      <Link
        to="/"
        className="p-2 hover:bg-gray-700 rounded transition-colors text-gray-300 hover:text-white"
      >
         Home Feed
      </Link>

      <Link
        to="/profile"
        className="p-2 hover:bg-gray-700 rounded transition-colors text-gray-300 hover:text-white"
      >
         User Profile
      </Link>
    </div>
  );
}
