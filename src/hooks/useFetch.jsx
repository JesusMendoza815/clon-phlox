import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let response = await fetch(url);

        if (!response.ok) {
          throw {
            error: true,
            status: response.status,
            statusText: !response.statusText ? "Ocurrió un error" : response.statusText,
          };
        }

        let data = await response.json();

        setIsPending(false);
        setData(data);
        setError({ error: false });
      } catch (error) {
        setIsPending(true);
        setError({ error: false });
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
