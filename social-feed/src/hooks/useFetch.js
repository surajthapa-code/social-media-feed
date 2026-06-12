import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("an error accured", Error);
        }
        const dataSet = await response.json();
        setData(dataSet);
        setIsError(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, [url]);
  return { data, isError, isLoading };
}
