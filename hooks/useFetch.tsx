import { useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async <ResType,>(
    url: RequestInfo,
    config: RequestInit,
    callback: (res: ResType | null, err: string | null) => any
  ) => {
    setIsLoading(true);

    try {
      const res = await fetch(url, config);

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const data: ResType = await res.json();

      callback(data, null);
    } catch (err) {
      if (err instanceof TypeError) callback(null, err.message);
      else if (typeof err === "string") callback(null, err);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendRequest, isLoading };
};

export default useFetch;
