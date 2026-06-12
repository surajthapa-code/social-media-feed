import { useState } from "react";
export default function CreatePost({ onAddPost }) {
    
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim === "") {
      return;
    }
    onAddPost(text);
    setText("");
  }
  return (
    <>
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
            rows="3"
            placeholder="What's on your mind?"
            value={text} 
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
