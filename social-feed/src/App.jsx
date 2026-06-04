import { Feed,Trending,Sidebar } from "./components";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      
      <div className="md:col-span-1 bg-gray-800 rounded-lg p-4 border border-gray-700">
        <Sidebar />
      </div>

      <div className="md:col-span-2 bg-gray-800 rounded-lg p-4 border border-gray-700">
        <Feed />
      </div>

      <div className="md:col-span-1 bg-gray-800 rounded-lg p-4 border border-gray-700">
        <Trending />
      </div>

    </div>
  );
}