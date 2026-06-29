import { Link } from "react-router-dom";
import { House, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sticky top-0 h-screen p-4">
      <h2 className="text-xl font-bold mb-4   border-b border-gray-700 pb-2">
        Navigation
      </h2>

      <Link
        to="/"
        className="flex items-center gap-4 p-3 rounded-full hover:bg-zinc-900"
      >
        <House size={22} />
        Home
      </Link>

      <Link
        to="/profile"
        className="flex items-center gap-4 p-3 rounded-full hover:bg-zinc-900"
      >
        <House size={22} />
        Profile
      </Link>
    </div>
  );
}
