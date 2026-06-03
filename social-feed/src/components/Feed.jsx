import Post from "./Post";

const mockPosts = [
  {
    id: 1,
    user: "Peter Parker",
    avatarInitial: "P",
    time: "2 hours ago",
    content:
      "This is my first static post on my new platform! Preparing for the full-stack MERN integration.",
    likes: 0,
  },
  {
    id: 2,
    user: "Tony Stark",
    avatarInitial: "T",
    time: "4 hours ago",
    content:
      "Just finished building a new AI cluster. React 19 compiler is looking incredibly optimized.",
    likes: 3000,
  },
  {
    id: 3,
    user: "Bruce Wayne",
    avatarInitial: "B",
    time: "1 day ago",
    content:
      "Dark mode is the only acceptable UI theme. Good job on the Tailwind setup.",
    likes: 104,
  },
];

function Feed() {
  return (
    <>
      <h2>Feed </h2>
      {mockPosts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
}

export default Feed;
