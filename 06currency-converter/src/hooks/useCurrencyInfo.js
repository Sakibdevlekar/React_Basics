import { useEffect, useState } from "react";

/**
 * Fetches the latest currency data from an API and stores it in the state.
 *
 * @param {string} currency - The three-letter ISO currency code
 * @returns {object} The latest currency data
 */
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      });
  }, [currency]);
  // console.log(data);
  return data;
}

export default useCurrencyInfo;
