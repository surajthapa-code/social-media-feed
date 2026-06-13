import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  Dispatch,
} from "react";

export interface PostData {
  id: number;
  user: string;
  avatarInitial: string;
  time: string;
  content: string;
  likes: number;
}
type PostAction =
  | { type: "ADD_POST"; payload: string }
  | { type: "DELETE_POST"; payload: number }
  | { type: "LIKE_POST"; payload: number };

interface PostContextType {
  posts: PostData[];
  dispatch: Dispatch<PostAction>;
}

const initialPosts = [
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
export const PostContext = createContext<PostContextType | undefined>(
  undefined,
);

function reducer(state: PostData[], action: PostAction): PostData[] {
  switch (action.type) {
    case "ADD_POST": {
      const newPost = {
        id: state.length > 0 ? state.length + 1 : 1,
        user: "My Account",
        avatarInitial: "M",
        time: "Just now",
        content: action.payload,
        likes: 0,
      };
      return [newPost, ...state];
    }

    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);

    case "LIKE_POST":
      return state.map((post) =>
        post.id === action.payload ? { ...post, likes: post.likes + 1 } : post,
      );

    default:
      return state;
  }
}
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(reducer, initialPosts, (inital) => {
    const savedPosts = localStorage.getItem("social_feed_posts");
    return savedPosts ? JSON.parse(savedPosts) : inital;
  });

  useEffect(() => {
    // Turn the array into a text string and save it to the browser
    localStorage.setItem("social_feed_posts", JSON.stringify(posts));
  }, [posts]);
  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
