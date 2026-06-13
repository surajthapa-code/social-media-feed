import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("an error accured");
        }
        const dataSet = (await response.json()) as T;
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
    if (url) {
      fetchNews();
    }
  }, [url]);
  return { data, isError, isLoading };
}
