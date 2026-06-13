import { useContext } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost.tsx";
import { PostContext, PostData } from "../contexts/PostContext";

function Feed() {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("Feed must be used within a PostProvider");
  }

  const { posts, dispatch } = context;

  function handleClicks(postID: number) {
    dispatch({ type: "LIKE_POST", payload: postID });
  }

  const handleAddPost = (postText: string) => {
    dispatch({ type: "ADD_POST", payload: postText });
  };
  const handleDeletePost = (postId: number) => {
    dispatch({ type: "DELETE_POST", payload: postId });
  };

  return (
    <>
      <CreatePost onAddPost={handleAddPost} />
      <h2>Feed </h2>
      {posts.map((post: PostData) => (
        <Post
          key={post.id}
          data={post}
          onDelete={() => handleDeletePost(post.id)}
          onLike={() => handleClicks(post.id)}
        />
      ))}
    </>
  );
}

export default Feed;
