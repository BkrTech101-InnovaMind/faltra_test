import { useState, useEffect } from "react";
import useResponseData from "./useResponseData";

export default function useProcessedData() {
  const { data, isLoading, error } = useResponseData();
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const keysAndValues = data.map((item) => {
        return Object.keys(item).map((key) => ({
          key,
          value: item[key],
        }));
      });
      setProcessedData(keysAndValues);
    }
  }, [data, isLoading, error]);

  return { processedData, isLoading, error };
}
