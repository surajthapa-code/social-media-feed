export default function Profile() {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
        User Profile
      </h2>
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-purple-600 mr-4 flex items-center justify-center text-2xl font-bold">
          M
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">My Account</h3>
          <p className="text-gray-400">@fullstack_dev</p>
        </div>
      </div>
      <p className="text-gray-300">
        hello user
      </p>
    </div>
  );
}
