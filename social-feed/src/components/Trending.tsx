import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

interface HNArticle {
  objectID: string;
  url: string;
  title: string;
  points: number;
  author: string;
}

interface HNResponse {
  hits: HNArticle[];
}

function Trending() {
  const [searchInput, setSearchInput] = useState("Stock market");

  const [searchUrl, setSearchUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=stock market",
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") return;
    setSearchUrl(`https://hn.algolia.com/api/v1/search?query=${searchInput}`);
  };
  useEffect(() => {
    const delayedFetch = setTimeout(() => {
      if (searchInput.trim() === "") return;
      setSearchUrl(`https://hn.algolia.com/api/v1/search?query=${searchInput}`);
    }, 600);
    return () => clearTimeout(delayedFetch);
  }, [searchInput]);

  const { data: rawData, isError, isLoading } = useFetch<HNResponse>(searchUrl);
  const news = rawData && rawData.hits ? rawData.hits.slice(0, 10) : [];
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
        Trending Tech News
      </h2>
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-white focus:outline-none focus:border-blue-500 text-sm"
          placeholder="Search tech news..."
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors"
        >
          Search
        </button>
      </form>
      {isLoading && (
        <p className="text-gray-400 animate-pulse text-sm">
          Fetching live headlines...
        </p>
      )}
      {isError && <p className="text-red-400 text-sm">Failed to load news:</p>}

      {!isLoading && !isError && (
        <ul className="flex flex-col gap-3">
          {news.map((article: HNArticle) => (
            <li key={article.objectID}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-blue-400 transition-colors block"
              >
                • {article.title}
              </a>
              <p className="text-xs text-gray-500 mt-1 pl-3">
                {article.points} points by {article.author}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Trending;
