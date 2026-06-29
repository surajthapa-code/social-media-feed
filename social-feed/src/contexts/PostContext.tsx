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
    time: "2h",
    content:
      "Finally deployed my first full-stack MERN app today. Seeing your project live on the internet feels different.",
    likes: 42,
  },
  {
    id: 2,
    user: "Tony Stark",
    avatarInitial: "T",
    time: "4h",
    content:
      "React 19 compiler is genuinely impressive. Automatic optimizations are reducing unnecessary re-renders significantly.",
    likes: 3120,
  },
  {
    id: 3,
    user: "Bruce Wayne",
    avatarInitial: "B",
    time: "8h",
    content: "Dark mode isn't a feature anymore. It's a requirement.",
    likes: 845,
  },
  {
    id: 4,
    user: "Natasha Romanoff",
    avatarInitial: "N",
    time: "10h",
    content:
      "Spent three hours debugging a missing semicolon. The bug was one character long.",
    likes: 532,
  },
  {
    id: 5,
    user: "Steve Rogers",
    avatarInitial: "S",
    time: "12h",
    content:
      "Consistency beats motivation. Solved two DSA problems today even though I wasn't feeling productive.",
    likes: 728,
  },
  {
    id: 6,
    user: "Miles Morales",
    avatarInitial: "M",
    time: "15h",
    content:
      "Anyone else learning TypeScript after JavaScript? The type errors hurt at first, but the code feels much safer.",
    likes: 211,
  },
  {
    id: 7,
    user: "Wanda Maximoff",
    avatarInitial: "W",
    time: "18h",
    content:
      "AI won't replace developers. Developers who know how to use AI effectively will replace those who don't.",
    likes: 1940,
  },
  {
    id: 8,
    user: "Clark Kent",
    avatarInitial: "C",
    time: "1d",
    content:
      "Started reading system design concepts today. It's amazing how much happens behind a simple 'Send' button.",
    likes: 483,
  },
  {
    id: 9,
    user: "Diana Prince",
    avatarInitial: "D",
    time: "1d",
    content:
      "Good UI is invisible. Users notice bad design much faster than good design.",
    likes: 961,
  },
  {
    id: 10,
    user: "Loki",
    avatarInitial: "L",
    time: "2d",
    content: "Merged directly into main. Chaos is a ladder.",
    likes: 1720,
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
