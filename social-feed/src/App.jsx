import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Trending from './components/Trending';

export default function App() {
  return (
    // This is Tailwind giving us a full-screen, dark background grid
    <div className="min-h-screen bg-gray-900 text-white grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      
      {/* Sidebar gets 1 column */}
      <div className="md:col-span-1 bg-gray-800 rounded-lg p-4 border border-gray-700">
        <Sidebar />
      </div>

      {/* Feed gets 2 columns (the center) */}
      <div className="md:col-span-2 bg-gray-800 rounded-lg p-4 border border-gray-700">
        <Feed />
      </div>

      {/* Trending gets 1 column */}
      <div className="md:col-span-1 bg-gray-800 rounded-lg p-4 border border-gray-700">
        <Trending />
      </div>

    </div>
  );
}