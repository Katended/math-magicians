import React, { useEffect, useState } from 'react';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const urlKey = '1huYYk+zqczgWbjc9JnDbw==v8vhqPo3lPwQJx8M';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?limit=1&category=hope',
          {
            method: 'GET',
            headers: { 'X-Api-Key': urlKey },
          });
        const res = await response.json();
        setQuotes(res);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setHasError, setIsLoading, setQuotes]);

  if (isLoading) return <div>Loading ...</div>;
  if (hasError) return <div>Something Went Wrong!</div>;

  return (
    <div className="quotes-container">
      <ul>
        {
          quotes.map((quote) => (
            <li key={quote.author}>{quote.quote}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Quote;
