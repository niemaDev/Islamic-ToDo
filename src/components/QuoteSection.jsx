import React from "react";
const QuoteSection = () => {
 const verse = { arabic: "مَنْ تَرَكَ شَيْئًا للهِ عَوْضَهُ اللهُ خَيْرًا",
    english:
      "Whoever leaves something for the sake of Allah, Allah will compensate him with something better."
  };

  return (
    <div className="quote-section">
      <p className="quote-arabic">{verse.arabic}</p>
      <p className="quote-english">{verse.english}</p>
    </div>
  );
};
export default QuoteSection;
