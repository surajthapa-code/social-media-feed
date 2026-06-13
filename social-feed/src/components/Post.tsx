interface PostData {
  id: number;
  user: string;
  avatarInitial: string;
  time: string;
  content: string;
  likes: number;
}
interface postProps {
  data: PostData;
  onLike: () => void;
  onDelete: () => void;
}

export default function Post({ data, onLike, onDelete }: postProps) {
  return (
    <div className="bg-gray-800/95 border border-gray-700 rounded-xl p-4 mb-4 shadow-md hover:border-gray-600 hover:shadow-lg transition-all duration-200">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mr-3 flex items-center justify-center font-bold text-white shadow">
          {data.avatarInitial}
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-white text-sm tracking-wide">
            {data.user}
          </h3>

          <p className="text-xs text-gray-400">{data.time}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-200 text-sm leading-relaxed mb-4">
        {data.content}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3 border-t border-gray-700 pt-3 text-sm">
        <button
          onClick={onLike}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-gray-400 hover:text-pink-400 hover:bg-gray-700/60 transition-all duration-200"
        >
          <span>❤️</span>
          <span>{data.likes}</span>
        </button>

        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-700/60 transition-all duration-200">
          <span>💬</span>
          <span>Comment</span>
        </button>

        <button
          onClick={onDelete}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-gray-400 hover:text-red-400 hover:bg-gray-700/60 transition-all duration-200 ml-auto"
        >
          <span>🗑️</span>
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
