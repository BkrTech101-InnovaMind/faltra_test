import { useState, useEffect } from "react";
import useResponseData from "./useResponseData";

export default function useProcessedData() {
  const { data, isLoading, error } = useResponseData();
  const [processedData, setProcessedData] = useState({
    bonus: [],
    industry: [],
    location: [],
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      const bonusSet = new Set();
      const industrySet = new Set();
      const locationSet = new Set();

      data.forEach((item) => {
        if (item.details.bonus) bonusSet.add(item.details.bonus);
        if (item.details.industry) industrySet.add(item.details.industry);
        if (item.details.country) locationSet.add(item.details.country);
      });

      setProcessedData({
        bonus: Array.from(bonusSet),
        industry: Array.from(industrySet),
        location: Array.from(locationSet),
      });
    }
  }, [data, isLoading, error]);

  return { processedData, isLoading, error };
}
