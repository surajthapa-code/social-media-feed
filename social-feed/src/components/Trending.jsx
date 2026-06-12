import useFetch from "../hooks/useFetch";

function Trending() {
  const {
    data: rawData,
    isError,
    isLoading,
  } = useFetch("https://hn.algolia.com/api/v1/search?tags=front_page");
  const news = rawData && rawData.hits ? rawData.hits.slice(0, 10) : [];
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
        Trending Tech News
      </h2>

      {isLoading && (
        <p className="text-gray-400 animate-pulse text-sm">
          Fetching live headlines...
        </p>
      )}
      {isError && <p className="text-red-400 text-sm">Failed to load news:</p>}

      {!isLoading && !isError && (
        <ul className="flex flex-col gap-3">
          {news.map((article) => (
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
