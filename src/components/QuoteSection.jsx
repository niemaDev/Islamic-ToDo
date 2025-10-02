import { useState, useEffect } from "react";
import Loading from "./Loading";

function QuoteSection() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://api.quotable.io/random?tags=islam");
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setQuote(data.content || "Stay strong and keep your faith!");
        setAuthor(data.author || "Anonymous");
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Stay strong and keep your faith!");
        setAuthor("Anonymous");
      } finally {
        setLoading(false);
      }
    }

    fetchQuote();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="quote-section">
      <p>"{quote}"</p>
      {author && <p>- {author}</p>}
    </div>
  );
}

export default QuoteSection;
