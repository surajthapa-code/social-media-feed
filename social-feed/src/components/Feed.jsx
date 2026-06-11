import { useContext } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { PostContext } from "../costexts/PostContext";

function Feed() {
  const { posts, dispatch } = useContext(PostContext);

  function handleClicks(postID) {
    dispatch({ type: "LIKE_POST", payload: postID });
  }

  const handleAddPost = (postText) => {
    dispatch({ type: "ADD_POST", payload: postText });
  };

  return (
    <>
      <CreatePost onAddPost={handleAddPost} />
      <h2>Feed </h2>
      {posts.map((post) => (
        <Post key={post.id} data={post} onLike={() => handleClicks(post.id)} />
      ))}
    </>
  );
}

export default Feed;
