export default function Post({ data, onLike }) {
  return (
    <div
      key={data.id}
      className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-4 shadow-sm"
    >
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 mr-3 flex items-center justify-center font-bold">
          {data.avatarInitial}
        </div>
        <div>
          <h3 className="font-bold text-white text-sm">{data.user}</h3>
          <p className="text-xs text-gray-400">{data.time}</p>
        </div>
      </div>

      <p className="text-gray-200 text-sm mb-4">{data.content}</p>

      <div className="flex items-center text-gray-400 text-sm border-t border-gray-700 pt-3">
        <button
          onClick={onLike}
          className="hover:text-blue-400 transition-colors flex items-center mr-6"
        >
          <span className="mr-1">❤️</span> {data.likes}
        </button>
        <button className="hover:text-blue-400 transition-colors flex items-center">
          <span className="mr-1">💬</span> Comment
        </button>
      </div>
    </div>
  );
}
