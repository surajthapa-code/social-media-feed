import { Feed, Trending, Sidebar, Profile } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="md:col-span-1 bg-gray-800 rounded-lg p-4 border border-gray-700">
          <Sidebar />
        </div>

        <div className="md:col-span-2 bg-gray-800 rounded-lg p-4 border border-gray-700">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>

        <div className="md:col-span-1 bg-gray-800 rounded-lg p-4 border border-gray-700">
          <Trending />
        </div>
      </div>
    </BrowserRouter>
  );
}
